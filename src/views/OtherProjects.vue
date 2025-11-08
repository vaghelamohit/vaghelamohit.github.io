<template>
  <div class="other-projects-page">
    <div class="page-header">
      <h1 class="page-title">Other Projects</h1>
      <p class="page-description">
        A collection of web and mobile apps I've developed and contributed to, showcasing my expertise in full-stack development, UI/UX design, and modern web technologies.
      </p>
    </div>

    <div class="projects-wrapper">
      <ProjectsList :projects="projects" />
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import ProjectData from "@/data/ProjectData";

export default defineComponent({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
     return {
      projects: [] as Array<{ id: string; baseUrl:string; name: string; iconUrl: string; width: number; height: number; accentColor: string; shortDescription?: string; fullDescription?: string; links?: Array<{name: string; url: string}>; videos?: string[]; images?: string[]; preloadImages?: string[] }>,
    };
  },
  created: async function () {
    const response = await fetch(`${import.meta.env.BASE_URL}projectList.json`);
    const projectList = await response.json();
    const projectPromises = projectList.otherProjects.map(async (projectInfo: { id: string; baseUrl?: string; override?: Partial<ProjectData> }) => {
      // Use the project-specific baseUrl if provided, otherwise use the global one
      const baseUrl = projectInfo.baseUrl || projectList.baseUrl;
      const projectResponse = await fetch(`${baseUrl}${projectInfo.id}/data.json`);
      const projectData = await projectResponse.json();
      // Apply the base URL
      projectData.baseUrl = `${baseUrl}${projectInfo.id}/`;
      // Apply any override values
      if (projectInfo.override) {
        Object.assign(projectData, projectInfo.override);
      }
      return projectData;
    });
    this.projects = await Promise.all(projectPromises);
  },
});
</script>

<style scoped>
.other-projects-page {
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px 80px;
}

.page-header {
  margin-bottom: 50px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.page-title {
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  color: #ffffff;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.2;
  overflow: visible;
  word-wrap: break-word;
  display: block;
}

.page-description {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.7;
  margin: 0;
  max-width: 800px;
}

.projects-wrapper {
  position: relative;
}

/* Modern project cards */
:deep(.projects-list) {
  padding: 0;
  gap: 24px;
}

:deep(.project-item) {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
}

:deep(.project-item:hover) {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  border-color: rgba(59, 130, 246, 0.4);
}

:deep(.project-item-image),
:deep(.project-item-video) {
  transition: transform 0.4s ease;
  border-radius: 12px 12px 0 0;
}

:deep(.project-item:hover .project-item-image),
:deep(.project-item:hover .project-item-video) {
  transform: scale(1.05);
}

:deep(.title-bar) {
  border-radius: 0 0 12px 12px;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.7) !important;
  padding: 0;
}

:deep(.title-text) {
  padding: 14px 18px;
  font-size: 1rem;
  font-weight: 600;
  color: #ffffff;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

@media only screen and (max-width: 768px) {
  .other-projects-page {
    padding: 30px 15px 60px;
  }

  .page-header {
    margin-bottom: 40px;
    padding-bottom: 20px;
  }

  .page-title {
    font-size: 2rem;
  }

  .page-description {
    font-size: 1rem;
  }

  :deep(.projects-list) {
    gap: 20px;
  }
}

@media only screen and (min-width: 900px) {
  :deep(.projects-list) {
    grid-gap: 28px;
  }
}
</style>
