import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return(
      <footer>
        <a href='https://shopee.com.br/desapegoseartesdagabi'> Loja <FontAwesomeIcon icon={faBagShopping} /></a>
        <a href='mailto:contato@desapegoseartesdagabi.com'> E-mail <FontAwesomeIcon icon={faEnvelope} /></a>
        <a href='https://www.github.com/plotzzzky'> Dev <FontAwesomeIcon icon={faGithub} /></a>
      </footer>
    )
}