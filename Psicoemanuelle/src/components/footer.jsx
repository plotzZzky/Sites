import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Logo from "../assets/icon.webp"

export default function Footer() {

  function goEmail() {
    location.href = "mailto:psicoemanuelledecastro@gmail.com"
  }

  function goWhats() {
    location.href = "https://api.whatsapp.com/send?phone=5551998341299"
  }

  function goInsta() {
    location.href = "https://instagram.com/_u/psicologia_ao_meu_redor/"
  }

  function goLinkedin() {
    location.href = "https://br.linkedin.com/"
  }

  return(
    <footer id="footer">
        <div className="brand-footer">
          <img className='brand-logo-footer' src={Logo}></img>
          <a className="brand-name-footer"> Psicóloga Emanuelle</a>
        </div>

      <div className='align-links'>
        <div className="link" onClick={goEmail}>
          <FontAwesomeIcon icon={faEnvelope} />
          <span> psicoemanuelledecastro@gmail.com </span>
        </div>

        <div className="link" onClick={goWhats}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <span> (51)99834-1299 </span>
        </div>

        <div className="link" onClick={goInsta}>
          <FontAwesomeIcon icon={faInstagram} />
          <span> psicologia_ao_meu_redor </span>
        </div>

        <div className="link" onClick={goLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
          <span> psicoemanuelledecastro </span>
        </div>
      </div>
    </footer>    
  )
}