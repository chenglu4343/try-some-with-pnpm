import { createTestingPinia } from '@pinia/testing'
import { useCompletedTasks } from './useCompletedTasks'
import { useTaskStore } from '@/stores/taskStore'

describe('test useCompletedTasks', () => {
  it('just use createTestingPinia', () => {
    createTestingPinia({
      createSpy: vi.fn,
    })

    const taskStore = useTaskStore()
    vi.mocked(taskStore.getAlltasks).mockImplementation(() => {
      return [
        {
          title: '666',
          completed: true,
        }, {
          title: '777',
          completed: false,
        },
      ]
    })

    const { completedTasks } = useCompletedTasks()
    expect(completedTasks.value.length).toBe(1)
  })
})
