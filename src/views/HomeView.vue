<script setup lang="ts">
import BaseChildForm from '@/components/BaseChildForm.vue';
import { useFormStore } from '@/stores/useForm';

import { reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const main = useFormStore()
const { parent, childs } = main

const showForm = computed(() => {
  return newChilds.value.length <= 0 ? false : true
})

interface FormData {
  name: string,
  age: number | null
}

const newParent = reactive<FormData>({
  name: '',
  age: null
})

const newChilds = ref<FormData[]>([])

const addChildForm = () => {
  if (newChilds.value.length < 5) {

    newChilds.value.push({
      name: '',
      age: null
    } as FormData)
  }
}

const removeChild = (index: number) => {
  newChilds.value.splice(index, 1)
}

const updateChildName = (name: string, index: number) => {
  const child = newChilds.value[index]
  child.name = name
}

const updateChildAge = (age: string, index: number) => {
  const child = newChilds.value[index]
  child.age = +age
}

const submitData = () => {
  parent.name = newParent.name
  parent.age = newParent.age

  childs.length = 0
  newChilds.value.forEach((child) => {
    childs.push(child)
  })

  router.push({ name: 'preview' })
}
</script>

<template>
  <main class="main">
    <article class="small-container">
      <form class="main-form" @submit.prevent="submitData">
        <fieldset>
          <p class="legend">Персональные данные</p>
          <p class="single-input">
            <label for="parentFirstName">Имя</label>
            <input
              type="text"
              name="parentFirstName"
              id="parentFirstName"
              placeholder="Введите Ваше имя"
              required
              autocomplete="on"
              minlength="3"
              title="Ваше имя"
              autofocus
              v-model.trim="newParent.name"
            />
          </p>

          <p class="single-input">
            <label for="parentAge">Возраст</label>
            <input
              type="number"
              name="parentAge"
              id="parentAge"
              placeholder="Введите Ваш возраст"
              min="16"
              title="Ваш возраст"
              required
              v-model.trim="newParent.age"
            />
          </p>
        </fieldset>

        <fieldset>
          <div class="divider">
            <p class="legend">Дети (макс. 5)</p>
            <button class="btn form-btn" @click.prevent="addChildForm">
              <span class="plus-icon">
                <span class="line"></span>
                <span class="line"></span>
              </span> Добавить ребёнка
            </button>
          </div>

          <section v-if="showForm">
            <Base-Child-Form
              @removeChild="removeChild"
              @updateChildName="updateChildName"
              @updateChildAge="updateChildAge"
              :index="index"
              v-for="(child, index) in newChilds"
              :key="child"
            ></Base-Child-Form>

            <button class="btn submit-btn" type="submit">Сохранить</button>
          </section>

          <section v-else>
            <p>Вы ещё не добавили ни одного ребёнка</p>
          </section>
        </fieldset>
      </form>
    </article>
  </main>
</template>

<style scoped>
/* Main Form Styles */

.main-form fieldset {
  border: none;
  padding: 0 0 1.3rem;
}

.main-form .legend {
  font-weight: 500;
  color: var(--c-main-dark);
  line-height: 1.5rem;

  margin-bottom: 1.25rem;
}

.main-form .submit-btn {
  background-color: var(--c-primary);
  color: var(--c-white);
}

.main-form .submit-btn:is(:hover, :focus-visible) {
  background-color: var(--c-white);
  color: var(--c-primary);
}

/* Single Input */

.single-input {
  display: flex;
  flex-direction: column;

  padding: 0.5rem 1rem;
  margin-bottom: 0.625rem;

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

  outline: none;
  border: none;
  font-family: inherit;

  padding: 0;

  color: var(--c-main-dark);
}

.single-input > input::placeholder {
  color: var(--c-main-dark);
}

/* Form Divider */

.divider {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.25rem;
}

.divider > legend {
  margin-bottom: 0;
}

/* Form Button */

.plus-icon {
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 1rem;
  height: 1rem;

  margin-right: 0.5rem;

  transition: 0.3s ease-in-out;
}

.plus-icon .line {
  display: block;
  position: absolute;

  width: 1rem;
  height: 2px;

  background-color: var(--c-primary);

  transition: 0.3s ease-in-out;
}

.plus-icon .line:last-of-type {
  transform: rotate(90deg);
}

.form-btn:is(:hover, :focus-visible) {
  background-color: var(--c-primary);
  color: var(--c-white);
}

.form-btn:is(:hover, :focus-visible) .plus-icon {
  transform: scale(1.2);
}

.form-btn:is(:hover, :focus-visible) .plus-icon .line {
  background-color: var(--c-white);
}

/* Fix fill color */
</style>
