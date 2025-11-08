<template>
  <div class="header">
    <div class="nav-bar">
      <router-link class="brand" to="/">
        <span class="brand-mark" aria-hidden="true">MV</span>
        <span class="brand-text">Mohit Vaghela</span>
      </router-link>
      <router-link to="/">About me</router-link>
      <router-link to="/game-projects">Games</router-link>
      <router-link to="/other-projects">Other Projects</router-link>
      <router-link to="/contact">Contact</router-link>
      
      <a href="/d/MohitVaghela.pdf" class="resume-link" download="Mohit_Vaghela_Resume.pdf">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Resume</span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Header"
});

</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 9;
  backdrop-filter: saturate(120%) blur(4px);
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
  box-shadow: 0 2px 0 rgba(255,255,255,0.04);
}

a {
  text-transform: uppercase;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 8px;
  white-space: nowrap;
  display: inline-block;
  text-decoration: none;
}

.brand {
  float: left;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  text-transform: none;
  letter-spacing: 0.4px;
  margin-left: 0;
  margin-right: 20px;
  padding-bottom: 0;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 9px;
  background: conic-gradient(from 210deg, #60a5fa, #a78bfa, #34d399 75%, #60a5fa);
  box-shadow: 0 6px 18px rgba(96,165,250,0.35);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.95em;
  color: #0b0e12;
}

.brand-text {
  font-weight: 800;
  font-size: 1.2em;
  background: linear-gradient(90deg, #ffffff, #c7d2fe);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-shadow: 0 0 18px rgba(99,102,241,0.12);
  transition: filter 0.2s ease;
}

.brand:hover .brand-text { filter: brightness(1.1); }

.resume-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  vertical-align: middle;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff !important;
  padding: 5px 16px;
  border-radius: 8px;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
  transition: all 0.3s ease;
  margin-left: 20px;
  border: 2px solid rgba(16, 185, 129, 0.3);
  position: relative;
  overflow: hidden;
}

.resume-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.resume-link:hover::before {
  left: 100%;
}

.resume-link:hover {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(16, 185, 129, 0.4);
  border-color: rgba(16, 185, 129, 0.5);
}

.resume-link:active {
  transform: translateY(0);
}

.resume-link svg {
  flex-shrink: 0;
  margin-top: 2px;
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
}

.resume-link:hover svg {
  transform: translateY(-2px);
}

.resume-link span {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  font-size: 0.95em;
  letter-spacing: 0.5px;
}

.router-link-exact-active {
  border: 0;
  filter: brightness(1.15);
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  a {
    margin-left: 9px;
    margin-right: 9px;
    padding-bottom: 0px;
  }

  .resume-link {
    padding: 4px 12px;
    font-size: 0.85em;
    gap: 6px;
    margin-left: 12px;
  }

  .resume-link svg {
    width: 14px;
    height: 14px;
  }
}

</style>