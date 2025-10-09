<template>
  <div>
    <div class="projects-list">
      <template v-for="project in projects" :key="project.id">
        <div
            @click="showDetails(project)"
            class="project-item"
            :class="{ [`width-${project.width}`]: true, [`height-${project.height}`]: true }">
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
      v-on:close="showPopup = false"
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
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
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
    }
  },
});
</script>

<style scoped>

.project-item {
  height: 300px;
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

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 900px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .width-1 {
    grid-column-end: span 1;
  }
  .width-2 {
    grid-column-end: span 2;
  }
  .width-3 {
    grid-column-end: span 3;
  }
  .height-1 {
    grid-row-end: span 1;
  }
  .height-2 {
    grid-row-end: span 2;
  }
  .height-3 {
    grid-row-end: span 3;
  }
}



</style>