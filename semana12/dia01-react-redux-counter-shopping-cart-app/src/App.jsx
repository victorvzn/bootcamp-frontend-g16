import { useEffect, useState } from "react"
import Counter from "./components/Counter"

import { useProducts } from './hooks/useProducts'

const App = () => {
  const { products } = useProducts()

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {JSON.stringify(products)}
      </div>
      <Counter />
    </>
  )
}

export default App