import React from 'react'
import ReactDOM from 'react-dom/client'
import Estoque from './estoque'
import NavBar from '@comps/navbar'
import Footer from '@comps/footer'
import '../globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <NavBar/>
    </header>

    <main>
      <Estoque/>
    </main>

    <Footer/>
  </React.StrictMode>,
)
