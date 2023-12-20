import FirstComponent from './components/FirstComponent'
import IncrementButton from './components/IncrementButton'
import CounterContextProvider from './contexts/CounterContext'

function App() {
  return (
    <CounterContextProvider>
      <FirstComponent />
      <IncrementButton />
    </CounterContextProvider>
  )
}

export default App
