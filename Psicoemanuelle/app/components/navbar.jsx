'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './navbar.css'

export default function NavBar() {
  function openMenu() {
    const navbar = document.getElementById("menu");
    if (navbar.className == "menu") {
      navbar.classList.add("responsive")
    } else {
      navbar.className = "menu"
    }
  }

  function closeMenu() {
    const navbar = document.getElementById("menu");
    navbar.classList.remove("responsive")
  }

  function goHome() {
    document.getElementById('Start').scrollIntoView()
    closeMenu()
  }

  function goProducts() {
    document.getElementById('Products').scrollIntoView()
    closeMenu()
  }

  function goAbout() {
    document.getElementById('About').scrollIntoView()
    closeMenu()
  }

  function goFaq() {
    document.getElementById('Faq').scrollIntoView()
    closeMenu()
  }


  return (
    <nav>
      <div className='navbar-align'>
        <span className="brand" onClick={goHome}>
          <img className='brand-logo' src='logo.png'></img> Psicóloga Emanuelle
        </span>

        <div className="menu" id="menu">
          <span onClick={openMenu} id='menuBtn'>
            <FontAwesomeIcon icon={faBars}/>
          </span>

          <span onClick={goHome}> Inicio </span>

          <span onClick={goProducts}> Atendimento </span>

          <span onClick={goAbout}> Apresentação </span>

          <span onClick={goFaq}> Dúvidas </span>
        </div>
      </div>
    </nav>
  )
}
