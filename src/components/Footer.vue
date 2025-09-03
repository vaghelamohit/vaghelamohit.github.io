<template>
  <div class="footer">
    <div class="left">
      © {{ new Date().getFullYear() }} Mohit Vaghela
    </div>
    <div class="right">
      <a href="mailto:mohitghostt@gmail.com">mohitghostt@gmail.com</a>
      ·
      <a href="https://www.linkedin.com/in/mohit-vaghela-a63b2b59" target="_blank" rel="noopener">LinkedIn</a>
      ·
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">

import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer"
});

</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  width: 100%;
  font-size: 0.8em;
  opacity: 0.7;
  padding-bottom: 30px;
}

.left, .right {
  padding-top: 10px;
  text-align: center;
}

@media only screen and (min-width: 620px){

  .footer {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>