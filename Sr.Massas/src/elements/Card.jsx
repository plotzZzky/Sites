import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

  function goProfile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

  return (
    <div className='card-margin'>
      <div className='card'>

        <FontAwesomeIcon icon={faSnowflake} style={{ display: props.data.snow }} className='snow-icon' />
        <img className='card-img' src={props.data.image} loading='lazy'></img>

        <div className='div-align-card-text'>
          <a className="card-category" style={{ display: 'none' }}> {props.data.category} </a>

          <button className="order-btn" onClick={goProfile}>
            <a className='card-name'> {props.data.name} </a>
            <a className='card-price'> R$ {props.data.price} </a>
          </button>

          <div className="card-desc">
            <p>{props.data.desc}</p>
            <a> {props.data.amount}</a>
          </div>

        </div>
        
      </div>
    </div>

  )
}