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
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
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
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
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
}

</style>
