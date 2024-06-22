import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowflake } from '@fortawesome/free-solid-svg-icons'

export default function Card(props) {

  function goProfile() {
    location.href = `https://www.ifood.com.br/delivery/esteio-rs/senhor-das-massas-centro/4961bfb0-1a4f-46bb-a442-7811498ef1af`
  }

  return (
    <div className='card-margin'>
      <div className='card' onClick={props.showModal}>
        <FontAwesomeIcon icon={faSnowflake} style={{ display: props.data.snow }} className='snow-icon' />
        <img className='card-img' src={props.data.image} loading='lazy'></img>

        <div className='card-text'>
          <span className='card-name'> {props.data.name} </span>
          <span className='card-desc'> {props.data.desc} </span>

          <button className="order-btn" onClick={goProfile}>
            <span className='card-price'> R$ {props.data.price} </span>
          </button>

          <span className="card-category"> {props.data.category} </span>
        </div>
        
      </div>
    </div>

  )
}