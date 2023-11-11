import NavBar from './elements/navbar'
import ProfilePic from './media/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faWhatsapp, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faCross, faQuestion, faFaceSadCry, faHeart, faBriefcase, faPuzzlePiece, faHeartBroken, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import faq from './media/Content.js'



export default function App() {

  const titles = ["Transforme seus problemas em oportunidades de crescimento...",
    "Vamos juntos encontrar soluções para os seus desafios pessoais!",
    "Transforme sua vida, supere seus desafios..."
  ]
  
   const products = [
    {"icon": <FontAwesomeIcon icon={faCross} className='product-icon'/>, "title": "Luto", "desc": "Lidar com a dor da perda de alguém especial"},
    {"icon": <FontAwesomeIcon icon={faQuestion} className='product-icon'/>, "title": "Ansiedade", "desc": "Tratar ansiedade e lidar com suas repercursões no dia a dia"},
    {"icon": <FontAwesomeIcon icon={faFaceSadCry} className='product-icon'/>, "title": "Depressão", "desc": "Tratar a depressão e lidar com o sofrimento"},
    {"icon": <FontAwesomeIcon icon={faHeart} className='product-icon'/>, "title": "Autoestima", "desc": "Desenvolver autoestima, autoconfiança e outras competências sociais/emocionais"},
    {"icon": <FontAwesomeIcon icon={faBriefcase} className='product-icon'/>, "title": "Trabalho", "desc": "Lidar com os dilemas profissionais ou realizar transição de carreira de forma tranquila"},
    {"icon": <FontAwesomeIcon icon={faPuzzlePiece} className='product-icon'/>, "title": "Desafios", "desc": "Se organizar para os estudos ou lidar com as dificuldades de aprendizagem"},
    {"icon": <FontAwesomeIcon icon={faHeartBroken} className='product-icon'/>, "title": "Relacionamentos", "desc": "Superar a dor e os traumas ou lidar com a dependência emocional"},
    {"icon": <FontAwesomeIcon icon={faUserDoctor} className='product-icon'/>, "title": "Autoconhecimento", "desc": "Conhecer a si mesmo, respeitar seus limites e utilizar seus pontos fortes a seu favor"},
  ] 
   

  function go_to_email() {
    location.href = "mailto:psicoemanuelledecastro@gmail.com"
  }

  function go_to_whats() {
    location.href = "https://api.whatsapp.com/send?phone=5551998341299"
  }

  function go_to_insta() {
    location.href = "https://instagram.com/_u/psicologia_ao_meu_redor/"
  }

  function go_to_linkedin() {
    location.href = "https://br.linkedin.com/"
  }


  return (
    <>
      <NavBar></NavBar>

      <div className='page' id='Start'>
        <h1 className='big-title'> {titles[Math.floor(Math.random() * (2 - 0) + 0)]} </h1>
          <button className="btn" onClick={go_to_whats}>
            <FontAwesomeIcon icon={faWhatsapp} className='icon-whats' />
            Me chame para conversar e esclarecer suas dúvidas!
          </button>
      </div>

      <div className='page' id='Products'>
        <a className='title'> Posso te ajudar com... </a><br />
        <div className='div-products'>
          {products.map((data) => (
              <div className='product'>
                <div className=''>
                  {data.icon}
                </div>
                <a className='product-title'> {data.title}</a>
                <a className='product-desc'> {data.desc} </a>
              </div>
          ))}
        </div>
      </div>

      <div className='page' id='About'>
        <a className='title'> Deixe eu me apresentar: Prazer, sou Emanuelle... </a><br />
        <div className='about-tab'>
          <div className='about-div'>
            <p>Psicóloga formada pela Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). Realizo atendimentos online na Abordagem Humanista, uma forma de enxergar o ser humano, a partir de suas relações e suas potencialidades. Essa abordagem nos ajuda a perceber que o ser humano tem potencial para resolver suas dificuldades e se tornar uma pessoa melhor quando encontra apoio e consegue desenvolver relações saudáveis consigo e com as outras pessoas.</p>
            <p>Tenho conhecimento em Língua Brasileira de Sinais (Libras) e valorizo muito a Cultura Surda. Por isso, também realizo atendimentos online em Libras, porque acredito que a psicologia deve ser respeitosa e acessível a todas as pessoas. Além disso, a comunicação é um aspecto muito importante da nossa vida e possui grande impacto na nossa saúde física e mental.</p>
            <p>Dessa forma, auxilio as pessoas a:</p>
            <ul>
                <li>Se conhecerem melhor, conhecendo tanto suas dificuldades, quanto suas potencialidades;</li>
                <li>Estabelecerem relações saudáveis, acolhedoras e respeitosas consigo e com os outros;</li>
                <li>Lidarem com dificuldades relacionadas a saúde mental, através de suporte e orientação com uma profissional;</li>
                <li>Lidarem com o processo de luto, em caso de perdas;</li>
                <li>Descobrirem formas eficazes para resolverem os problemas e os dilemas do dia a dia;</li>
                <li>Viverem de forma genuína e assertiva, sendo quem elas realmente são e desejam ser;</li>
                <li>Se desenvolverem e crescerem como pessoas, conseguindo atingir seus objetivos e colocar em práticas projetos.</li>
            </ul>
            <p>Se você se identifica com algum desses pontos, entre em contato comigo! Não espere chegar ao limite para buscar ajuda! Vamos conversar para que eu possa lhe ajudar e lhe acompanhar nesse importante e necessário processo de cuidado da sua saúde mental.</p>
          </div>
          <img src={ProfilePic} className='about-profile' onClick={go_to_insta}></img>
        </div>
      </div>

      <div className='page' id='Faq' style={{paddingTop: '4em'}}>
        <a className='title'> Dúvidas Frequentes... </a>
        {faq.map((data) => (
          <details>
            <summary> {data.question} </summary>
            <a> {data.answer} </a>
          </details>
        ))}
        <p className='home-text' style={{paddingTop: '0.5vh'}}> Ficou com dúvidas sobre como funciona um processo de terapia, sobre o meu trabalho ou sobre a melhor forma de atendimento para seu caso?</p>
        <p className='home-text'> Estou à disposição! Entre em contato comigo por Whatssap para conversarmos e esclarecermos todas suas dúvidas.</p>
      </div>
      <footer id="footer">
        <p className="link" onClick={go_to_email}>
          <FontAwesomeIcon icon={faEnvelope} />
          <a> psicoemanuelledecastro@gmail.com </a>
        </p>
        <p className="link" onClick={go_to_whats}>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a> (51)99834-1299  </a>
        </p>
        <p className="link" onClick={go_to_insta}>
          <FontAwesomeIcon icon={faInstagram} />
          <a> psicologia_ao_meu_redor </a>
        </p>
        <p className="link" onClick={go_to_linkedin}>
          <FontAwesomeIcon icon={faLinkedin} />
          <a> psicoemanuelledecastro </a>
        </p>
      </footer>
    </>
  )
}
