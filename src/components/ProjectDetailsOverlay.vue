<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay" @click="$emit('close')">
      </div>
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <div @click="$emit('close')" class="dialog-close"><i class="fa fa-times fa-lg fa-fw"></i></div>
        <div class="dialog-content">
          <!-- Short Description -->
          <div v-if="projectData?.shortDescription" class="short-description">
            <h3>Overview</h3>
            <div v-html="projectData.shortDescription"></div>
          </div>

          <!-- Media Slider (Swiper) -->
          <div v-if="hasMedia" class="media-slider">
            <h3>Media</h3>
            <div class="media-row">
              <button class="side-nav prev" type="button" @click="goPrev"><i class="fa fa-chevron-left"></i></button>
              <div class="media-swiper">
                <Swiper
                  :modules="modules"
                  :space-between="16"
                  :slides-per-view="1"
                  :pagination="pagination"
                  @swiper="onSwiper"
                  @slide-change="onSlideChange"
                >
                  <SwiperSlide v-for="(video, index) in projectData?.videos || []" :key="`vid-${index}`">
                    <iframe :src="getVideoEmbedUrl(video)" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                  </SwiperSlide>
                  <SwiperSlide v-for="(image, index) in projectData?.images || []" :key="`img-${index}`">
                    <img :src="getFullUrl(image)" :alt="`Screenshot ${index + 1}`" />
                  </SwiperSlide>
                </Swiper>
              </div>
              <button class="side-nav next" type="button" @click="goNext"><i class="fa fa-chevron-right"></i></button>
            </div>
          </div>

          <!-- Full Description -->
          <div v-if="projectData?.fullDescription" class="full-description">
            <h3>Description</h3>
            <div v-html="projectData.fullDescription"></div>
          </div>

          <!-- Links -->
          <div v-if="projectData?.links && projectData.links.length > 0" class="links-section">
            <h3>Links</h3>
            <div class="links-grid">
              <a 
                v-for="link in projectData.links" 
                :key="link.name"
                :href="link.url" 
                target="_blank" 
                rel="noopener noreferrer"
                class="link-button"
              >
                <i class="fa fa-external-link"></i>
                {{ link.name }}
              </a>
            </div>
          </div>

        </div>
        <div class="dialog-bottom">
          <a @click="$emit('close')" class="dialog-close-button">Close</a>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectData from "@/data/ProjectData";
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default defineComponent({
  name: "ProjectDetailsOverlay",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    visible: Boolean,
    color: String,
    title: String,
    baseUrl: String,
    projectData: Object as () => ProjectData | null,
  },
  data() {
    return {
      modules: [Pagination, Navigation],
      pagination: {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      currentSlideIndex: 0,
      swiperRef: null as unknown as { slidePrev: () => void; slideNext: () => void },
      pushedState: false,
      // handlers references for add/remove
      keydownHandler: null as unknown as (e: KeyboardEvent) => void,
      popstateHandler: null as unknown as () => void,
    };
  },

  created() {
    // create bound handlers so we can remove them later
    this.keydownHandler = (event: KeyboardEvent) => this.onGlobalKeydown(event);
    this.popstateHandler = () => this.onPopState();
  },
  computed: {
    hasMedia(): boolean {
      return !!(this.projectData?.images?.length || this.projectData?.videos?.length);
    },
  },
  methods: {
    onGlobalKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        this.$emit('close');
      }
    },
    onPopState() {
      // When the user presses the native back button, close the overlay if it's open
      if (this.visible) {
        this.$emit('close');
      }
    },
    getFullUrl(path: string): string {
      if (path.startsWith("http")) {
        return path;
      }
      return `${this.baseUrl}${path}`;
    },
    getVideoEmbedUrl(videoUrl: string): string {
      // Convert YouTube URLs to embed format with API enabled and inline/muted for autoplay
      if (videoUrl.includes("youtube.com/watch")) {
        const videoId = videoUrl.split("v=")[1]?.split("&")[0];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&mute=1&origin=${window.location.origin}`;
      }
      if (videoUrl.includes("youtu.be/")) {
        const videoId = videoUrl.split("youtu.be/")[1]?.split("?")[0];
        return `https://www.youtube.com/embed/${videoId}?enablejsapi=1&playsinline=1&mute=1&origin=${window.location.origin}`;
      }
      return videoUrl;
    },
    onSlideChange(swiper: { activeIndex: number }) {
      this.currentSlideIndex = swiper.activeIndex;
      setTimeout(() => {
        this.handleVideoPlayPause();
      }, 150);
    },
    onSwiper(swiper: { slidePrev: () => void; slideNext: () => void }) {
      this.swiperRef = swiper;
    },
    goPrev() {
      this.swiperRef?.slidePrev?.();
    },
    goNext() {
      this.swiperRef?.slideNext?.();
    },
    handleVideoPauseOnChange() {
      // Pause all videos when slide changes. Do not autoplay on focus.
      this.pauseAllVideos();
    },
    handleVideoPlayPause() {
      // Pause all first, then play current if it's a video slide
      this.pauseAllVideos();
      const videoCount = this.projectData?.videos?.length || 0;
      if (this.currentSlideIndex < videoCount) {
        this.playCurrentVideo();
      }
    },
    pauseAllVideos() {
      // For YouTube embeds, we can't directly control playback due to iframe restrictions
      // But we can send pause messages to all iframes
      const iframes = document.querySelectorAll<HTMLIFrameElement>('.media-slider iframe');
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } catch (e) {
          // Ignore cross-origin errors
        }
      });
    },
    playCurrentVideo() {
      // For YouTube embeds, ensure muted then play (autoplay policies)
      const iframes = document.querySelectorAll<HTMLIFrameElement>('.media-slider iframe');
      const target = iframes[this.currentSlideIndex];
      if (target) {
        try {
          target.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
          setTimeout(() => {
            target.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }, 50);
        } catch (e) {
          // Ignore cross-origin errors
        }
      }
    },
  },
  watch: {
    visible(newVal) {
      if (newVal) {
        // Reset to first slide when opening
        this.currentSlideIndex = 0;
        // Handle initial video state after a short delay to ensure DOM is ready
        setTimeout(() => {
          this.handleVideoPlayPause();
        }, 100);
        // Add global listeners for ESC key and popstate (mobile back)
  window.addEventListener('keydown', this.keydownHandler as EventListener);
  window.addEventListener('popstate', this.popstateHandler as EventListener);
        // Push a new history state so that back button can be used to close overlay
        try {
          history.pushState({ overlayOpen: true }, '');
          this.pushedState = true;
        } catch (e) {
          this.pushedState = false;
        }
      } else {
        // Pause all videos when closing
        this.pauseAllVideos();
        // Remove listeners
  window.removeEventListener('keydown', this.keydownHandler as EventListener);
  window.removeEventListener('popstate', this.popstateHandler as EventListener);
        // If we pushed a history state, go back one to restore history
        if (this.pushedState) {
          try {
            history.back();
          } catch (e) {
            // ignore
          }
          this.pushedState = false;
        }
      }
    },
  },

  beforeUnmount() {
    // Cleanup in case component is removed while overlay open
  window.removeEventListener('keydown', this.keydownHandler as EventListener);
  window.removeEventListener('popstate', this.popstateHandler as EventListener);
  },
});
</script>

<style scoped>
.overlay {
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  padding-bottom: 10px;
  color:white;
  overflow: hidden; /* keep all content inside the popup */
}

iframe {
  width: 100%;
}

h1.dialog-title {
  text-align: center;
  font-size: 1.3em;
  margin: 0px;
  padding: 22px;
}

.dialog-content {
  padding: 20px;
}

.dialog-content {
  background-color: #fcfcfc;
  color: #696969;
}
.dialog-close {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor:pointer;
  font-size: 1.2em;
  font-weight: 100;
}
.dialog-close:hover {
  opacity: 0.6;
}

.dialog-bottom {
  text-align: center;
}

a.dialog-close-button {
  cursor:pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
}

/* Content sections */
.short-description,
.full-description,
.links-section {
  margin-bottom: 30px;
}

.short-description h3,
.full-description h3,
.links-section h3 {
  color: #333;
  margin-bottom: 15px;
  font-size: 1.2em;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

.short-description p,
.full-description p {
  line-height: 1.6;
  margin: 0;
}

/* Media Slider */
.media-slider {
  margin-bottom: 30px;
  position: relative;
}

.media-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.media-swiper {
  flex: 1 1 auto;
  max-width: 82%; /* reduce swiper width so side buttons are outside */
}

/* Give the swiper a fixed visual height and center contents vertically */
.media-swiper :deep(.swiper) {
  height: 70vh;
}

.media-swiper :deep(.swiper-wrapper) {
  height: 100%;
}

.media-swiper :deep(.swiper-slide) {
  height: 100%;
}

.side-nav {
  border: none;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.95);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.side-nav:hover {
  transform: scale(1.06);
}

.media-slider img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  display: block;
  border-radius: 8px;
  margin: 0 auto;
}

.media-slider iframe {
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  height: auto;
  max-height: 100%;
  border: none;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}

/* Center slide contents */
.media-slider :deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.media-slider :deep(.swiper-slide img),
.media-slider :deep(.swiper-slide iframe) {
  max-width: 100%;
  max-height: 100%;
}

@media only screen and (max-width: 619px){
  .media-swiper :deep(.swiper) {
    height: 60vh; /* slightly shorter on small screens */
  }
}

/* Custom Swiper Pagination */
.media-slider :deep(.swiper-pagination) {
  position: relative;
  margin-top: 20px;
}

.media-slider :deep(.swiper-pagination-bullet) {
  width: 16px;
  height: 16px;
  background: #ccc;
  opacity: 1;
  margin: 0 8px;
  transition: all 0.3s ease;
  cursor: pointer;
  font-size: 10px;
  line-height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.media-slider :deep(.swiper-pagination-bullet:hover) {
  background: #999;
  transform: scale(1.15);
}

.media-slider :deep(.swiper-pagination-bullet-active) {
  background: #333;
  transform: scale(1.25);
}

/* Custom Swiper Navigation */
.media-slider :deep(.swiper-button-next),
.media-slider :deep(.swiper-button-prev) {
  color: #333;
  background: rgba(255, 255, 255, 0.9);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  z-index: 5;
  pointer-events: auto;
}

.media-slider :deep(.swiper-button-next:hover),
.media-slider :deep(.swiper-button-prev:hover) {
  background: rgba(255, 255, 255, 1);
  transform: scale(1.1);
}

.media-slider :deep(.swiper-button-next:after),
.media-slider :deep(.swiper-button-prev:after) {
  font-size: 18px;
  font-weight: bold;
}

.media-slider :deep(.swiper-button-disabled) {
  opacity: 0.3;
  cursor: not-allowed;
}

/* Ensure navigation is clickable over iframes */
.media-slider :deep(.swiper) {
  position: relative;
  overflow: hidden; /* confine slides within popup */
}

/* Keep nav buttons vertically centered */
.media-slider :deep(.swiper-button-prev),
.media-slider :deep(.swiper-button-next) {
  top: 50%;
  transform: translateY(-50%);
}

/* Put iframes below nav buttons */
.media-slider :deep(iframe) {
  position: relative;
  z-index: 1;
}

/* Links */
.links-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #f5f5f5;
  color: #333;
  text-decoration: none;
  border-radius: 6px;
  transition: all 0.3s ease;
  border: 1px solid #ddd;
}

.link-button:hover {
  background: #e9e9e9;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.link-button i {
  font-size: 0.9em;
}

@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 1.6em;
  }

  .dialog-content {
    padding: 40px;
  }

  .media-slider iframe {
    height: 400px;
  }

  .links-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
}


</style>
