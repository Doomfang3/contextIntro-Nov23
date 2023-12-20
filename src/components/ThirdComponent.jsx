import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

const ThirdComponent = () => {
  const { counter } = useContext(CounterContext)

  return (
    <>
      <p>Third component, current counter : {counter}</p>
    </>
  )
}

export default ThirdComponent
