import { createContext, useState } from 'react'

export const CounterContext = createContext()

const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <CounterContext.Provider value={{ counter, increment }}>{children}</CounterContext.Provider>
  )
}

export default CounterContextProvider
