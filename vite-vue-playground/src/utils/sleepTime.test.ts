import { sleepTime } from './sleepTime'

const TIME = 10_000_000_000
const cbSpy = vi.fn()

beforeEach(() => {
  vi.useFakeTimers()
  cbSpy.mockClear()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('test sleepTime', () => {
  it('should run cb after timeout test by advanceTimersByTime', async () => {
    sleepTime(TIME, cbSpy)
    expect(cbSpy).not.toHaveBeenCalled()

    vi.advanceTimersByTime(TIME)
    expect(cbSpy).toBeCalled()
  })

  it('should run cb after timeout test by advanceTimersToNextTimer', async () => {
    sleepTime(TIME, cbSpy)
    expect(cbSpy).not.toHaveBeenCalled()

    vi.advanceTimersToNextTimer()
    expect(cbSpy).toBeCalled()
  })

  it('should run cb after timeout test by runAllTimers', async () => {
    sleepTime(TIME, cbSpy)
    expect(cbSpy).not.toHaveBeenCalled()

    vi.runAllTimers()
    expect(cbSpy).toBeCalled()
  })

  it('should run microTask after sleepTime', async () => {
    sleepTime(TIME).then(cbSpy)
    expect(cbSpy).not.toHaveBeenCalled()

    vi.runAllTimers()
    await Promise.resolve(setTimeout)
    expect(cbSpy).toBeCalled()
  })
})
