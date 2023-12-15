import { useCounterStore } from "./store/counter"

const App = () => {
  const count = useCounterStore(state => state.count)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Counter with Zustand</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button>+1</button>
        <h1>{count}</h1>
        <button>-1</button>
      </div>
    </div>
  )
}

export default App