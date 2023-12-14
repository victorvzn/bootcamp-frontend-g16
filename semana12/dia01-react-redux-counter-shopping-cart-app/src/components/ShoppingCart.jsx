import { useSelector, useDispatch } from "react-redux"

import { clearCart, removeToCart } from "../store/cart"
import { formatNumber } from "../utils"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  const total = cart.reduce((acc, product) => {
    const qty = product.quantity
    const price = product.price
    const subtotal = qty * price

    return acc + subtotal
  }, 0)

  if (cart.length === 0) {
    return (
      <div>
        <h3>Shopping Cart</h3>
        
        <p>Shopping cart empty</p>
      </div>
    )
  }

  return (
    <div>
      <h3>Shopping Cart</h3>

      <div style={{ marginBottom: '1rem'}}>
        <button
          onClick={() => dispatch(clearCart())}
        >
          Clean cart
        </button>
      </div>

      {/* <pre>{JSON.stringify(cart, null, 2)}</pre> */}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {cart && cart.map(product => {
          return (
            <button
              key={product.id}
              style={{ backgroundColor: '#FF8080' }}
              onClick={() => dispatch(removeToCart(product.id))}
            >
              {product.title} - S/ {product.price} (Qty: {product.quantity})
            </button>
          )
        }) }
      </div>

      <div style={{ paddingTop: '1rem', fontSize: '1.5rem' }}>
        <strong>TOTAL:</strong> <span>S/ {formatNumber(total)}</span>
      </div>
    </div>
  )
}

export default ShoppingCart