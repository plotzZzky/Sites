import React from 'react'
import ReactDOM from 'react-dom/client'
import Inventory from './estoque'
import NavBar from '../elements/navbar'
import Footer from '../elements/footer'
import '../index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <NavBar/>
    </header>

    <main>
      <Inventory/>
    </main>

    <Footer/>
  </React.StrictMode>,
)
