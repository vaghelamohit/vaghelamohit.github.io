<template>
  <div>
    <h1>Other stuff</h1>

    <div style="margin-bottom: 30px;">
      And here are some other stuff I've made or heavily contributed to, which are totally different than the stuff from earlier.
    </div>
    <ProjectsList v-bind:projects="projects" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsList from "@/components/ProjectsList.vue";

export default defineComponent({
  name: "OtherProjects",
  components: {
    ProjectsList,
  },
  data: function () {
     return {
      projects: [] as Array<{ id: string; baseUrl:string; name: string; htmlDescription: string; iconUrl: string; isWide: boolean; isHigh: boolean; accentColor: string }>,
    };
  },
  created: async function () {
    const response = await fetch(`${import.meta.env.BASE_URL}projectList.json`);
    const projectList = await response.json();
    const baseUrl = projectList.baseUrl;
    const projectPromises = projectList.otherProjects.map(async (id: string) => {
      const projectResponse = await fetch(`${baseUrl}${id}/data.json`);
      const projectData = await projectResponse.json();
      projectData.baseUrl = `${baseUrl}${id}/`;
      return projectData;
    });
    this.projects = await Promise.all(projectPromises);
  },
});
</script>
