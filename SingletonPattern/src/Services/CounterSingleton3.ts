let count = 0;

const counter = {
  getCount(){
    return count
  },
  increment() {
    return ++count
  },
  decrement() {
    return --count
  }
};

Object.freeze(counter);
export { counter }