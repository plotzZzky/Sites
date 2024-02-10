import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

  function goGithub() {
    location.href = "https://github.com/plotzzzky"
  }

    return(
      <footer>
        <div> 
          <FontAwesomeIcon icon={faStore} color='white'/>
          <a onClick={go_to_profile}> Loja </a>
        </div>

        <div> 
          <FontAwesomeIcon icon={faGithub} color='white'/>
          <a onClick={goGithub}> Plotzky </a>
        </div>
      </footer> 
    )
}