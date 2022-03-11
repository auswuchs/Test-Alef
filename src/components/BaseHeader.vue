<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
  <header>
    <div class="container header-container">
      <RouterLink to="/">
        <figure>
          <img src="@/assets/logo.svg" alt="Alef Logo" />
        </figure>
      </RouterLink>

      <nav class="header-nav">
        <ul>
          <li>
            <RouterLink class="header-link" to="/">Форма</RouterLink>
          </li>

          <li>
            <RouterLink class="header-link" to="/preview">Превью</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  padding: 0 1.6rem;
}

.header-nav,
.header-nav > ul {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.header-nav > ul {
  gap: 1.6rem;
  padding: 1.6rem 0;
  list-style: none;
}

.header-nav li {
  text-decoration: none;
}

.header-nav .header-link {
  color: var(--с-half-tone-gray);
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.header-nav .header-link:hover {
  color: var(--c-main-dark);
}

/* .header-nav .header-link.router-link-exact-active {
  color: var(--с-half-tone-gray);
} */
</style>