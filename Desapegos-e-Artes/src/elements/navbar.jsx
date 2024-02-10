import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faShirt, faCircleQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
import Logo from "../media/logo.png"
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

  function goMarket() {
    location.href = "/estoque/"
  }

  const About = () => {
    return location.pathname === '/' ? (
      <div className="menu-item" onClick={goAbout} id="aboutBar">
        <a><FontAwesomeIcon icon={faUsers} className='icon-menu' /> Sobre </a>
      </div>
    ) : null
  }

  const Answers = () => {
    return location.pathname === '/' ? (
      <div className="menu-item" onClick={goFaq} id="faqBar">
        <a><FontAwesomeIcon icon={faCircleQuestion} /> Dúvidas </a>
      </div>
    ) : null
  }

  return (
    <nav id="navBar">
      
      <div className='navbar-align'>
        <div className="brand" onClick={goHome}>
          <img className='brand-logo' src={Logo}></img>
          <h3 className="brand-name"> Desapegos e Artes da Gabi </h3>
        </div>


        <div className="menu" id="menu">
          <a className="menu-icon" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} size='xl' color='#fffcee'/>
          </a>

          <div className="menu-item" onClick={goHome}>
            <a><FontAwesomeIcon icon={faHouse} className='icon-menu' /> Inicio </a>
          </div>

          {About()}

          {Answers()}

          <div className="menu-item" onClick={goMarket}>
            <a><FontAwesomeIcon icon={faShirt} /> Produtos </a>
          </div>

        </div>
      </div>
    </nav>
  )
}