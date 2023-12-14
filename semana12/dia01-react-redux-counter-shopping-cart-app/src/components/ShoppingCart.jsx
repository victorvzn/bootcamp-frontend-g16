import { useSelector } from "react-redux"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      <h3>Shopping Cart</h3>

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart && cart.map(product => {
          return (
            <button
              key={product.id}
              style={{ backgroundColor: '#FF8080' }}
            >
              {product.title} - S/ {product.price}
            </button>
          )
        }) }
      </div>
    </div>
  )
}

export default ShoppingCart