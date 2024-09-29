'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

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

  return(
    <footer id="footer">
        <div className="brand-footer">
          <img className='brand-logo-footer' src='logo.png'></img>
          <a className="brand-name-footer">Psicóloga Emanuelle</a>
        </div>

      <div className='align-links'>
        <span onClick={goWhats}>
          <FontAwesomeIcon icon={faWhatsapp} />
          (51)99834-1299
        </span>

        <span onClick={goEmail}>
          <FontAwesomeIcon icon={faEnvelope} />
          contato@psicoemanuelledecastro.com.br
        </span>

        <span onClick={goInsta}>
          <FontAwesomeIcon icon={faInstagram} />
          psicologia_ao_meu_redor
        </span>
      </div>
    </footer>    
  )
}