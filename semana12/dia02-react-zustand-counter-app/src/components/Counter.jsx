import { useCounterStore } from "../store/counter"

const Counter = () => {
  const { count, increment, decrement, increaseByValue } = useCounterStore()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#CD8D7A', padding: '1rem' }}>
      <h3>Counter with Zustand</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button onClick={() => increaseByValue(5)}>+5</button>
        <button onClick={increment}>+1</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-1</button>
        <button onClick={() => increaseByValue(-5)}>-5</button>
      </div>
    </div>
  )
}

export default Counter