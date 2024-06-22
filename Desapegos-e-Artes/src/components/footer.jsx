import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping, faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    return(
      <footer>
        <h3> Nossos contatos: </h3>

        <div>
          <span onClick='https://shopee.com.br/desapegoseartesdagabi'>
            <FontAwesomeIcon icon={faBagShopping} /> shopee/desapegoseartesdagabi
          </span>

          <span onClick='mailto:contato@desapegoseartesdagabi.com'>
            <FontAwesomeIcon icon={faEnvelope} /> contato@desapegoseartesdagabi.com
          </span>
        </div>
      </footer>
    )
}