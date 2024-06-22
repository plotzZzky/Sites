import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/logo.png"
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
    const url = location.pathname
    if (url == '/') {
      document.getElementById('Start').scrollIntoView()
    } else {
      location.href = "/"
    }
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

  function goMenu() {
    location.href = "/pratos/"
  }

  const About = () => {
    return location.pathname === '/' ? (
      <span onClick={goAbout} id="aboutBar">
        <FontAwesomeIcon icon={faUsers}/> Sobre
      </span>
    ) : null
  }

  return (
    <nav>
      <span onClick={goHome}>
        <img className='brand-logo' src={Logo}></img> Sr.Massas
      </span>

      <div className="menu" id="menu">
        <span onClick={openMenu} id='menuBtn'>
          <FontAwesomeIcon icon={faBars}/>
        </span>

        <span onClick={goHome}>
          <FontAwesomeIcon icon={faHouse}/> Inicio
        </span>

        {About()}

        <span onClick={goMenu}>
          <FontAwesomeIcon icon={faMagnifyingGlass}/> Cardápio
        </span>

      </div>
    </nav>
  )
}