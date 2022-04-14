<template>
  <main class="task-create">
    <h1 class="task-title">Task Create view</h1>

    <form class="task-form" @submit.prevent="saveTask">
      <label class="label">
        title:
        <input v-model="task.title" class="text-input" type="title" />
      </label>

      <label class="label">
        description:
        <input v-model="task.description" class="text-input" type="description" />
      </label>

      <label class="label">
        currency:
        <input v-model="task.budget.currency" class="text-input" type="currency" />

        value:
        <input v-model="task.budget.value" class="text-input" type="number" />
      </label>

  <h3>platforms</h3>
      <label class="label checkbox-label">
        instagram:
        <input v-model="task.platforms" value= "INSTAGRAM" class="checkbox" type="checkbox" />
      </label>

      <button class="button">Save</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { task, saveTask } from '@/components/task/task'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    return {
      saveTask,
      task,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
