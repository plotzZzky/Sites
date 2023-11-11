import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import Logo from "../media/icon.webp"
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
    document.getElementById('Start').scrollIntoView()
    close_menu()
  }

  function go_to_products() {
    document.getElementById('Products').scrollIntoView()
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


  return (
    <div className="navbar">

      <div className='navbar-align'>
        <div className="brand" onClick={go_to_home}>
          <img className='brand-logo' src={Logo}></img>
          <a className="brand-name"> Psicóloga Emanuelle</a>
        </div>

        <div className="menu" id="menu">
          <a className="menu-icon" onClick={open_menu}>
            <FontAwesomeIcon icon={faBars} size={'xl'} />
          </a>

          <div className="menu-item" onClick={go_to_home}>
            <a> Inicio </a>
          </div>

          <div className="menu-item" onClick={go_to_products}>
            <a> Atendimento </a>
          </div>

          <div className="menu-item" onClick={go_to_about}>
            <a> Apresentação </a>
          </div>

          <div className="menu-item" onClick={go_to_faq}>
            <a> Dúvidas </a>
          </div>

        </div>
      </div>
    </div>
  )
}
