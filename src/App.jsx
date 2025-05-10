import React from 'react'
import { DashboardPage } from './pages/dashboard'
import { BrowserRouter as Routes } from 'react-router-dom'
const App = () => {
  return (
    <Routes>
      <DashboardPage />
    </Routes>
  )
}

export default App
