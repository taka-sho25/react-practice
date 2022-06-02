import React from 'react'

import { RouterComponent } from '@/route'
import { Header } from '@/components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header />
      </div>
      <RouterComponent />
    </div>
  )
}

export default App
