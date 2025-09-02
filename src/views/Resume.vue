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
        <a class="download-link" href="d/resume-en.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF 🇬🇧</a>
        <a class="download-link" href="d/cv-fr.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Télécharger en PDF 🇫🇷</a>
        <div style="clear:both"></div>
      </div>
    </div>
    <div class="photo">
      <img :src="`img/resume-photo.png`" alt="Photo of Mohit" />
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Work experience</h2>

      <h3>Indie Game Developer</h3>
      <h4>2022–Present</h4>

      <div>Designed, developed, and launched multiple mobile and PC titles from prototype to release. Built core gameplay loops, UI flows, in-app economy, analytics, and live-ops tooling. Led profiling and optimization to achieve 60 FPS on mid-tier devices.</div>

      <div class="tech-stack">Unity, C#, Addressables, DOTween, URP, Zenject, ScriptableObjects, Firebase/Analytics, Google Play Services</div>

      <h3>Gameplay Programmer — Studio (Contract)</h3>
      <h4>2020–2022</h4>

      <div>Implemented player abilities, enemies, AI behaviors, and level scripting. Collaborated with designers to iterate quickly on feel and balance. Built debug tools and data pipelines to accelerate iteration.</div>

      <div class="tech-stack">Unreal Engine 4/5, C++, Blueprints, Gameplay Ability System, Behavior Trees, Perforce</div>

      <h3>Tools & Build Engineer</h3>
      <h4>2019–2020</h4>

      <div>Automated build, test, and release workflows. Created editor tooling for content creators and implemented crash/metrics dashboards.</div>

      <div class="tech-stack">Jenkins, GitHub Actions, Python, Bash, Fastlane, Sentry, Crashlytics</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Core</h3>
        <SkillRate name="Unity / C#" :rate="5" />
        <SkillRate name="Unreal / C++ / Blueprints" :rate="4" />
        <SkillRate name="Gameplay Programming" :rate="5" />
        <SkillRate name="AI & State Machines" :rate="4" />
        <SkillRate name="UI / UX Implementation" :rate="4" />
      </div>

      <div class="skill-set">
        <h3>Tech & Performance</h3>
        <SkillRate name="Profiling & Optimization" :rate="5" />
        <SkillRate name="Rendering / URP" :rate="4" />
        <SkillRate name="Asset Management / Addressables" :rate="5" />
        <SkillRate name="Build & CI/CD Automation" :rate="4" />
        <SkillRate name="Analytics / Live Ops" :rate="4" />
      </div>
      <div style="clear:both" />

      <h2>Education</h2>

      <h3>B.Tech — Computer Science</h3>
      <h4>2015–2019</h4>
      <div>Focused on graphics, data structures, algorithms, and real-time systems. Built multiple game prototypes and a final-year gameplay AI project.</div>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Professional working proficiency</div>

      <h3>Hindi</h3>
      <div>Native/Bilingual proficiency</div>


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