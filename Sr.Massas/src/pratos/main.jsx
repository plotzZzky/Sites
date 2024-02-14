import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import NavBar from '@comps/navbar'
import Footer from '@comps/footer'
import '../globals.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <header>
      <NavBar></NavBar>
    </header>
    
    <main>
      <Menu></Menu>
    </main>

    <Footer></Footer>

  </React.StrictMode>,
)
