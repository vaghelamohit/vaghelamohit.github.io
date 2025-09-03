<template>
  <div>
    <div class="projects-list">
      <template v-if="projects && projects.length" v-for="project in projects" :key="project.id">
        <div
            class="project-item"
            :class="{ 'wide': project.isWide, 'high': project.isHigh }"
            :style="{ '--accent': project.accentColor }"
            role="button"
            tabindex="0"
            @click="showDetails(project)"
            @keydown.enter="showDetails(project)">
          <div class="project-item-image">
            <img :src="project.baseUrl+project.iconUrl" :alt="project.name" loading="lazy" />
            <div class="image-overlay"></div>
          </div>
          <div class="title-bar">
            <div class="title-dot" :style="{ background: 'linear-gradient(135deg, ' + project.accentColor + ', rgba(255,255,255,0.4))' }"></div>
            <div class="title-text">{{ project.name }}</div>
          </div>
        </div>
      </template>

      <template v-else>
        <div v-for="i in 6" :key="'skeleton-' + i" class="project-item skeleton">
          <div class="project-item-image shimmer"></div>
          <div class="title-bar">
            <div class="title-dot"></div>
            <div class="title-text muted">Loading…</div>
          </div>
        </div>
      </template>
    </div>

    <ProjectDetailsOverlay
      v-on:close="showPopup = false"
      :visible="showPopup"
      :title="popupTitle"
      :htmlContent="popupContent"
      :baseUrl="baseUrl"
      :color="popupColor"
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
      popupContent: "",
      baseUrl:"",
    };
  },
  methods: {
    showDetails: function (item: ProjectData) {
      // if (event) {
      //   alert(event.target);
      // }
      this.popupTitle = item.name;
      this.popupColor = item.accentColor;
      this.popupContent = item.htmlDescription;
      this.baseUrl = item.baseUrl;
      this.showPopup = true;
      window.scrollTo(0,0);
    },
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
  border-radius: 16px;
  background: #111418;
  box-shadow: 0 10px 24px rgba(0,0,0,0.20);
  outline: 1px solid rgba(255,255,255,0.06);
  transition: transform 0.18s ease, box-shadow 0.2s ease, outline-color 0.2s ease, filter 0.2s ease;
}

.project-item-image {
  height: 100%;
  width: 100%;
  transition: all 0.2s;
  position: relative;
}
.project-item-image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
  display: block;
}
.project-item-image:hover {
  -webkit-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
}

.project-item:hover {
  filter: brightness(110%);
  transform: translateY(-4px);
  box-shadow: 0 16px 36px rgba(0,0,0,0.28);
  outline-color: color-mix(in srgb, var(--accent, #3b82f6) 30%, rgba(255,255,255,0.06));
}

.title-bar {
  position: absolute;
  bottom: 0px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 40%, rgba(0,0,0,0.75) 100%);
  backdrop-filter: saturate(140%) blur(2px);
}

.title-text {
  padding: 12px 14px;
  font-weight: 500;
  letter-spacing: 0.2px;
}

.title-dot {
  width: 10px;
  height: 10px;
  margin-left: 12px;
  border-radius: 50%;
  background: var(--accent, #3b82f6);
  box-shadow: 0 0 0 3px rgba(0,0,0,0.35), 0 0 16px rgba(59,130,246,0.45);
}

.image-overlay {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(60% 50% at 50% 60%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.45) 100%);
  pointer-events: none;
}

.muted { opacity: 0.65; }

.skeleton .project-item-image {
  background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 37%, rgba(255,255,255,0.06) 63%);
  background-size: 400% 100%;
}

.shimmer { animation: shimmer 1.2s ease-in-out infinite; }

@keyframes shimmer {
  0% { background-position: 100% 0; }
  100% { background-position: 0 0; }
}

@media only screen and (min-width: 620px){
  .projects-list {
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 22px;
    grid-auto-rows: minmax(250px, auto);
  }

  .project-item {
    margin: 0px;
    height: 100%;
    width: 100%;
  }

  .wide {
    grid-column-end: span 2;
  }
  .high {
    grid-row-end: span 2;
  }
}



</style>