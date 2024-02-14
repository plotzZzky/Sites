import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return(
      <footer>
        <div className='footer-align'>
          <div className='footer-link'>
            <a href='https://shopee.com.br/desapegoseartesdagabi'> <FontAwesomeIcon icon={faBagShopping} /> Loja </a>
          </div>

          <div className='footer-link'>
            <a href='mailto:contato@desapegoseartesdagabi.com'> <FontAwesomeIcon icon={faEnvelope} /> E-mail </a>
          </div>

          <div className='footer-link'>
            <a href='https://www.github.com/plotzzzky'> <FontAwesomeIcon icon={faGithub} /> Dev </a>
          </div>
        </div>
      </footer>
    )
}