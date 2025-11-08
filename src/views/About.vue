<template>
  <div style="margin-bottom: 80px;">
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="greeting">Hello, I am</span>
          <span class="name">Mohit Vaghela</span>
        </h1>
        <div class="hero-subtitle">Senior Game Developer</div>
        <div class="hero-description">
          <p>With 8+ years of experience building and shipping Unity games on mobile and PC. Focused on gameplay systems, performance, and smooth player experience. Comfortable owning features end-to-end and collaborating across disciplines.</p>
          <p class="hero-cta">Open to opportunities — feel free to <router-link to="/contact" class="contact-link">contact me</router-link>.</p>
        </div>
        <div class="hero-contact-info">
          <div class="email-text">
            <span class="email-label">Email:</span>
            <span class="email-address">mohitghostt@gmail.com</span>
          </div>
          <div class="hero-action-buttons">
            <a href="https://www.linkedin.com/in/mohit-vaghela-a63b2b59/" class="action-btn linkedin-btn" target="_blank" rel="noopener">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
      <div class="hero-photo">
        <div class="photo-wrapper">
          <div class="photo-border"></div>
          <img :src="`img/avatar.png`" alt="Avatar of Mohit" class="avatar-image" />
          <div class="photo-glow"></div>
        </div>
      </div>
    </div>

    <div class="full-content">
      <h2>Skills</h2>

      <div class="skills-grid">
        <div class="skill-category">
          <h3>Programming</h3>
          <ul>
            <li>Game development in Unity.</li>
            <li>C# / C++ gameplay programming & optimization</li>
            <li>AI, animation, physics, and system integration</li>
            <li>UI/UX implementation and interactive menus</li>
            <li>Multiplayer & Real-time Systems (Photon · Mirror · Socket.IO)</li>
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
            <li>Unity Engine, Visual Studio, Cursor, Plastic SCM, Github</li>
            <li>Blender, Adobe Photoshop</li>
            <li>Figma, Trello</li>
          </ul>
        </div>
      </div>

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
/* Hero Section Styling */
.hero-section {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-bottom: 60px;
  padding: 40px 0;
}

@media only screen and (min-width: 768px) {
  .hero-section {
    flex-direction: row;
    align-items: center;
    gap: 60px;
    padding: 60px 0;
  }
}

.hero-content {
  flex: 1;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .hero-content {
    max-width: 600px;
  }
}

.hero-title {
  margin: 0 0 16px 0;
  line-height: 1.2;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.greeting {
  font-size: 1.5rem;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.7);
  display: block;
}

@media only screen and (min-width: 768px) {
  .greeting {
    font-size: 1.75rem;
  }
}

.name {
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: block;
}

@media only screen and (min-width: 768px) {
  .name {
    font-size: 3.5rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 24px;
  display: inline-block;
  padding: 6px 16px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
}

.hero-description {
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.05rem;
}

.hero-description p {
  margin: 0 0 16px 0;
}

.hero-cta {
  margin-top: 8px;
  color: rgba(255, 255, 255, 0.9);
}

.contact-link {
  color: #3b82f6;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.contact-link:hover {
  color: #60a5fa;
  border-bottom-color: #60a5fa;
}

/* Hero Contact Info */
.hero-contact-info {
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.email-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.9);
}

.email-label {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
}

.email-address {
  color: #3b82f6;
  font-weight: 500;
  font-family: monospace;
  letter-spacing: 0.5px;
}

/* Hero Action Buttons */
.hero-action-buttons {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
}

.action-btn svg {
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.action-btn:hover svg {
  transform: translateY(-2px);
}

.linkedin-btn {
  background: linear-gradient(135deg, #0a66c2 0%, #004182 100%);
  color: #fff;
  box-shadow: 0 4px 12px rgba(10, 102, 194, 0.3);
}

.linkedin-btn:hover {
  background: linear-gradient(135deg, #004182 0%, #003d7a 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(10, 102, 194, 0.4);
}

@media only screen and (min-width: 640px) {
  .hero-contact-info {
    flex-direction: row;
    align-items: center;
    gap: 32px;
  }
}

@media only screen and (max-width: 480px) {
  .email-text {
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }
  
  .hero-action-buttons {
    width: 100%;
  }
  
  .action-btn {
    width: 100%;
    justify-content: center;
  }
}

/* Hero Photo Styling */
.hero-photo {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
}

@media only screen and (min-width: 768px) {
  .hero-photo {
    justify-content: flex-end;
  }
}

.photo-wrapper {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}

@media only screen and (min-width: 768px) {
  .photo-wrapper {
    width: 280px;
    height: 280px;
  }
}

.avatar-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 2;
  border: 4px solid rgba(255, 255, 255, 0.1);
  transition: all 0.4s ease;
}

.photo-wrapper:hover .avatar-image {
  transform: scale(1.05);
  border-color: rgba(59, 130, 246, 0.5);
}

.photo-border {
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  border-radius: 50%;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
  opacity: 0.3;
  z-index: 1;
  transition: all 0.4s ease;
  animation: rotate 8s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.photo-wrapper:hover .photo-border {
  opacity: 0.6;
  animation-duration: 4s;
}

.photo-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120%;
  height: 120%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
  z-index: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.photo-wrapper:hover .photo-glow {
  opacity: 1;
}

.full-content h2 { margin-top: 60px; margin-bottom: 24px; }

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