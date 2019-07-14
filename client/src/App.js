import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <div style={{ padding: '0 50px' }}>
        <Router />
      </div>
    </BrowserRouter>
  )
}

export default App
