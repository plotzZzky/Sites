import NavBar from './elements/navbar'
import Ifood from './media/ifood-logo.webp'
import IfoodRed from './media/ifood-logo-red.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'


export default function App() {
  function go_to_profile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

  function go_to_github() {
    location.href = "https://github.com/plotzzzky"
  }

  return (
    <>
      <NavBar></NavBar>

      <div className='page background-image' id='Start'>
        <div>
          <a className='big-title'> Sr. das Massas </a>
          <p className='subtitle'> O melhor da comida caseira e italiana na região</p>
          <button className='btn' onClick={go_to_profile}>
            <a> Peça já pelo </a>
            <img src={Ifood} className="ifood-logo"></img>
            <img src={IfoodRed} className="ifood-logo-red"></img>
          </button>
        </div>
      </div>

      <div className='page' id='About'>
        <a id="scroll"></a>
        <a className='title'>  Quem somos: </a>
        <p className='home-text'> Delivery de comida caseira feito com muito amor e carinho pela nossa equipe de ótimos profissionais </p>
        <p className='home-text'> Funcionamento das: 19:00 as 22:00 de Terça a Domingo </p>
        <a className='home-text'> Prove já uma de nossas delicias </a>

      </div>

      <footer>
        <div> 
          <FontAwesomeIcon icon={faStore} color='white'/>
          <a onClick={go_to_profile}> Loja </a>
        </div>

        <div> 
          <FontAwesomeIcon icon={faGithub} color='white'/>
          <a onClick={go_to_github}> Plotzky </a>
        </div>
      </footer>
    </>
  )
}
