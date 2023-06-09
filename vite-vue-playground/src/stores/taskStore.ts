import { defineStore } from 'pinia'

export interface Task {
  title: string
  completed: boolean
}

export const useTaskStore = defineStore('task-store', () => {
  const tasks = ref<Task[]>([])

  function addTask(title: string) {
    tasks.value.push({
      title,
      completed: false,
    })
  }

  function getAlltasks() {
    return tasks.value
  }

  return {
    tasks,
    addTask,
    getAlltasks,
  }
})
