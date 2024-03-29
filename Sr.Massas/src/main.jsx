import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import NavBar from '@comps/navbar'
import Footer from '@comps/footer'
import './globals.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <NavBar />
    </header>

    <main>
      <Home/>
    </main>

    <Footer/>
  </React.StrictMode>,
)
