const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Counter with Zustand</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem'}}>
        <button>+1</button>
        <h1>0</h1>
        <button>-1</button>
      </div>
    </div>
  )
}

export default App