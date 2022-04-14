import useTaskController from '@/controllers/taskController'
import { Task } from '@/types/task.model';
import { reactive } from 'vue'

  const taskController = useTaskController()

  export const task = reactive<Task>({
    title: '',
    description: '',
    budget: {
        value:0,
        currency: 'USD',
    },
    platforms: ['INSTAGRAM'],
    filesIds: [],
  });

  const validate = () => {
    return task.platforms.length > 0 && task.budget.value > 0
  }

  export const saveTask = () => {
      debugger;
      if(validate()){
        taskController
        .saveTask(task)
        .then(() => {
            debugger;
            window.location.replace('/dashboard');
          })
      }
  }
  
  export const getSingleTask = () => {
    debugger;
      taskController
      .getTask()
}

export const getAllTasks = () => {
  debugger;
    taskController
    .getTasks()
}
