<script setup lang="ts">
import { reactive, watch } from 'vue';

const props = defineProps({
  index: Number,
})

const emits = defineEmits(['updateChildName', 'updateChildAge', 'removeChild', 'updateChild'])

const child = reactive({
  name: '',
  age: null
})

const removeChild = () => {
  emits('removeChild', props.index)
}

watch(child, (newValue) => emits('updateChild', newValue, props.index))

</script>

<template>
  <div class="wrapper">
    <p class="single-input">
      <label for="childName">Имя</label>
      <input
        type="text"
        name="childName"
        id="childName"
        placeholder="Введите имя ребёнка"
        required
        minlength="3"
        title="Имя ребёнка"
        v-model.trim="child.name"
      />
    </p>

    <p class="single-input">
      <label for="childAge">Возраст</label>
      <input
        type="number"
        name="childAge"
        id="childAge"
        placeholder="Введите возраст ребёнка"
        title="Возраст ребёнка"
        required
        v-model.trim="child.age"
      />
    </p>

    <button class="btn" @click.prevent="removeChild">Удалить</button>
  </div>
</template>

<style scoped>
/* Wrapper */
.wrapper {
  display: flex;
  gap: 1.1rem;
  margin-bottom: 0.625rem;
}

.wrapper:last-of-type {
  margin-bottom: 1.875rem;
}

.wrapper .btn {
  border-color: transparent;
  max-width: 20%;
  padding: 0.6rem 0;
  border-radius: 0;
}

/* Single Input */

.single-input {
  display: flex;
  flex-direction: column;

  width: 50%;
  max-width: 100%;
  padding: 0.5rem 1rem;

  border: solid 1px var(--c-light-tone-gray);
  border-radius: 4px;
}

.single-input > label {
  font-size: 13px;
  line-height: 1rem;

  color: var(--с-half-tone-gray);
}

.single-input > input {
  font-size: 0.9rem;
  line-height: 1.5rem;
  font-weight: 400;

  padding: 0;

  outline: none;
  border: none;
  color: var(--c-main-dark);

  font-family: "Montserrat", sans-serif;
}

.single-input > input::placeholder {
  color: var(--c-main-dark);
}
</style>