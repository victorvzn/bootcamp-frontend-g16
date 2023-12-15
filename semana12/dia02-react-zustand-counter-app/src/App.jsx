import { useCounterStore } from "./store/counter"

const App = () => {
  const { count, increment, decrement } = useCounterStore()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Counter with Zustand</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button onClick={increment}>+1</button>
        <h1>{count}</h1>
        <button onClick={decrement}>-1</button>
      </div>
    </div>
  )
}

export default App