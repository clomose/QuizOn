import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import History from './Pages/Quiz/History'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import PageLayout from './Pages/Home/PageLayout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/history' element={<History />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
