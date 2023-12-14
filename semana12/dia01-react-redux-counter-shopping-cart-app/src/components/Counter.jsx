import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, incrementByAmount, decrementByAmount } from '../store/counter'

const Counter = () => {
  const counter = useSelector(state => state.counter)

  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(5))
  }
  
  const handleDecrementByAmount = () => {
    // dispatch(incrementByAmount(-5))
    dispatch(decrementByAmount(5))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h3>Counter with Redux</h3>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button onClick={handleIncrementByAmount}>+5</button>
        <button onClick={handleIncrement}>+1</button>
        <h1>{counter}</h1>
        <button onClick={handleDecrement}>-1</button>
        <button onClick={handleDecrementByAmount}>-5</button>
      </div>
    </div>
  )
}

export default Counter