import { useState } from 'react'

import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home /> */}
      <Quiz />
    </>
  )
}

export default App
