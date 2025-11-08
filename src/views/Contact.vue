<template>
  <div class="contact-page">
    <div class="contact-hero">
      <h1 class="contact-title">Get in Touch</h1>
      <p class="contact-subtitle">I'm open to opportunities and collaborations. Feel free to reach out!</p>
    </div>

    <div class="contact-cards">
      <a href="https://www.linkedin.com/in/mohit-vaghela-a63b2b59/" class="contact-card linkedin-card" target="_blank" rel="noopener">
        <div class="card-icon linkedin-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">LinkedIn</h3>
          <p class="card-link">linkedin.com/in/mohit-vaghela</p>
          <p class="card-description">Connect with me on LinkedIn</p>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="mailto:mohitghostt@gmail.com" class="contact-card email-card" target="_blank" rel="noopener">
        <div class="card-icon email-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">Email</h3>
          <p class="card-link">mohitghostt@gmail.com</p>
          <p class="card-description">Send me an email</p>
        </div>
        <div class="card-arrow">→</div>
      </a>

      <a href="https://github.com/vaghelamohit" class="contact-card github-card" target="_blank" rel="noopener">
        <div class="card-icon github-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        <div class="card-content">
          <h3 class="card-title">GitHub</h3>
          <p class="card-link">github.com/vaghelamohit</p>
          <p class="card-description">Check out my projects</p>
        </div>
        <div class="card-arrow">→</div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Contact"
});
</script>

<style scoped>
.contact-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  min-height: 60vh;
}

.contact-hero {
  text-align: center;
  margin-bottom: 60px;
}

.contact-title {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.contact-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  line-height: 1.6;
}

.contact-cards {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
}

@media only screen and (min-width: 768px) {
  .contact-cards {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

.contact-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 20px;
  background: rgba(255, 255, 255, 0.03);
  border: 2px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 32px 24px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 280px;
}

.contact-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, transparent, currentColor, transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.contact-card:hover::before {
  opacity: 1;
}

.contact-card:hover {
  transform: translateY(-4px);
  border-color: currentColor;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
}

.linkedin-card {
  color: #0a66c2;
}

.linkedin-card:hover {
  background: rgba(10, 102, 194, 0.1);
  box-shadow: 0 12px 24px rgba(10, 102, 194, 0.2);
}

.email-card {
  color: #3b82f6;
}

.email-card:hover {
  background: rgba(59, 130, 246, 0.1);
  box-shadow: 0 12px 24px rgba(59, 130, 246, 0.2);
}

.github-card {
  color: #ffffff;
}

.github-card:hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 12px 24px rgba(255, 255, 255, 0.1);
}

.card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 16px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.contact-card:hover .card-icon {
  transform: scale(1.15) rotate(5deg);
}

.linkedin-icon {
  background: rgba(10, 102, 194, 0.15);
}

.email-icon {
  background: rgba(59, 130, 246, 0.15);
}

.github-icon {
  background: rgba(255, 255, 255, 0.1);
}

.card-content {
  flex: 1;
  width: 100%;
}

.card-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: rgba(255, 255, 255, 0.95);
}

.card-link {
  font-size: 0.95rem;
  color: currentColor;
  margin: 0 0 8px 0;
  font-weight: 500;
  word-break: break-word;
  line-height: 1.4;
}

.card-description {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
  margin: 0;
}

.card-arrow {
  font-size: 1.5rem;
  opacity: 0;
  transition: all 0.3s ease;
  transform: translateY(-5px);
  color: currentColor;
  margin-top: auto;
}

.contact-card:hover .card-arrow {
  opacity: 1;
  transform: translateY(0);
}

@media only screen and (max-width: 767px) {
  .contact-title {
    font-size: 2rem;
  }

  .contact-subtitle {
    font-size: 1rem;
  }

  .contact-card {
    padding: 28px 20px;
  }

  .card-icon {
    width: 70px;
    height: 70px;
  }

  .card-title {
    font-size: 1.25rem;
  }

  .card-link {
    font-size: 0.9rem;
  }
}
</style>