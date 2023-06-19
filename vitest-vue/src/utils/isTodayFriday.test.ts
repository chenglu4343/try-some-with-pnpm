import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import isTodayFriday from './isTodayFriday'

beforeEach(() => {
  vi.useFakeTimers()
})

afterEach(() => {
  vi.useRealTimers()
})

describe('test isTodayFriday', () => {
  it('should return true when today is Friday', () => {
    vi.setSystemTime(new Date('2023-06-23'))
    expect(isTodayFriday()).toBe(true)
  })

  it('should return false when today is not Friday', () => {
    vi.setSystemTime(new Date('2023-06-24'))
    expect(isTodayFriday()).toBe(false)
  })
})
