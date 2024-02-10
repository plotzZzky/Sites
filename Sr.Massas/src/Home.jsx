import Ifood from './media/ifood-logo.webp'
import IfoodRed from './media/ifood-logo-red.webp'

export default function Home() {
  function goProfile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

  return (
    <>
      <section id='Start'>
          <h1 className='big-title'> Sr. das Massas </h1>
          <h1> O melhor da comida caseira e italiana na região </h1>

          <button className='btn' onClick={goProfile}>
            <a> Peça já pelo </a>
            <img src={Ifood} className="ifood-logo"></img>
            <img src={IfoodRed} className="ifood-logo-red"></img>
          </button>
      </section>

      <section id='About'>
        <a id="scroll"></a>
        <h1>  Quem somos: </h1>
        <p> Delivery de comida caseira feito com muito amor e carinho pela nossa equipe de ótimos profissionais </p>
        <p> Funcionamento das: 19:00 as 22:00 de Terça a Domingo </p>
        <p> Prove já uma de nossas delicias </p>
      </section>
    </>
  )
}
