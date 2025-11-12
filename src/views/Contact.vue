<template>
  <section class="contact-page">
    <header class="contact-hero">
      <h1 class="contact-title">Let’s build something fun together!</h1>
      <p class="contact-subtitle">
        I’m a Unity Developer focused on creating games that feel great to play. If you’re hiring or want to collaborate, I’d love to connect.
      </p>
    </header>

    <div class="contact-grid">
      <component
        v-for="card in contactCards"
        :key="card.title"
        :is="card.component"
        class="contact-card"
        :class="card.accent"
        v-bind="card.props"
      >
        <div class="card-icon" v-html="card.icon"></div>
        <div class="card-body">
          <h3 class="card-heading">{{ card.title }}</h3>
          <p class="card-subtitle-text">{{ card.subtitle }}</p>
        </div>
        <div v-if="card.action" class="card-action">{{ card.action }}</div>
      </component>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const icons = {
  website: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75-9.75-4.365-9.75-9.75 4.365-9.75 9.75-9.75Zm0 0c2.815 0 5.108 4.365 5.108 9.75S14.815 21.75 12 21.75m0-19.5c-2.815 0-5.108 4.365-5.108 9.75S9.185 21.75 12 21.75m-9.75-9.75h19.5"/></svg>`,
  mail: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75c0-1.243 1.007-2.25 2.25-2.25h12c1.243 0 2.25 1.007 2.25 2.25v10.5c0 1.243-1.007 2.25-2.25 2.25h-12c-1.243 0-2.25-1.007-2.25-2.25V6.75Zm16.5 0-7.678 5.428a2.25 2.25 0 0 1-2.644 0L3.75 6.75"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1-4.98 0 2.5 2.5 0 0 1 4.98 0ZM.5 8.75h4.96V24H.5V8.75ZM8.44 8.75h4.76v2.08h.07c.66-1.24 2.27-2.54 4.67-2.54 4.99 0 5.91 3.29 5.91 7.57V24h-4.96v-6.58c0-1.57-.03-3.58-2.19-3.58-2.19 0-2.52 1.71-2.52 3.46V24H8.44V8.75Z"/></svg>`,
  whatsapp: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M7.84 20.26 4 21.88l1.62-3.84a7.5 7.5 0 1 1 2.22 2.22ZM8.25 11.25c.42 1.26 1.49 2.33 2.75 2.75l1.83-.92a.75.75 0 0 1 .92.18l1.08 1.08a.75.75 0 0 1-.04 1.06 4.5 4.5 0 0 1-4.89.87 4.5 4.5 0 0 1-2.7-2.7 4.5 4.5 0 0 1 .87-4.9.75.75 0 0 1 1.06-.04l1.08 1.08a.75.75 0 0 1 .18.92l-.96 1.62Z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2c-3.35.73-4.05-1.4-4.05-1.4-.53-1.35-1.3-1.71-1.3-1.71-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.05 1.82 2.79 1.3 3.47.99.11-.76.42-1.3.77-1.6-2.67-.3-5.48-1.33-5.48-5.9 0-1.3.47-2.38 1.24-3.19-.12-.3-.54-1.51.12-3.16 0 0 1-.32 3.29 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.86.12 3.16.77.81 1.24 1.9 1.24 3.2 0 4.6-2.81 5.6-5.49 5.9.43.37.84 1.1.84 2.22v3.29c0 .32.21.69.8.57A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"/></svg>`,
  resume: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25h-7.5M12 6.75h-3.75m7.5 3.75h-7.5m12 1.5v6.375c0 .621-.504 1.125-1.125 1.125H6.375a1.125 1.125 0 0 1-1.125-1.125V6.375c0-.621.504-1.125 1.125-1.125h6.375M15 3.75l3.75 3.75"/></svg>`
};

export default defineComponent({
  name: "Contact",
  setup() {
    const contactCards = [
      {
        title: "Website",
        subtitle: "vaghelamohit.github.io",
        action: "Visit site",
        component: "a",
        props: {
          href: "https://vaghelamohit.github.io/",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.website,
        accent: "accent-purple"
      },
      {
        title: "Email",
        subtitle: "mohitghostt@gmail.com",
        action: "Say hello",
        component: "a",
        props: {
          href: "mailto:mohitghostt@gmail.com",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.mail,
        accent: "accent-blue"
      },
      {
        title: "LinkedIn",
        subtitle: "linkedin.com/in/mohit-vaghela",
        action: "Connect",
        component: "a",
        props: {
          href: "https://www.linkedin.com/in/mohit-vaghela-a63b2b59/",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.linkedin,
        accent: "accent-indigo"
      },
      {
        title: "WhatsApp",
        subtitle: "Let’s chat on WhatsApp",
        action: "Open chat",
        component: "a",
        props: {
          href: "https://wa.me/919999999999",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.whatsapp,
        accent: "accent-emerald"
      },
      {
        title: "GitHub",
        subtitle: "github.com/vaghelamohit",
        action: "View projects",
        component: "a",
        props: {
          href: "https://github.com/vaghelamohit",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.github,
        accent: "accent-slate"
      },
      {
        title: "Resume",
        subtitle: "View detailed experience",
        action: "Read resume",
        component: "a",
        props: {
          href: "/d/01_Resume_MohitVaghela.pdf",
          target: "_blank",
          rel: "noopener"
        },
        icon: icons.resume,
        accent: "accent-slate"
      }
      
    ];

    return {
      contactCards
    };
  }
});
</script>

<style scoped>
.contact-page {
  max-width: 1100px;
  margin: 0 auto;
  padding: 64px 20px 96px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.contact-hero {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.contact-title {
  font-size: clamp(2.25rem, 2.5vw + 1.5rem, 3rem);
  font-weight: 700;
  margin: 0;
  color: #f9fafb;
  letter-spacing: -0.02em;
}

.contact-subtitle {
  margin: 0 auto;
  max-width: 720px;
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(226, 232, 240, 0.75);
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
}

@media (min-width: 640px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.contact-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  border-radius: 20px;
  background: linear-gradient(145deg, rgba(15, 23, 42, 0.85), rgba(15, 23, 42, 0.95));
  border: 1px solid rgba(148, 163, 184, 0.1);
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
  min-height: 220px;
}

.contact-card::before {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(135deg, var(--accent-from), var(--accent-to));
  mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  mask-composite: exclude;
  opacity: 0.45;
  transition: opacity 0.35s ease, transform 0.35s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  border-color: rgba(148, 163, 184, 0.35);
  box-shadow: 0 28px 50px rgba(15, 23, 42, 0.45);
}

.contact-card:hover::before {
  opacity: 0.95;
  transform: scale(1.02);
}

.contact-card:hover .card-icon {
  transform: scale(1.08) rotate(4deg);
  box-shadow: 0 12px 24px rgba(148, 163, 184, 0.25);
}

.card-icon {
  width: 72px;
  height: 72px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f8fafc;
  background: linear-gradient(135deg, rgba(148, 163, 184, 0.15), rgba(148, 163, 184, 0.05));
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  position: relative;
  z-index: 1;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.card-heading {
  margin: 0;
  font-size: 1.3rem;
  font-weight: 600;
  color: #f1f5f9;
}

.card-subtitle-text {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(226, 232, 240, 0.7);
}

.card-action {
  margin-top: auto;
  align-self: flex-start;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #f8fafc;
  background: linear-gradient(135deg, rgba(148, 163, 184, 0.2), rgba(148, 163, 184, 0.05));
  transition: background 0.35s ease, transform 0.35s ease;
  position: relative;
  z-index: 1;
}

.contact-card:hover .card-action {
  background: linear-gradient(135deg, var(--accent-from), var(--accent-to));
  transform: translateY(-2px);
}

.accent-purple {
  --accent-from: rgba(168, 85, 247, 0.85);
  --accent-to: rgba(236, 72, 153, 0.85);
}

.accent-blue {
  --accent-from: rgba(59, 130, 246, 0.85);
  --accent-to: rgba(37, 99, 235, 0.85);
}

.accent-indigo {
  --accent-from: rgba(99, 102, 241, 0.85);
  --accent-to: rgba(129, 140, 248, 0.85);
}

.accent-emerald {
  --accent-from: rgba(16, 185, 129, 0.85);
  --accent-to: rgba(52, 211, 153, 0.85);
}

.accent-slate {
  --accent-from: rgba(148, 163, 184, 0.75);
  --accent-to: rgba(226, 232, 240, 0.65);
}

.accent-rose {
  --accent-from: rgba(244, 114, 182, 0.85);
  --accent-to: rgba(251, 113, 133, 0.85);
}

@media (max-width: 480px) {
  .contact-page {
    padding: 48px 16px 72px;
    gap: 36px;
  }

  .contact-card {
    padding: 28px 24px;
  }

  .card-icon {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }
}
</style>