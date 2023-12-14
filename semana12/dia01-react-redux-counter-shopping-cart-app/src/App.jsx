import Counter from "./components/Counter"
import ProductList from "./components/ProductList"
import ShoppingCart from "./components/ShoppingCart"

import { useProducts } from './hooks/useProducts'

const App = () => {
  const { products } = useProducts()

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {/* {JSON.stringify(products)} */}
        <ProductList products={products} />
        <ShoppingCart />
      </div>
      <Counter />
    </>
  )
}

export default App