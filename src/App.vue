<script setup lang="ts">
import TheHeader from '@/components/TheHeader.vue'
import TheFooter from '@/components/TheFooter.vue'
import { RouterView } from 'vue-router'

</script>

<template>
  <The-Header></The-Header>

  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <The-Footer></The-Footer>
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}

.small-container {
  max-width: 616px;
  margin: 0 auto;
}

.main {
  padding: 0 1.6rem;
}

.main .small-container {
  padding: 1.9rem 0 0 0;
}
</style>
