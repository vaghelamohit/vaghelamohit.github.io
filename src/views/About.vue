<template>
  <div style="margin-bottom: 80px;">
    <h1>About me</h1>

    <div class="paragraph">
      <div>
        Hello, I am <strong>Mohit Vaghela</strong>.
        <br/>Senior Game Developer with 8+ years of experience building and shipping Unity games on mobile and PC.
        <br/>Focused on gameplay systems, performance, and smooth player experience. Comfortable owning features end-to-end and collaborating across disciplines.
        <br/>
        <br/>Open to opportunities — feel free to <router-link to="/contact">contact me</router-link>.
      </div>
    </div>

    <div class="photo">
      <img :src="`img/avatar.png`" alt="Avatar of Mohit" /> 
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

      <h3>k.k.parekh commerce college — B.Com., Computer Science</h3>
      <h4>2011 – 2013</h4>
      <div>Foundations in computer science alongside commerce curriculum; activities and societies: debate team.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Professional working proficiency</div>

      <h3>Hindi</h3>
      <div>Professional working proficiency</div>

      <h3>Gujarati</h3>
      <div>Mother tongue</div>
      
      <div class="divider"></div>
      
      <div class="cta-row">
        <router-link class="btn-primary" to="/contact">Contact</router-link>
        <a class="btn-secondary" href="https://www.linkedin.com/in/mohit-vaghela-a63b2b59" target="_blank" rel="noopener">LinkedIn</a>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillRate from "@/components/SkillRate.vue";

export default defineComponent({
  name: "About",
  components: { SkillRate }
});
</script>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
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
    padding: 10px;
    padding-left: 80px;
  }
}

.full-content h2 { margin-top: 40px; }
.divider { height: 1px; background: rgba(255,255,255,0.08); margin: 32px 0; }
.cta-row { display: flex; gap: 12px; }
.btn-primary { padding: 10px 16px; border-radius: 10px; background: #3b82f6; color: #fff; text-decoration: none; }
.btn-secondary { padding: 10px 16px; border-radius: 10px; background: rgba(255,255,255,0.08); color: #fff; text-decoration: none; }

</style>