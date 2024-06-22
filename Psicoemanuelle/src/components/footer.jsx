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
          <span className="brand-name-footer"> Psicóloga Emanuelle</span>
        </div>

      <div className='align-links'>
        <span onClick={goEmail}>
          <FontAwesomeIcon icon={faEnvelope} />
          psicoemanuelledecastro@gmail.com
        </span>

        <span onClick={goWhats}>
          <FontAwesomeIcon icon={faWhatsapp} />
          (51)99834-1299
        </span>

        <span onClick={goInsta}>
          <FontAwesomeIcon icon={faInstagram} />
          psicologia_ao_meu_redor
        </span>

        <span onClick={goLinkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
          psicoemanuelledecastro
        </span>
      </div>
    </footer>    
  )
}