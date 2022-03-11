<script setup lang="ts">
import BaseHeader from '@/components/BaseHeader.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Base-Header></Base-Header>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";

#app {
  width: 100%;
  margin: 0 auto;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
