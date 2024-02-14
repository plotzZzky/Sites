import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faMagnifyingGlass, faUsers } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/logo.png"
import './navbar.css'

export default function NavBar() {
  function openMenu() {
    let navbar = document.getElementById("menu");
    if (navbar.className == "menu") {
      navbar.classList.add("responsive")
    } else {
      navbar.className = "menu"
    }
  }

  function closeMenu() {
    let navbar = document.getElementById("menu");
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
      <div className="menu-item" onClick={goAbout} id="aboutBar">
        <a><FontAwesomeIcon icon={faUsers} className='icon-menu' /> Sobre </a>
      </div>
    ) : null
  }

  return (
    <nav>
      <div className='navbar-align'>
        <div className="brand" onClick={goHome}>
          <img className='brand-logo' src={Logo}></img>
          <a className="brand-name"> Sr.Massas</a>
        </div>

        <div className="menu" id="menu">
          <a className="menu-icon" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} color='white' />
          </a>

          <div className="menu-item" onClick={goHome}>
            <a><FontAwesomeIcon icon={faHouse} className='icon-menu' /> Inicio </a>
          </div>

          {About()}

          <div className="menu-item" onClick={goMenu}>
            <a><FontAwesomeIcon icon={faMagnifyingGlass} className='icon-menu' /> Cardápio </a>
          </div>

        </div>
      </div>
    </nav>
  )
}