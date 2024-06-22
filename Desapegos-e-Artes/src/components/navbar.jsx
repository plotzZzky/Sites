import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faShirt, faCircleQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
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

  function goMarket() {
    location.href = "/estoque/"
  }

  const About = () => {
    return location.pathname === '/' ? (
      <span onClick={goAbout} id="aboutBar">
        <FontAwesomeIcon icon={faUsers} className='icon-menu' /> Sobre
      </span>
    ) : null
  }

  const Answers = () => {
    return location.pathname === '/' ? (
      <span onClick={goFaq} id="faqBar">
        <FontAwesomeIcon icon={faCircleQuestion} /> Dúvidas
      </span>
    ) : null
  }

  return (
    <nav id="navBar">
      
      <div className='navbar-align'>
        <span onClick={goHome}>
          <img className='brand-logo' src={Logo}></img>
           Desapegos e Artes da Gabi
        </span>


        <div className="menu" id="menu">
          <span onClick={openMenu} id='menuBtn'>
            <FontAwesomeIcon icon={faBars}  color='#fffcee'/>
          </span>

          <span onClick={goHome}>
            <FontAwesomeIcon icon={faHouse} className='icon-menu' />Inicio
          </span>

          {About()}

          {Answers()}

          <span onClick={goMarket}>
            <FontAwesomeIcon icon={faShirt} /> Produtos
          </span>

        </div>
      </div>
    </nav>
  )
}