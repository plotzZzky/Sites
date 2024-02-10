export default function Card(props) {

  function goProfile() {
    location.href = `https://shopee.com.br/desapegoseartesdagabi`
  }

  return (
    <div className='card' onClick={props.show_modal}>
      <img className='card-img' src={props.data.cover} loading="lazy"></img>
      <a style={{display: 'none'}} className="card-category"> {props.data.category} </a>
      <button className="order-btn" onClick={goProfile}>
        <a className='card-name'> {props.data.name} </a>
        <a className='card-price'> R$ {props.data.price} </a> </button>
    </div>

  )
}