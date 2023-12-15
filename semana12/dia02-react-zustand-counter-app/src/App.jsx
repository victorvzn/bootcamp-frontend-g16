import Counter from "./components/Counter"

const App = () => {

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem', gap: '1rem' }}>
      <Counter />

      <Counter />

      <Counter />
    </div>
  )
}

export default App