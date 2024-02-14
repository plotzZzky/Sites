import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faStore } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  function goGithub() {
    location.href = "https://github.com/plotzzzky"
  }

  function goProfile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

    return(
      <footer>
        <div className='footer-link'> 
          <FontAwesomeIcon icon={faStore} color='white'/>
          <a onClick={goProfile}> Loja </a>
        </div>

        <div className='footer-link'> 
          <FontAwesomeIcon icon={faEnvelope} color='white'/>
          <a onClick={goProfile}> Contato </a>
        </div>

        <div className='footer-link'> 
          <FontAwesomeIcon icon={faGithub} color='white'/>
          <a onClick={goGithub}> Dev </a>
        </div>
      </footer> 
    )
}