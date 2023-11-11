import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faBars, faShirt, faCircleQuestion, faUsers } from '@fortawesome/free-solid-svg-icons'
import Logo from "../media/logo.png"
import './navbar.css'


export default function NavBar() {
  function open_menu() {
    let navbar = document.getElementById("menu");
    if (navbar.className == "menu") {
      navbar.classList.add("responsive")
    } else {
      navbar.className = "menu"
    }
  }

  function close_menu() {
    let navbar = document.getElementById("menu");
    navbar.classList.remove("responsive")
  }

  function go_to_home() {
    const url = location.pathname
    if (url == '/') {
      document.getElementById('Start').scrollIntoView()
    } else {
      location.href = "/"
    }
    close_menu()
  }

  function go_to_about() {
    document.getElementById('About').scrollIntoView()
    close_menu()
  }

  function go_to_faq() {
    document.getElementById('Faq').scrollIntoView()
    close_menu()
  }

  function go_to_market() {
    location.href = "/estoque/"
  }

  const About = () => {
    return location.pathname === '/' ? (
      <div className="menu-item" onClick={go_to_about} id="aboutBar">
        <a><FontAwesomeIcon icon={faUsers} className='icon-menu' /> Sobre </a>
      </div>
    ) : null
  }

  const Answers = () => {
    return location.pathname === '/' ? (
      <div className="menu-item" onClick={go_to_faq} id="faqBar">
        <a><FontAwesomeIcon icon={faCircleQuestion} /> Dúvidas </a>
      </div>
    ) : null
  }

  return (
    <div className="navbar" id="navBar">

      <div className='navbar-align'>
        <div className="brand" onClick={go_to_home}>
          <img className='brand-logo' src={Logo}></img>
          <h3 className="brand-name"> Desapegos e Artes da Gabi </h3>
        </div>


        <div className="menu" id="menu">
          <a className="menu-icon" onClick={open_menu}>
            <FontAwesomeIcon icon={faBars} size='xl' color='#fffcee'/>
          </a>

          <div className="menu-item" onClick={go_to_home}>
            <a><FontAwesomeIcon icon={faHouse} className='icon-menu' /> Inicio </a>
          </div>

          {About()}

          {Answers()}

          <div className="menu-item" onClick={go_to_market}>
            <a><FontAwesomeIcon icon={faShirt} /> Produtos </a>
          </div>

        </div>
      </div>
    </div>
  )
}