import React from 'react'
import { DashboardPage } from './pages/dashboard'
import { PublicationDetail } from './components/publications/PublicationDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<DashboardPage />} />
        <Route path='/publications/:id' element={<PublicationDetail />} />
      </Routes>
    </Router>
  )
}

export default App
