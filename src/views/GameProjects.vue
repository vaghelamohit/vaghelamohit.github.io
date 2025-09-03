<template>
  <div>
    <section id="games" class="container section">
      <div class="section-head">
        <h2>Featured work</h2>
        <div class="muted" v-if="projects && projects.length">{{ projects.length }} projects</div>
      </div>
      <ProjectsList v-bind:projects="projects"/>
    </section>
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
      projects: [] as Array<{ id: string; baseUrl:string; name: string; htmlDescription: string; iconUrl: string; isWide: boolean; isHigh: boolean; accentColor: string }>,
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

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 30px 0 50px 0;
}

.section-head {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  margin-bottom: 14px;
}

.section-head h2 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0;
}

.muted {
  opacity: 0.7;
  font-size: 0.95em;
}

.fade-in {
  animation: fadeInUp 480ms ease both;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: translateY(0); }
}

/* removed hero/title styles */
</style>
