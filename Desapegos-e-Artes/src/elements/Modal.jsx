import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default function Modal(props) {
  const [getNumber, setNumber] = useState(0);

  const images = props.data.images ? props.data.images.map((url) => (
    <img className="modal-img" src={url} style={{ display: 'none' }}></img>
  )) : null

  function goProfile() {
    location.href = `https://shopee.com.br/desapegoseartesdagabi`
  }

  function checkModal() {
    let modal = document.getElementById("Modal");
    modal.click(
      closeModal(modal)
    );
  }

  function closeModal(modal) {
    modal.style.display = 'none'
    document.body.style.position = ''
  }

  function showNextImage() {
    let images = document.getElementsByClassName('modal-img')
    let n = images.length <= getNumber + 1 ? 0 : getNumber + 1
    showImage(images, n)
  }

  function showPreviousImage() {
    let images = document.getElementsByClassName('modal-img')
    let n = getNumber == 0 ? images.length - 1 : getNumber - 1
    showImage(images, n)

  }

  function showImage(images, n) {
    let i;
    for (i = 0; i < images.length; i++) {
      images[i].style.display = 'none'
    }
    images[n].style.display = 'block'
    setNumber(n)
  }

  function showCover() {
    let images = document.getElementsByClassName('modal-img')
    showImage(images, 0)
  }

  useEffect(() => {
    showCover()
  }, [props.data.images])

  return (
    <div className="modal-background" id="Modal" onClick={checkModal}>
      <div className='modal-card' onClick={e => e.stopPropagation()}>
        <div className="modal-list-images">
          <img className='modal-img' src={props.data.cover}></img>
          {images}
          <button className="modal-btn-minus" onClick={showPreviousImage}> <FontAwesomeIcon icon={faChevronLeft} /> </button>
          <button className="modal-btn-plus" onClick={showNextImage}> <FontAwesomeIcon icon={faChevronRight} /> </button>
        </div>
        <div className="modal-infos">
          <div className="align-price">
            <a className='modal-name'> {props.data.name} </a>
            <a className='modal-price'> R$ {props.data.price} </a>
          </div>
          <p className="card-desc"> {props.data.desc}</p>
          <button className="order-btn" onClick={goProfile}> Visualizar na loja! </button>
        </div>
      </div>
    </div>
  )
}