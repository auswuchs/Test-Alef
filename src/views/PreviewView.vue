<script setup lang="ts">
import { useFormStore } from '@/stores/useForm';

const main = useFormStore()

const { parent, childs } = main
</script>

<template>
  <main class="main">
    <article class="small-container">
      <section>
        <p class="legend">Персональные данные</p>
        <p class="legend parent-info" v-if="parent.name">{{ parent.name }}, {{ parent.age }} лет</p>
        <p class="legend parent-info" v-else>Вы не указали свои данные</p>
      </section>

      <section class="child-section" v-if="childs.length">
        <p class="legend">Дети</p>
        <p
          class="legend child"
          v-for="(child, index) in childs"
          :key="index"
        >{{ child.name }}, {{ child.age }} лет</p>
      </section>
    </article>
  </main>
</template>

<style scoped>
.legend {
  font-weight: 500;
  line-height: 1.5rem;
  color: var(--c-main-dark);

  margin-bottom: 1.25rem;
}

.parent-info {
  font-weight: 700;
}

.legend.child {
  display: block;
  max-width: max-content;

  padding: 0.6rem 1.3rem;
  border-radius: 5px;

  font-weight: 700;
  background-color: var(--c-light-tone-gray);
}

section {
  margin-bottom: 3.75rem;
}

.child-section {
  display: flex;
  flex-direction: column;
}
</style>
