import api from '@/services/api'
import useTaskStore from '@/store/task'
import { Task } from '@/types/task.model'
import { useRouter } from 'vue-router'

const { setTask, setTasks } = useTaskStore()

const saveTask = async (task : Task) => {
    debugger;
  return await api.post<Task>('/tasks', task).then((response) => {
    debugger;
    setTask(response.data)
    return response
  })
}

const getTask = async () => {
  debugger;
  const taskId = localStorage.getItem('taskID') as string
return await api.get<Task>('/tasks/'+taskId.replace(/['"]+/g, '')).then((response) => {
  debugger;
  setTask(response.data)
  return response
})
}

const getTasks = async () => {
  debugger;
  const taskId = localStorage.getItem('taskID') as string
return await api.get<Task>('/tasks/my?limit=5').then((response) => {
  debugger;
  setTasks(response.data)
  return response
})
}

export default function useTaskController() {
  return {
    saveTask,
    getTask,
    getTasks,
  }
}