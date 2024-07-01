import { useState } from 'react'
import HooksApp from './pages/HooksApp'
import { FormsApp } from './components/FormsApp'
import { FetchApp } from './components/FetchApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HooksApp />

      <FormsApp />

      <FetchApp />
    </>
  )
}

export default App
