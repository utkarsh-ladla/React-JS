import React, { useState } from 'react'
import UserContextProvider from './Context/UserContextProvider'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
    <h1>Rect with chai</h1>
    <Login />
    <Profile />
    </UserContextProvider>
  )
}

export default App
