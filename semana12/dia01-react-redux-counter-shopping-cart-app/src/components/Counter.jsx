import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment } from '../store'

const Counter = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  return (
    <>
      <button onClick={handleIncrement}>+1</button>
      <div>{counter}</div>
      <button onClick={handleDecrement}>-1</button>
    </>
  )
}

export default Counter