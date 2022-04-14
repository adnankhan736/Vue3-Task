<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <p>{{ getMyProfile }}</p>
    <h3>Task</h3>
    <p>{{ getTask }}</p>
    <h3>5 Tasks</h3>
    <p>{{ getTasks }}</p>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import useTaskStore from '@/store/task'
import {getUserProfile} from '@/components/dashboard/dashboard'
import {getSingleTask, getAllTasks} from '@/components/task/task'
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    debugger;
    const { getMyProfile } = useUserStore()
    const { getTask } = useTaskStore()
    const { getTasks } = useTaskStore()

    onMounted(() => { 
      debugger;
      getUserProfile();
      getSingleTask(); 
      getAllTasks();
      });
    return {
      getMyProfile,
      getTask,
      getTasks,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
