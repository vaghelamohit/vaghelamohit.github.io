<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Mohit</strong>, a Game Developer focused on crafting polished gameplay, tools, and player-facing features.
      <br />I build and ship games end-to-end across Android and PC using Unity (C#) and Unreal (C++/Blueprints), with an emphasis on clean architecture, performance, and smooth UX.
      <br />I collaborate closely with designers, artists, and QA to turn prototypes into fun, reliable, and scalable products.
      <br />
      <br />If you're exploring opportunities or collaborations, feel free to 
      <router-link to="/contact">contact me</router-link>.
      <br />
      <br />When I'm not shipping features, I'm profiling frames, refining feel, and automating boring stuff.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="https://www.linkedin.com/in/mohit-vaghela-a63b2b59" target="_blank" rel="noopener">
          <i class="fa fa-linkedin fa-lg fa-fw"></i> View LinkedIn profile
        </a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`img/resume-photo.png`" alt="Photo of Mohit" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Senior Game Developer — Narqubis Games Private Limited</h3>
      <h4>Jan 2024 – Present · Full-time · Rajkot</h4>
      <div>Leading gameplay features and shipping updates for live titles. Owning end-to-end delivery from prototyping to release with a focus on polish, performance, and player experience.</div>

      <div class="tech-stack">Unity (C#), Mobile/PC, Gameplay systems, UI/UX, Optimization</div>

      <h3>Senior Game Developer — Freebird App Studio LLP</h3>
      <h4>Jan 2016 – Dec 2023 · Full-time</h4>
      <div>Developed and maintained multiple commercial games over 8 years. Built core loops, tools, and live-ops flows; collaborated across design, art, and QA to deliver reliable releases.</div>

      <div class="tech-stack">Unity (C#), Addressables, Analytics, Store integrations, Live-ops</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Core</h3>
        <SkillRate name="Unity / C#" :rate="5" />
        <SkillRate name="Gameplay Programming" :rate="5" />
        <SkillRate name="AI & State Machines" :rate="4" />
        <SkillRate name="UI / UX Implementation" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Tech & Performance</h3>
        <SkillRate name="Profiling & Optimization" :rate="5" />
        <SkillRate name="Rendering / URP" :rate="4" />
        <SkillRate name="Asset Management / Addressables" :rate="5" />
        <SkillRate name="Analytics / Live Ops" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>Department of Computer Science, Rajkot — MSc IT & CA, Computer Software</h3>
      <h4>2014 – 2016</h4>
      <div>Advanced coursework covering software engineering, systems design, and application development.</div>

      <h3>Kamani Science & Prataprai Arts College — PGDCA, Computer Programming</h3>
      <h4>2013 – 2014</h4>
      <div>Postgraduate diploma focusing on programming fundamentals and practical application development.</div>

      <h3>k.k.parekh commerce college — Bachelor of Commerce (B.Com.), Computer Science</h3>
      <h4>2011 – 2013</h4>
      <div>Foundations in computer science alongside commerce curriculum; activities and societies: debate team.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Professional working proficiency</div>

      <h3>Hindi</h3>
      <div>Professional working proficiency</div>

      <h3>Gujarati</h3>
      <div>Mother tongue</div>


      <h2>Besides...</h2>
      <div>
        <h3>Game Jams</h3>
        <div>Participated in Ludum Dare and community jams; rapid prototyping and scope management.</div>

        <h3>Open Source</h3>
        <div>Contributions to small Unity tooling and build scripts; sharing learnings with the community.</div>

        <h3>Writing & Mentorship</h3>
        <div>Documenting techniques, writing postmortems, and helping newcomers get started in game dev.</div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";


export default defineComponent({
  name: "Resume",
  components: {
    SkillRate,
  },
});
</script>

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.photo img {
  height: 300px;
  width: 300px;
}

.tech-stack {
  font-style: italic;
}

.photo {
  margin-top: 50px;
  text-align: center;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .photo {
    float: left;
    padding: 30px;
    padding-left: 80px;
  }

  .skill-set {
    float: left;
    padding-right: 60px; 
  }
}
</style>