import { computed, Ref, ref } from 'vue'
import { Task } from '@/types/task.model'

const task: Ref<Task | null> = ref(null)
const tasks: Ref<Task[] | null> = ref(null)

const TASK_ID = 'taskID'

export default function useTaskStore() {

  const getTask = computed(() => task.value)
  const getTasks = computed(() => tasks.value)

  const setTask = (data: null | any) => {
    debugger;
    task.value = data
    localStorage.setItem(TASK_ID, JSON.stringify(data?.id))
  }

  const setTasks = (data: null | any) => {
    debugger;
    tasks.value = data
  }

  return {
    getTask,
    setTask,
    getTasks,
    setTasks,
  }
}
