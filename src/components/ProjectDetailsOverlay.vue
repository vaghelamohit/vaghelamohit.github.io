<template>
  <transition name="fade">
    <div v-if="visible" class="modal-root">
      <div class="overlay" @click="$emit('close')"></div>
      <div class="dialog" :style="{ '--accent': color }" role="dialog" aria-modal="true" :aria-label="title">
        <div class="dialog-header">
          <h1 class="dialog-title">{{ title }}</h1>
          <button @click="$emit('close')" class="dialog-close" aria-label="Close">
            <i class="fa fa-times fa-lg fa-fw"></i>
          </button>
        </div>
        <div class="dialog-content">
          <div v-html="processedHtmlContent"></div>
        </div>
        <div class="dialog-bottom">
          <a @click="$emit('close')" class="dialog-close-button">Close</a>
        </div>
      </div>
    </div>
  </transition>
  
</template>

<script lang="ts">
import { defineComponent, nextTick } from "vue";

export default defineComponent({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
    baseUrl: String, // Added baseUrl prop
  },
  computed: {
    processedHtmlContent(): string {
      // Replace relative image paths with full URLs
      const html = this.htmlContent || "";
      return html.replace(/src=["'](.*?)["']/g, (match, p1) => {
        if (!p1.startsWith("http")) {
          return `src="${this.baseUrl}${p1}"`;
        }
        return match;
      });
    },
  },
  data: function(){
    return {
      lastActiveElement: null as HTMLElement | null,
    };
  },
  watch: {
    visible: async function(newVal: boolean){
      if (newVal) {
        this.lastActiveElement = (document.activeElement as HTMLElement) || null;
        await nextTick();
        document.addEventListener('keydown', this.onKeydown, true);
        const dialog = this.$el.querySelector('.dialog') as HTMLElement | null;
        if (dialog) {
          const focusable = dialog.querySelector<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
          if (focusable) focusable.focus();
        }
      } else {
        document.removeEventListener('keydown', this.onKeydown, true);
        if (this.lastActiveElement) {
          this.lastActiveElement.focus();
          this.lastActiveElement = null;
        }
      }
    }
  },
  methods: {
    onKeydown: function(e: KeyboardEvent){
      if (e.key === 'Escape') {
        this.$emit('close');
        e.stopPropagation();
        return;
      }

      if (e.key === 'Tab') {
        const dialog = this.$el.querySelector('.dialog') as HTMLElement | null;
        if (!dialog) return;
        const focusableSelectors = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])';
        const focusable = Array.from(dialog.querySelectorAll<HTMLElement>(focusableSelectors))
          .filter(el => el.offsetWidth > 0 || el.offsetHeight > 0 || el === document.activeElement);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const isShift = e.shiftKey;
        if (!isShift && document.activeElement === last) {
          first.focus();
          e.preventDefault();
        } else if (isShift && document.activeElement === first) {
          last.focus();
          e.preventDefault();
        }
      }
    }
  }
});
</script>

<style scoped>
.modal-root {
  position: fixed;
  inset: 0;
  z-index: 10;
}
.overlay {
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(3px) saturate(120%);
  position: absolute;
  inset: 0;
}

.dialog {
  position: absolute;
  left: 50%;
  top: 2%;
  transform: translateX(-50%);
  z-index: 11;
  margin: 0;
  width: calc(100% - 16px);
  max-width: 1200px;
  max-height: 96vh;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  overflow: hidden;
  background: #0f1216;
  box-shadow: 0 20px 60px rgba(0,0,0,0.45);
  outline: 1px solid rgba(255,255,255,0.06);
  color: #eaeaea;
}

iframe {
  width: 100%;
}

.dialog-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(180deg, color-mix(in srgb, var(--accent, #3b82f6) 18%, rgba(255,255,255,0.0)), rgba(255,255,255,0));
  padding: 14px 16px;
  position: sticky;
  top: 0;
  z-index: 1;
}

h1.dialog-title {
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
}

.dialog-content {
  padding: 20px;
  overflow: auto;
  flex: 1;
}

.dialog-content {
  background-color: #0f1216;
  color: #cfd3d8;
}
.dialog-close {
  cursor:pointer;
  font-size: 1.1em;
  border: 0;
  background: rgba(255,255,255,0.08);
  color: #eaeaea;
  padding: 8px 10px;
  border-radius: 10px;
  transition: background 0.2s ease, transform 0.15s ease;
}
.dialog-close:hover { background: rgba(255,255,255,0.14); }
.dialog-close:active { transform: scale(0.98); }

.dialog-bottom {
  text-align: center;
  padding: 16px 12px 18px 12px;
  background: linear-gradient(0deg, rgba(255,255,255,0.04), rgba(255,255,255,0));
}

a.dialog-close-button {
  cursor:pointer;
  font-size: 1.4em;
  display: inline-block;
  margin: 0 auto;
  padding: 8px 16px;
  border-radius: 10px;
  background: var(--accent, #3b82f6);
  color: #ffffff;
  text-decoration: none;
}

.dialog-content img, .dialog-content video, .dialog-content iframe { max-width: 100%; border-radius: 8px; }
.dialog-content p { line-height: 1.6; }
.dialog-content h1, .dialog-content h2, .dialog-content h3 { margin-top: 1em; }

@media only screen and (min-width: 620px){
  .dialog { top: 2%; max-height: 96vh; }
  h1.dialog-title { font-size: 1.6em; }
  .dialog-content { padding: 28px 28px; }
}


</style>
