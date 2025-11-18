import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import UserProvider from './context/UserContext'
const App = () => {
  return (
    <UserProvider>
<Routes>
<Route path='/' element={<Landingpage />} /> 
</Routes>
    </UserProvider>
  )
}

export default App
