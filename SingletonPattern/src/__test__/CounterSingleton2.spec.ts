import Counter from "../Services/CounterSingleton2"

describe('Test for Singleton 1 implementation', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = Counter.getInstance()
  })
  test('should return same instance', () => {
    const instance1 = Counter.getInstance()
    const instance2 = Counter.getInstance()
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