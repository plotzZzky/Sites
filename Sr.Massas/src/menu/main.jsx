import React from 'react'
import ReactDOM from 'react-dom/client'
import Menu from './Menu'
import NavBar from '../elements/navbar'
import Footer from '../elements/footer'
import '../index.css'


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
