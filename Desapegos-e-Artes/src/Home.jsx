import Logo from './assets/logo.png'

export default function Home() {
  const answer = [
    {"question":'As peças são lavadas antes da venda?', "answer": 'Sim, todas as peças são lavadas e higienizadas antes de serem colocadas à venda.'},
    {"question": 'Como posso pagar pelas minhas compras?', "answer": 'Aceitamos pagamentos via cartão de crédito, débito e transferência bancária.'},
    {"question": 'Vocês fazem entrega para todo o país?', "answer": 'Sim, fazemos entregas para todo o país. O frete é calculado de acordo com a região de entrega.'},
    {"question": 'Vocês oferecem trocas ou devoluções?', 
    "answer": 'Infelizmente, não oferecemos trocas ou devoluções. Por isso, é importante verificar cuidadosamente as medidas e detalhes da peça antes de fazer a compra.'},
    {"question": 'Como posso garantir que a peça vai me servir?', 
    "answer": 'É importante verificar cuidadosamente as medidas da peça antes de fazer a compra. Caso tenha dúvidas, entre em contato conosco e teremos prazer em ajudá-lo.'}
  ];

  const FAQ = () => {
    return(
      <>
      {answer.map((data, index) => (
        <details key={index}>
          <summary> {data.question} </summary>
          <a> {data.answer} </a>
        </details>
      ))}
      </>
    )
  }

  function goProfile() {
    location.href = `https://shopee.com.br/desapegoseartesdagabi`
  }

  return (
    <>
      <section id='Start'>
        <div className='div-big-brand'>
          <img className='big-logo' src={Logo}></img>
          <div className='big-brand-text'>
            <span className='big-title'> Desapegos e Artes da Gabi </span><br/>
            <a className='subtitle'> Transforme seu guarda-roupa em uma obra de arte </a>
          </div>
        </div>

        <button className='btn' onClick={goProfile}> Veja e se apaixone! </button>
        
      </section>

      <section id='About'>
        <h1>  Quem somos... </h1>
        <p> O nosso brechó é fruto do amor e da dedicação, nascido com a missão genuína de proporcionar uma experiência na moda que seja não apenas sustentável, mas também verdadeiramente singular. Cada peça é cuidadosamente selecionada, não apenas por sua qualidade, mas também por seu estilo singular, e é minuciosamente higienizada para garantir o melhor para os nossos clientes. </p>
        <p> Nosso compromisso vai além: oferecemos uma extensa variedade de roupas femininas, masculinas e acessórios, com entregas disponíveis em todo o país. Queremos que você desfrute da moda de uma maneira mais consciente, sentindo a diferença que um brechó cuidadosamente concebido pode fazer. Cada detalhe, desde a escolha das peças até a preocupação com o meio ambiente, reflete nosso carinho e responsabilidade.</p>
        <p> Ao escolher o nosso brechó, você não está apenas adquirindo peças de qualidade, está se juntando a um movimento que valoriza a moda de forma ética e sustentável. Aprecie não apenas o estilo, mas também a história por trás de cada peça. Seja parte dessa mudança, abrace a moda que une consciência e exclusividade.</p>
      </section>

      <section id='Faq'>
        <h1>  Dúvidas... </h1>
        {FAQ()}
      </section>
    </>
  )
}
