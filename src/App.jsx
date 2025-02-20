import { useState } from 'react'
import History from './Pages/Quiz/History'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <History />
    </>
  )
}

export default App
