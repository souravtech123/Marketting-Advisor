import React from 'react'
import Home from './Pages/Home'
import { Routes , Route} from 'react-router'
import Marketting from './Pages/Marketting'

const App = () => {
  return (
    <Routes>
       <Route path="/" element={<Home/>} />
       <Route path='/market' element={<Marketting/>} />
    </Routes>
    
  )
}

export default App
