import { useState, useEffect } from 'react'
import NavBar from './elements/navbar'
import Logo from '../src/media/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'


export default function App() {
  const [getFaq, setFaq] = useState([])
  const [getAnswer, setAnswer] = useState([{"question":'As peças são lavadas antes da venda?', "answer": 'Sim, todas as peças são lavadas e higienizadas antes de serem colocadas à venda.'},
  {"question": 'Como posso pagar pelas minhas compras?', "answer": 'Aceitamos pagamentos via cartão de crédito, débito e transferência bancária.'},
  {"question": 'Vocês fazem entrega para todo o país?', "answer": 'Sim, fazemos entregas para todo o país. O frete é calculado de acordo com a região de entrega.'},
  {"question": 'Vocês oferecem trocas ou devoluções?', "answer": 'Infelizmente, não oferecemos trocas ou devoluções. Por isso, é importante verificar cuidadosamente as medidas e detalhes da peça antes de fazer a compra.'},
  {"question": 'Como posso garantir que a peça vai me servir?', "answer": 'É importante verificar cuidadosamente as medidas da peça antes de fazer a compra. Caso tenha dúvidas, entre em contato conosco e teremos prazer em ajudá-lo.'}
  ]);

  function create_faq() {
    setFaq(
      getAnswer.map((data) => (
        <details>
          <summary> {data.question} </summary>
          <a> {data.answer} </a>
        </details>
      ))
    )
  } 

  function go_to_profile() {
    location.href = `https://shopee.com.br/desapegoseartesdagabi`
  }

  function show_answer(text) {
    const answer = document.getElementById("AnswerText")
    answer.innerText = text
    answer.style.visibility = 'visible'
  }

  useEffect(() => {
    create_faq()
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className='page' id='Start'>
        <div>
          <div className='div-big-brand'>
            <img className='big-logo' src={Logo}></img>
            <div>
              <a className='big-title'> Desapegos e Artes da Gabi </a><br />
              <a className='subtitle'> Transforme seu guarda-roupa em uma obra de arte </a>
            </div>
          </div>
          <button className='btn' onClick={go_to_profile}>
            <a> Veja e se apaixone! </a>
          </button>
        </div>
      </div>

      <div className='page' id='About'>
        <a className='title'>  Quem somos... </a>
        <p className='home-text'> O nosso brechó é fruto do amor e da dedicação, nascido com a missão genuína de proporcionar uma experiência na moda que seja não apenas sustentável, mas também verdadeiramente singular. Cada peça é cuidadosamente selecionada, não apenas por sua qualidade, mas também por seu estilo singular, e é minuciosamente higienizada para garantir o melhor para os nossos clientes. </p>
        <p className='home-text'> Nosso compromisso vai além: oferecemos uma extensa variedade de roupas femininas, masculinas e acessórios, com entregas disponíveis em todo o país. Queremos que você desfrute da moda de uma maneira mais consciente, sentindo a diferença que um brechó cuidadosamente concebido pode fazer. Cada detalhe, desde a escolha das peças até a preocupação com o meio ambiente, reflete nosso carinho e responsabilidade.</p>
        <p className='home-text'> Ao escolher o nosso brechó, você não está apenas adquirindo peças de qualidade, está se juntando a um movimento que valoriza a moda de forma ética e sustentável. Aprecie não apenas o estilo, mas também a história por trás de cada peça. Seja parte dessa mudança, abrace a moda que une consciência e exclusividade.</p>
      </div>

      <div className='page' id='Faq'>
        <h3 className='title'>  Dúvidas... </h3>
        {getFaq}
      </div>

      <footer>
        <a href='https://www.github.com/plotzzzky'> Plotzky <FontAwesomeIcon icon={faGithub} /></a>
        <a href='https://shopee.com.br/desapegoseartesdagabi'> Loja <FontAwesomeIcon icon={faBagShopping} /></a>
      </footer>
    </>
  )
}
