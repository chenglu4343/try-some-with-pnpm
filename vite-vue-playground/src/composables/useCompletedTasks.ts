import { useTaskStore } from '@/stores/taskStore'

export function useCompletedTasks() {
  const taskStore = useTaskStore()

  const completedTasks = computed(() => {
    return taskStore.getAlltasks().filter(task => task.completed)
  })

  return {
    completedTasks,
  }
}
