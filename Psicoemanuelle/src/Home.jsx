import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCross, faQuestion, faFaceSadCry, faHeart, faBriefcase, faPuzzlePiece, faHeartBroken, faUserDoctor } from '@fortawesome/free-solid-svg-icons'
import ProfilePic from './assets/profile.jpg'
import faq from './assets/Content.js'

export default function Home() {

  const TITLES = [
    "Transforme seus problemas em oportunidades de crescimento...",
    "Vamos juntos encontrar soluções para os seus desafios pessoais!",
    "Transforme sua vida, supere seus desafios..."
  ]

  const TITLE = TITLES[Math.floor(Math.random() * (2 - 0) + 0)] // Titulo da pagina inicial

  const PRODUCTS = [
    { "icon": <FontAwesomeIcon icon={faCross} className='product-icon' />, "title": "Luto", "desc": "Lidar com a dor da perda de alguém especial" },
    { "icon": <FontAwesomeIcon icon={faQuestion} className='product-icon' />, "title": "Ansiedade", "desc": "Tratar ansiedade e lidar com suas repercursões no dia a dia" },
    { "icon": <FontAwesomeIcon icon={faFaceSadCry} className='product-icon' />, "title": "Depressão", "desc": "Tratar a depressão e lidar com o sofrimento" },
    { "icon": <FontAwesomeIcon icon={faHeart} className='product-icon' />, "title": "Autoestima", "desc": "Desenvolver autoestima, autoconfiança e outras competências sociais/emocionais" },
    { "icon": <FontAwesomeIcon icon={faBriefcase} className='product-icon' />, "title": "Trabalho", "desc": "Lidar com os dilemas profissionais ou realizar transição de carreira de forma tranquila" },
    { "icon": <FontAwesomeIcon icon={faPuzzlePiece} className='product-icon' />, "title": "Desafios", "desc": "Se organizar para os estudos ou lidar com as dificuldades de aprendizagem" },
    { "icon": <FontAwesomeIcon icon={faHeartBroken} className='product-icon' />, "title": "Relacionamentos", "desc": "Superar a dor e os traumas ou lidar com a dependência emocional" },
    { "icon": <FontAwesomeIcon icon={faUserDoctor} className='product-icon' />, "title": "Autoconhecimento", "desc": "Conhecer a si mesmo, respeitar seus limites e utilizar seus pontos fortes a seu favor" },
  ]

  const ABOUTME = `Psicóloga formada pela Universidade Federal de Ciências da Saúde de Porto Alegre (UFCSPA). 
    Realizo atendimentos online na Abordagem Humanista, uma forma de enxergar o ser humano, a partir de suas relações e suas potencialidades. 
    Essa abordagem nos ajuda a perceber que o ser humano tem potencial para resolver suas dificuldades e se tornar uma pessoa melhor quando encontra apoio e 
    consegue desenvolver relações saudáveis consigo e com as outras pessoas.`

  const KNOWLEDGE = `Tenho conhecimento em Língua Brasileira de Sinais (Libras) e valorizo muito a Cultura Surda. 
    Por isso, também realizo atendimentos online em Libras, porque acredito que a psicologia deve ser respeitosa e acessível a todas as pessoas. 
    Além disso, a comunicação é um aspecto muito importante da nossa vida e possui grande impacto na nossa saúde física e mental.`

  const INVITE = `Se você se identifica com algum desses pontos, entre em contato comigo! Não espere chegar ao limite para buscar ajuda! 
    Vamos conversar para que eu possa lhe ajudar e lhe acompanhar nesse importante e necessário processo de cuidado da sua saúde mental.`

  const SERVICES = [
    "Se conhecerem melhor, conhecendo tanto suas dificuldades, quanto suas potencialidades;",
    "Estabelecerem relações saudáveis, acolhedoras e respeitosas consigo e com os outros;",
    "Lidarem com dificuldades relacionadas a saúde mental, através de suporte e orientação com uma profissional;",
    "Lidarem com o processo de luto, em caso de perdas;",
    "Descobrirem formas eficazes para resolverem os problemas e os dilemas do dia a dia;",
    "Viverem de forma genuína e assertiva, sendo quem elas realmente são e desejam ser;",
    "Se desenvolverem e crescerem como pessoas, conseguindo atingir seus objetivos e colocar em práticas projetos.",
  ]

  const SERVICESCARD = () => {
    return (
      <ul>
        {SERVICES.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    );
  }
  
  const PRODUCTSCARDS = () => {
    return (
      <div className='div-products'>
        {PRODUCTS.map((data, index) => (
          <div className='product' key={index}>
            <div>
              {data.icon}
            </div>
            <a className='product-title'> {data.title}</a>
            <a className='product-desc'> {data.desc}</a>
          </div>
        ))}
      </div>
    )
  }

  const FAQ = () => {
    return(
      <>
        {faq.map((data, index) => (
          <details key={index}>
            <summary> {data.question} </summary>
            <a> {data.answer} </a>
          </details>
        ))}
      </>
    )
  }

  function goWhats() {
    location.href = "https://api.whatsapp.com/send?phone=5551998341299"
  }

  function goInsta() {
    location.href = "https://instagram.com/_u/psicologia_ao_meu_redor/"
  }

  return (
    <>
      <section id='Start'>
        <h1 className='big-title'> {TITLE} </h1>
        <button className="btn" onClick={goWhats}>
          <FontAwesomeIcon icon={faWhatsapp} className='icon-whats' />
          Me chame para conversar e esclarecer suas dúvidas!
        </button>
      </section>

      <section id='Products'>
        <h1 className='title'> Posso te ajudar com... </h1>
          {PRODUCTSCARDS()}
      </section>

      <section id='About'>
        <h1> Deixe eu me apresentar: Prazer, sou Emanuelle... </h1>
        <div className='about-tab'>
          <div className='about-div'>
            <p> {ABOUTME} </p>
            <p> {KNOWLEDGE} </p>
            <p>Dessa forma, auxilio as pessoas a:</p>
              {SERVICESCARD()}
            <p> {INVITE} </p>
          </div>
          <img src={ProfilePic} className='about-profile' onClick={goInsta}></img>
        </div>
      </section>

      <section id='Faq'>
        <h1> Dúvidas Frequentes... </h1>
        {FAQ()}
        <br/>
        <p> Ficou com dúvidas sobre como funciona um processo de terapia, sobre o meu trabalho ou sobre a melhor forma de atendimento para seu caso?</p>
        <p> Estou à disposição! Entre em contato comigo por Whatssap para conversarmos e esclarecermos todas suas dúvidas.</p>
      </section>
    </>
  )
}
