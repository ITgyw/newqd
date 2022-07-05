import { Suspense, useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import RoutesConfig from './routes'

function App() {


  return (
    <div className="App">
      <RoutesConfig />
      <Footer />
    </div>
  )
}

export default App
