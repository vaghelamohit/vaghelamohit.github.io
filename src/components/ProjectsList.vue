<template>
  <div>
    <div class="projects-list">
      <template v-for="project in projects" :key="project.id">
        <div
            @click="showDetails(project)"
            class="project-item"
            :class="{ [`width-${project.width}`]: true, [`height-${project.height}`]: true }"
            :style="{ 'aspect-ratio': getProjectAspectRatio(project) }">
          <template v-if="project.iconUrl && project.iconUrl.toLowerCase().endsWith('.mp4')">
            <video
              class="project-item-video"
              :src="getIconSrc(project)"
              autoplay
              muted
              loop
              playsinline
              preload="metadata"
            ></video>
          </template>
          <template v-else>
            <div class="project-item-image" :style="{ 'background-image': 'url(' + getIconSrc(project) + ')' }">
            </div>
          </template>
          <div class="title-bar" :style="{ 'background-color': project.accentColor + 'DD' }">
              <div class="title-text">
                {{ project.name }}
              </div>
            </div>
        </div>
      </template>
    </div>
    <ProjectDetailsOverlay
      v-on:close="closeOverlay"
      :visible="showPopup"
      :title="popupTitle"
      :baseUrl="baseUrl"
      :color="popupColor"
      :projectData="popupProjectData"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectDetailsOverlay from "@/components/ProjectDetailsOverlay.vue";
import ProjectData from "@/data/ProjectData";

export default defineComponent({
  name: "ProjectsList",
  components: {
    ProjectDetailsOverlay,
  },
  props: {
    projects: Array<ProjectData>
  },
  data: function () {
    return {
      showPopup: false,
      popupTitle: "",
      popupColor: "",
      baseUrl:"",
      popupProjectData: null as ProjectData | null,
      savedScrollPosition: 0,
    };
  },
  computed: {
    getProjectAspectRatio: function() {
      return (project: ProjectData) => {
        // Calculate aspect ratio based on width and height
        // Default base ratio is 6:5, then multiply by width/height ratio
        const baseRatio = 6 / 5; // 1.2
        const widthHeightRatio = project.width / project.height;
        return baseRatio * widthHeightRatio;
      };
    }
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      // Save current scroll position before opening overlay
      this.savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.baseUrl = item.baseUrl;
      this.popupProjectData = item; // Pass the full project data
      this.showPopup = true;
      window.scrollTo(0,0);
    },
    getIconSrc(project: ProjectData): string {
      const path = project.iconUrl || '';
      if (!path) return '';
      if (path.startsWith('http')) return path;
      // ensure baseUrl ends with slash
      const base = project.baseUrl || '';
      if (base.endsWith('/')) return base + path;
      return base + '/' + path;
    },
    closeOverlay: function () {
      this.showPopup = false;
      // Restore scroll position after a short delay to ensure overlay is closed
      setTimeout(() => {
        window.scrollTo(0, this.savedScrollPosition);
      }, 100);
    }
  },
});
</script>

<style scoped>

.project-item {
  margin-bottom: 20px;
  width: 100%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.project-item-image {
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  transition: all 0.2s;
}
.project-item-video {
  width: 100%;
  height: 100%;
  object-fit: cover; /* behave like background-size: cover */
  display: block;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(120%);
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #222222;
}

.title-text {
  padding: 10px;
}

/* base container centering so the grid isn't flush-left */
.projects-list {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 12px;
  box-sizing: border-box;
}

/* Mobile-first: single column by default */
.projects-list {
  display: block;
}

/* Two columns on medium screens */
@media only screen and (min-width: 520px){
  .projects-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    /* let items size themselves via aspect-ratio */
    grid-auto-rows: auto;
  }
  /* when in grid mode, items should stretch to fill cell and not use bottom margin */
  .projects-list .project-item {
    margin: 0;
    height: auto;
  }
}

/* Three columns on wider screens (max 3 columns) */
@media only screen and (min-width: 900px){
  .projects-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: auto;
  }
  .projects-list .project-item {
    margin: 0;
    height: auto;
  }
}

/* project item defaults (mobile): keep bottom margin so rows have spacing */
.project-item { 
  width: 100%; 
}

.width-1 { grid-column-end: span 1; }
.width-2 { grid-column-end: span 2; }
.width-3 { grid-column-end: span 3; }

.height-1 { grid-row-end: span 1; }
.height-2 { grid-row-end: span 2; }
.height-3 { grid-row-end: span 3; }

</style>