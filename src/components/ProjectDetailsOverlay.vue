<template>
  <transition name="fade">
    <div v-if="visible" class="overlay-wrapper">
      <div class="overlay" @click="$emit('close')"></div>
      <div class="dialog">
        <div class="dialog-header" :style="{ 'background': `linear-gradient(135deg, ${color} 0%, ${color}dd 100%)` }">
          <h1 class="dialog-title">{{ title }}</h1>
          <button @click="$emit('close')" class="dialog-close" aria-label="Close">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div class="dialog-content">
          <!-- Short Description -->
          <div v-if="projectData?.shortDescription" class="content-section">
            <h3 class="section-title">
              <span class="section-icon">📋</span>
              Overview
            </h3>
            <div class="section-content" v-html="projectData.shortDescription"></div>
          </div>

          <!-- Media Slider (Swiper) -->
          <div v-if="hasMedia" class="content-section media-section media-slider">
            <h3 class="section-title">
              <span class="section-icon">🎬</span>
              Media
            </h3>
                <Swiper
                  class="custom-swiper"
                  :modules="modules"
                  :space-between="16"
                  :loop="true"
                  :auto-height="true"
                  :pagination="pagination"
                  :navigation="true"
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
            <div class="media-pagination"></div>
          </div>

          <!-- Full Description -->
          <div v-if="projectData?.fullDescription" class="content-section">
            <h3 class="section-title">
              <span class="section-icon">📝</span>
              Description
            </h3>
            <div class="section-content" v-html="projectData.fullDescription"></div>
          </div>

          <!-- My Role -->
          <div v-if="projectData?.role && projectData.role.trim() !== ''" class="content-section">
            <h3 class="section-title">
              <span class="section-icon">👤</span>
              My Role
            </h3>
            <div class="section-content" v-html="projectData.role"></div>
          </div>

          <!-- Links -->
          <div v-if="projectData?.links && projectData.links.length > 0" class="content-section">
            <h3 class="section-title">
              <span class="section-icon">🔗</span>
              Links
            </h3>
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
        <div class="dialog-footer">
          <button @click="$emit('close')" class="close-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            Close
          </button>
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
        el: '.dialog .media-pagination',
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
      currentSlideIndex: 0,
      swiperRef: null as unknown as { slidePrev: () => void; slideNext: () => void },
      keydownHandler: null as unknown as (e: KeyboardEvent) => void,
    };
  },

  created() {
    this.keydownHandler = (event: KeyboardEvent) => this.onGlobalKeydown(event);
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
    getFullUrl(path: string): string {
      if (path.startsWith("http")) {
        return path;
      }
      return `${this.baseUrl}${path}`;
    },
    getVideoEmbedUrl(videoUrl: string): string {
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
      const iframes = document.querySelectorAll<HTMLIFrameElement>('.media-section iframe, .media-slider iframe');
      iframes.forEach((iframe) => {
        try {
          iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } catch (e) {
          void 0;
        }
      });
    },
    playCurrentVideo() {
      // For YouTube embeds, ensure muted then play (autoplay policies)
      const iframes = document.querySelectorAll<HTMLIFrameElement>('.media-section iframe, .media-slider iframe');
      const target = iframes[this.currentSlideIndex];
      if (target) {
        try {
          target.contentWindow?.postMessage('{"event":"command","func":"mute","args":""}', '*');
          setTimeout(() => {
            target.contentWindow?.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
          }, 50);
        } catch (e) {
          void 0;
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
        // Add global listeners for ESC key
        window.addEventListener('keydown', this.keydownHandler as EventListener);
      } else {
        // Pause all videos when closing
        this.pauseAllVideos();
        // Remove listeners
        window.removeEventListener('keydown', this.keydownHandler as EventListener);
      }
    },
  },

  beforeUnmount() {
    // Cleanup in case component is removed while overlay open
    window.removeEventListener('keydown', this.keydownHandler as EventListener);
  },
});
</script>

<style scoped>
.overlay-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(4px);
  z-index: 1001;
}

.dialog {
  position: relative;
  z-index: 1002;
  width: 100%;
  max-width: 1000px;
  max-height: 90vh;
  background: rgba(20, 20, 25, 0.98);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.dialog-header {
  padding: 24px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.dialog-title {
  font-size: 1.8rem;
  font-weight: 700;
  margin: 0;
  color: #ffffff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.dialog-close {
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.dialog-close:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
}

.dialog-content {
  padding: 32px;
  overflow-y: auto;
  flex: 1;
  color: rgba(255, 255, 255, 0.9);
}

.dialog-footer {
  padding: 20px 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
}

.close-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close-button:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

/* Content sections */
.content-section {
  margin-bottom: 40px;
}

.content-section:last-child {
  margin-bottom: 0;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
  padding-bottom: 12px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.section-icon {
  font-size: 1.3rem;
}

.section-content {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
}

.section-content p {
  margin: 0 0 12px 0;
}

.section-content p:last-child {
  margin-bottom: 0;
}

/* Media Slider */
.media-slider {
  margin-bottom: 0;
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

.media-swiper :deep(.swiper),
.media-swiper :deep(.swiper-slide) {
  height: auto !important; /* ✅ let content define height */
  max-height: 80vh;
}

/* pagination positioned as a centered block below the swiper */
.media-pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  z-index: 20;
  pointer-events: auto; /* keep bullets clickable */
  flex-wrap: wrap; /* Allow wrapping to multiple lines */
  max-width: 100%; /* Ensure it doesn't overflow */
}

.media-pagination :deep(.swiper-pagination-bullet) {
  margin: 0 6px;
  flex-shrink: 0; /* Prevent bullets from shrinking too much */
  min-width: 16px; /* Ensure minimum clickable size */
}

.side-nav {
  border: none;
  /* responsive square buttons: keep 1:1 ratio and scale with viewport */
  width: clamp(36px, 6vw, 56px);
  aspect-ratio: 1 / 1;
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


/* Force all images and iframes inside the Swiper to respect 80vh limit */
.media-slider :deep(.swiper-slide img),
.media-slider :deep(.swiper-slide iframe) {
  max-width: 100%;
  max-height: 80vh;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  margin: 0 auto;
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
  flex-shrink: 0; /* Prevent bullets from shrinking too much */
  min-width: 16px; /* Ensure minimum clickable size */
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
  gap: 12px;
}

.link-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  background: rgba(59, 130, 246, 0.1);
  color: #60a5fa;
  text-decoration: none;
  border-radius: 10px;
  transition: all 0.3s ease;
  border: 1px solid rgba(59, 130, 246, 0.3);
  font-weight: 500;
}

.link-button:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.5);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2);
  color: #93c5fd;
}

.link-button i {
  font-size: 0.9em;
}

/* Media Section */
.media-section {
  margin-bottom: 40px;
}

iframe {
  width: 100%;
  border-radius: 12px;
}

@media only screen and (max-width: 768px) {
  .overlay-wrapper {
    padding: 10px;
  }

  .dialog {
    max-height: 95vh;
    border-radius: 16px;
  }

  .dialog-header {
    padding: 20px;
  }

  .dialog-title {
    font-size: 1.4rem;
  }

  .dialog-content {
    padding: 24px 20px;
  }

  .dialog-footer {
    padding: 16px 20px;
  }

  .section-title {
    font-size: 1.2rem;
  }

  .section-content {
    font-size: 1rem;
  }

  .links-grid {
    grid-template-columns: 1fr;
  }
}

/* 🧭 Limit Swiper height */
.custom-swiper {
  width: 100%;
  max-height: 80vh;
  height: auto;           /* ✅ allow auto height based on image ratio */
  overflow: visible;      /* ✅ don’t clip portrait images */
}


/* Make slide contents fit within 80% height */
.custom-swiper :deep(.swiper-slide) {
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-swiper :deep(img) {
  max-height: 80vh;
  height: auto;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  margin: 0 auto;
}


.custom-swiper :deep(iframe) {
  max-height: 80vh;
  max-width: 100%;
  object-fit: contain;
  border-radius: 12px;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active .dialog,
.fade-leave-active .dialog {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.fade-enter-from .dialog,
.fade-leave-to .dialog {
  transform: scale(0.95);
  opacity: 0;
}

</style>
