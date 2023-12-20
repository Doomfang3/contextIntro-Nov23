import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const IncrementButton = () => {
  const { increment } = useContext(CounterContext)
  return (
    <button type='button' onClick={increment}>
      Increment
    </button>
  )
}

export default IncrementButton
