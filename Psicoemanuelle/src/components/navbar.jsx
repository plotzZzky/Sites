import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from "../assets/icon.webp"
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
        <div className="brand" onClick={goHome}>
          <img className='brand-logo' src={Logo}></img>
          <a> Psicóloga Emanuelle</a>
        </div>

        <div className="menu" id="menu">
          <a className="menu-icon" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} size={'xl'} />
          </a>

          <div className="menu-item" onClick={goHome}>
            <a> Inicio </a>
          </div>

          <div className="menu-item" onClick={goProducts}>
            <a> Atendimento </a>
          </div>

          <div className="menu-item" onClick={goAbout}>
            <a> Apresentação </a>
          </div>

          <div className="menu-item" onClick={goFaq}>
            <a> Dúvidas </a>
          </div>

        </div>
      </div>
    </nav>
  )
}
