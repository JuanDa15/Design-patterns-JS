let instance: Counter;
let counter = 0;

class Counter {
  constructor() {
    if (instance) {
      throw new Error('Counter is singleton');
    }
    instance = this;
  }

  public getInstance(): Counter {
    return instance;
  }
  getCount() {
    return counter;
  }
  increment() {
    return ++counter;
  }
  decrement() {
    return --counter;
  }
}
// Use Object frezze to make it immutable
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;