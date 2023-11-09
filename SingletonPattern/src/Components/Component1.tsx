import Counter from "../Services/CounterSingleton2"

export default function Component1() {
  const counter = Counter.getInstance();

  const handleIncrement = () => {
    counter.increment()
    console.log('increment Component1',counter.getCount())
  }

  const handleDecrement = () => {
    counter.decrement()
    console.log('decrement Component1',counter.getCount())
  }
  return (
    <>
      <h1>Component 1</h1>
      <button onClick={handleIncrement}>
        Increment
      </button>
      <button onClick={handleDecrement}>
        Decrement
      </button>
    </>
  )
}