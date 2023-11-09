import singletonCounter from "../Services/CounterSingleton1"

describe('Test for Singleton 1 implementation', () => {
  test('should return same instance', () => {
    const instance1 = singletonCounter.getInstance()
    const instance2 = singletonCounter.getInstance()
    expect(instance1).toBe(instance2)
  })
  test('should increment counter and be 1', () => {
    singletonCounter.increment()
    expect(singletonCounter.getCount()).toBe(1)
  })
  test('Incrementing 3 times should be 4', () => {
    singletonCounter.increment()
    singletonCounter.increment()
    singletonCounter.increment()
    expect(singletonCounter.getCount()).toBe(4)
  })
  test('Decrementing 1 time should be 3', () => {
    singletonCounter.decrement()
    expect(singletonCounter.getCount()).toBe(3)
  })
})