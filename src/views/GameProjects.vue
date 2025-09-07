<template>
  <div>
    <h1>Game Projects</h1>

    <div style="margin-bottom: 30px;">
      Here are some of the games our team has created or contributed to.
    </div>

    <ProjectsList :projects="projects"/>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";

export default defineComponent({
  name: "GameProjects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: [] as Array<{ id: string; baseUrl:string; name: string; iconUrl: string; isWide: boolean; isHigh: boolean; accentColor: string; shortDescription?: string; fullDescription?: string; links?: Array<{name: string; url: string}>; videos?: string[]; images?: string[]; preloadImages?: string[] }>,
    };
  },
  created: async function () {
    const response = await fetch(`${import.meta.env.BASE_URL}projectList.json`);
    const projectList = await response.json();
    const baseUrl = projectList.baseUrl;
    const projectPromises = projectList.gameProjects.map(async (id: string) => {
      const projectResponse = await fetch(`${baseUrl}${id}/data.json`);
      const projectData = await projectResponse.json();
      projectData.baseUrl = `${baseUrl}${id}/`;
      return projectData;
    });
    this.projects = await Promise.all(projectPromises);
  },
});
</script>
