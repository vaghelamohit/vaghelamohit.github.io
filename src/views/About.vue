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

      <div class="experience-timeline">
        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3>Senior Game Developer</h3>
              <div class="company-name">Narqubis Games Private Limited</div>
            </div>
            <div class="status-badge current">Current</div>
          </div>
          <div class="experience-meta">
            <span class="date-range">Jan 2023 – Present</span>
            <span class="separator">•</span>
            <span>Full-time</span>
            <span class="separator">•</span>
            <span>Rajkot</span>
          </div>
          <div class="experience-description">
            Leading gameplay features and shipping updates for live titles. Owning end-to-end delivery from prototyping to release with a focus on polish, performance, and player experience.
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Unity (C#)</span>
            <span class="tech-tag">Mobile/PC</span>
            <span class="tech-tag">Gameplay systems</span>
            <span class="tech-tag">UI/UX</span>
            <span class="tech-tag">Optimization</span>
          </div>
        </div>

        <div class="experience-card">
          <div class="experience-header">
            <div>
              <h3>Senior Game Developer</h3>
              <div class="company-name">Freebird App Studio LLP</div>
            </div>
          </div>
          <div class="experience-meta">
            <span class="date-range">Jan 2016 – Dec 2022</span>
            <span class="separator">•</span>
            <span>Full-time</span>
          </div>
          <div class="experience-description">
            Developed and maintained multiple commercial games over 8 years. Built core loops, tools, and live-ops flows; collaborated across design, art, and QA to deliver reliable releases.
          </div>
          <div class="tech-stack">
            <span class="tech-tag">Unity (C#)</span>
            <span class="tech-tag">Addressables</span>
            <span class="tech-tag">Analytics</span>
            <span class="tech-tag">Store integrations</span>
            <span class="tech-tag">Live-ops</span>
          </div>
        </div>
      </div>

      <h2>Skills</h2>

      <div class="skills-grid">
        <div class="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>Game development in Unity.</li>
            <li>C# / C++ gameplay programming & optimization</li>
            <li>AI, animation, physics, and system integration</li>
            <li>UI/UX implementation and interactive menus</li>
            <li>Multiplayer and real-time features</li>
            <li>Profiling, debugging, and performance tuning</li>
            <li>Close collaboration with art & design teams</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Leadership</h3>
          <ul>
            <li>Mentored junior developers & designers to enhance team performance.</li>
            <li>Led projects from concept to launch across multiple platforms.</li>
            <li>Coordinated cross-functional teams for aligned vision and execution.</li>
            <li>Talent recruiting, hiring, and team building.</li>
            <li>Oversaw gameplay direction, system design, and iterative playtests.</li>
            <li>Streamlined development workflows and optimized pipelines.</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Level Design</h3>
          <ul>
            <li>Level layout & blockouts: crafting engaging, playable spaces with clear flow.</li>
            <li>Combat encounters & pacing: designing challenges that feel balanced and dynamic.</li>
            <li>Cinematic & event scripting: creating immersive story-driven moments.</li>
            <li>Game system integration: ensuring levels complement overall mechanics.</li>
          </ul>
        </div>

        <div class="skill-category">
          <h3>Software</h3>
          <ul>
            <li>Visual Studio, Cursor, Plastic SCM, Github</li>
            <li>Adobe Photoshop</li>
            <li>Figma, Trello</li>
          </ul>
        </div>
      </div>

      <h2>Education</h2>

      <div class="education-timeline">
        <div class="education-card">
          <div class="education-icon">🎓</div>
          <div class="education-content">
            <h3>MSc IT & CA, Computer Software</h3>
            <div class="institution-name">Department of Computer Science, Rajkot</div>
            <div class="education-year">2014 – 2016</div>
            <div class="education-description">
              Advanced coursework covering software engineering, systems design, and application development.
            </div>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">📚</div>
          <div class="education-content">
            <h3>PGDCA, Computer Programming</h3>
            <div class="institution-name">Kamani Science & Prataprai Arts College</div>
            <div class="education-year">2013 – 2014</div>
            <div class="education-description">
              Postgraduate diploma focusing on programming fundamentals and practical application development.
            </div>
          </div>
        </div>

        <div class="education-card">
          <div class="education-icon">🎯</div>
          <div class="education-content">
            <h3>B.Com., Computer Science</h3>
            <div class="institution-name">K.K.Parekh Commerce College</div>
            <div class="education-year">2011 – 2013</div>
            <div class="education-description">
              Foundations in computer science alongside commerce curriculum; activities and societies: debate team.
            </div>
          </div>
        </div>
      </div>

      <h2>Languages</h2>

      <div class="languages-grid">
        <div class="language-card">
          <div class="language-icon">🌐</div>
          <div class="language-content">
            <h3>English</h3>
            <div class="proficiency-badge professional">Professional</div>
            <div class="proficiency-text">Professional working proficiency</div>
          </div>
        </div>

        <div class="language-card">
          <div class="language-icon">🗣️</div>
          <div class="language-content">
            <h3>Hindi</h3>
            <div class="proficiency-badge professional">Professional</div>
            <div class="proficiency-text">Professional working proficiency</div>
          </div>
        </div>

        <div class="language-card">
          <div class="language-icon">🏠</div>
          <div class="language-content">
            <h3>Gujarati</h3>
            <div class="proficiency-badge native">Native</div>
            <div class="proficiency-text">Mother tongue</div>
          </div>
        </div>
      </div>
      
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

export default defineComponent({
  name: "About"
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

.full-content h2 { margin-top: 40px; margin-bottom: 24px; }

/* Work Experience Styling */
.experience-timeline {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.experience-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 28px;
  transition: all 0.3s ease;
  position: relative;
}

.experience-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateX(4px);
}

.experience-card::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 3px;
  background: linear-gradient(to bottom, #3b82f6, transparent);
  border-radius: 12px 0 0 12px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.experience-card:hover::before {
  opacity: 1;
}

.experience-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
  gap: 16px;
}

.experience-header h3 {
  font-size: 1.35rem;
  font-weight: 600;
  margin: 0;
  color: rgba(255, 255, 255, 0.95);
}

.company-name {
  font-size: 1.05rem;
  color: #3b82f6;
  margin-top: 4px;
  font-weight: 500;
}

.status-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  white-space: nowrap;
}

.status-badge.current {
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  border: 1px solid rgba(34, 197, 94, 0.3);
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 16px;
  align-items: center;
}

.date-range {
  font-weight: 500;
  color: rgba(255, 255, 255, 0.75);
}

.separator {
  color: rgba(255, 255, 255, 0.3);
}

.experience-description {
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 16px;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 16px;
}

.tech-tag {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.2);
  color: #93c5fd;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.tech-tag:hover {
  background: rgba(59, 130, 246, 0.15);
  border-color: rgba(59, 130, 246, 0.4);
  transform: translateY(-1px);
}

/* Skills Grid Styling */
.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  margin-top: 24px;
}

@media only screen and (min-width: 768px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

.skill-category {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
}

.skill-category:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(59, 130, 246, 0.3);
  transform: translateY(-2px);
}

.skill-category h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 16px 0;
  color: #3b82f6;
}

.skill-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-category ul li {
  padding: 8px 0;
  padding-left: 20px;
  position: relative;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}

.skill-category ul li::before {
  content: "▹";
  position: absolute;
  left: 0;
  color: #3b82f6;
  font-size: 1.2rem;
  line-height: 1.6;
}

/* Education Styling */
.education-timeline {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.education-card {
  display: flex;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 24px;
  transition: all 0.3s ease;
  position: relative;
}

.education-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(139, 92, 246, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.education-icon {
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 60px;
  height: 60px;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  transition: transform 0.3s ease;
}

.education-card:hover .education-icon {
  transform: scale(1.1) rotate(5deg);
}

.education-content {
  flex: 1;
}

.education-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: rgba(255, 255, 255, 0.95);
}

.institution-name {
  color: #8b5cf6;
  font-weight: 500;
  margin-bottom: 6px;
  font-size: 1rem;
}

.education-year {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
  margin-bottom: 12px;
  font-weight: 500;
}

.education-description {
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.95rem;
}

@media only screen and (max-width: 640px) {
  .education-card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .education-icon {
    margin-bottom: 8px;
  }
}

/* Languages Styling */
.languages-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media only screen and (min-width: 640px) {
  .languages-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.language-card {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  transition: all 0.3s ease;
}

.language-card:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(236, 72, 153, 0.3);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.language-icon {
  font-size: 3rem;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
}

.language-card:hover .language-icon {
  transform: scale(1.2);
}

.language-content h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.95);
}

.proficiency-badge {
  display: inline-block;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 8px;
}

.proficiency-badge.professional {
  background: rgba(59, 130, 246, 0.15);
  color: #3b82f6;
  border: 1px solid rgba(59, 130, 246, 0.3);
}

.proficiency-badge.native {
  background: rgba(236, 72, 153, 0.15);
  color: #ec4899;
  border: 1px solid rgba(236, 72, 153, 0.3);
}

.proficiency-text {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.divider { height: 1px; background: rgba(255,255,255,0.08); margin: 32px 0; }
.cta-row { display: flex; gap: 12px; }
.btn-primary { padding: 10px 16px; border-radius: 10px; background: #3b82f6; color: #fff; text-decoration: none; }
.btn-secondary { padding: 10px 16px; border-radius: 10px; background: rgba(255,255,255,0.08); color: #fff; text-decoration: none; }

</style>