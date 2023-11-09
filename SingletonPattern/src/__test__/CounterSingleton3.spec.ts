import { counter } from "../Services/CounterSingleton3";

describe('Test for Singleton 1 implementation', () => {

  test('should return same instance', () => {
    const instance1 = counter
    const instance2 = counter
    expect(instance1).toBe(instance2)
  })
  test('should increment counter and be 1', () => {
    counter.increment()
    expect(counter.getCount()).toBe(1)
  })
  test('Incrementing 3 times should be 4', () => {
    counter.increment()
    counter.increment()
    counter.increment()
    expect(counter.getCount()).toBe(4)
  })
  test('Decrementing 1 time should be 3', () => {
    counter.decrement()
    expect(counter.getCount()).toBe(3)
  })
})