'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faCross, faQuestion, faFaceSadCry, faHeart, faBriefcase, faPuzzlePiece, faHeartBroken, faUser, faBook } from '@fortawesome/free-solid-svg-icons'
import faq from './faq.json'
import data from './about.json'

export default function Home() {
  const TITLE = () => {
    const titles =  [
      "Transforme seus problemas em oportunidades de crescimento...",
      "Vamos juntos encontrar soluções para os seus desafios pessoais!",
      "Transforme sua vida, supere seus desafios..."
    ]
    return titles[Math.floor(Math.random() * 3)
    ]
  }
  
  const PRODUCTS = [
    { "icon": <FontAwesomeIcon icon={faCross}/>, "title": "Luto", "desc": "Lidar com a dor da perda de alguém especial" },
    { "icon": <FontAwesomeIcon icon={faQuestion}/>, "title": "Ansiedade", "desc": "Tratar a ansiedade e lidar com suas repercursões no dia a dia" },
    { "icon": <FontAwesomeIcon icon={faFaceSadCry}/>, "title": "Depressão", "desc": "Tratar a depressão e lidar com o sofrimento" },
    { "icon": <FontAwesomeIcon icon={faHeart}/>, "title": "Autoestima", "desc": "Desenvolver a autoestima, a autoconfiança e outras competências sociais/emocionais" },
    { "icon": <FontAwesomeIcon icon={faBriefcase}/>, "title": "Trabalho", "desc": "Lidar com os dilemas profissionais ou realizar a transição de carreira de forma tranquila" },
    { "icon": <FontAwesomeIcon icon={faBook}/>, "title": "Estudos", "desc": "Organizar estudos ou lidar com as dificuldades de aprendizagem" },
    { "icon": <FontAwesomeIcon icon={faHeartBroken}/>, "title": "Relacionamentos", "desc": "Superar a dor e os traumas ou lidar com a dependência emocional" },
    { "icon": <FontAwesomeIcon icon={faUser}/>, "title": "Autoconhecimento", "desc": "Conhecer a si mesmo, respeitar seus limites e utilizar seus pontos fortes a seu favor" },
  ]

  const ProductsSCards = () => {
    return (
      <div className="products">
        {PRODUCTS.map(({ icon, title, desc }, index) => (
          <div className="product" key={index}>
            {icon}
            <span className="product-title">{title}</span>
            <span className="product-desc">{desc}</span>
          </div>
        ))}
      </div>
      );
    };

  const SERVICESCARD = () => {
    // Topicos dentro do about
    return <ul>
      {data.services.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  }

  const FAQ = () => {
    return faq.map(({question, answer}, index) => (
      <div key={index}>
        <p> {question} </p>
        <span> {answer} </span>
      </div>
    ))
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
        <h1> {TITLE()} </h1>

        <button onClick={goWhats}>
          <FontAwesomeIcon icon={faWhatsapp}/>
          Me chame para conversar e esclarecer suas dúvidas!
        </button>
      </section>

      <section id='Products'>
        <h2> Posso te ajudar com... </h2>

        {ProductsSCards()}
      </section>

      <section id='About'>
        <h2> Deixe eu me apresentar: Prazer, sou Emanuelle... </h2>
        <div className='about-tab'>
          <div>
            <p> {data.about} </p>
            <p>Dessa forma, auxilio as pessoas a:</p>
              {SERVICESCARD()}
            <p> {data.invite} </p>
          </div>
          <img src='me.jpeg' onClick={goInsta}></img>
        </div>
      </section>

      <section id='Faq'>
        <h2> Dúvidas Frequentes... </h2>

        <div className='align-faq'>
          {FAQ()}
        </div>

        <p> Ficou com dúvidas sobre como funciona um processo de terapia, sobre o meu trabalho ou sobre a melhor forma de atendimento para seu caso?</p>
        <p> Entre em contato comigo por Whatssap para conversarmos e esclarecermos todas suas dúvidas.</p>
      </section>
    </>
  )
}
