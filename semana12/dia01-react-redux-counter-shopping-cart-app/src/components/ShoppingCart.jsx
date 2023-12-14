import { useSelector } from "react-redux"

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart)

  return (
    <div>
      <h3>Shopping Cart</h3>

      <pre>{JSON.stringify(cart, null, 2)}</pre>
    </div>
  )
}

export default ShoppingCart