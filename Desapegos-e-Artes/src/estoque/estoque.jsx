import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSun, faSnowflake, faRing, faSocks, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'
import productsJson from './products';
import Modal from '../components/Modal'
import './estoque.css'


export default function Estoque() {
  const [getInfo, setInfo] = useState([])

  const Categories = [
    {"name": 'Verão', "icon": <FontAwesomeIcon icon={faSun} />}, 
    {"name": 'Inverno', "icon": <FontAwesomeIcon icon={faSnowflake} />},
    {"name": 'Acessórios', "icon": <FontAwesomeIcon icon={faRing} />}, 
    {"name": 'Calçados', "icon": <FontAwesomeIcon icon={faSocks} />},
    {"name": 'Outros', "icon": <FontAwesomeIcon icon={faBagShopping} />},
  ]

  const CATEGORIESCARDS = () => {
    return(
      <div className='align-categories'>
        {Categories.map((data, index) => (
          <div className='category' key={index} onClick={() => displayProductCardsByCategory(data.name)}>
            {data.icon}
            <a> {data.name} </a>
          </div>
          ))
        }

        <div className='category' onClick={displayAllProductCard}>
          <FontAwesomeIcon icon={faBars} />
          <a> Todos </a>
        </div>
      </div>
    )
  }

  function filterProductCards(event) {
    const value = event.target.value.toLowerCase()
    const items = document.getElementsByClassName("card-margin");
    Array.from(items).forEach(item => {
      const name = item.querySelector(".card-name").innerHTML.toLowerCase();

      if (name.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function displayProductCardsByCategory(data) {
    const value = data.toLowerCase()
    const items = document.getElementsByClassName("card-margin");
    Array.from(items).forEach(item => {
      const category = item.querySelector(".card-category").innerHTML.toLowerCase();
      
      if (category.includes(value)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function displayAllProductCard() {
    const items = document.getElementsByClassName("card-margin");
    Array.from(items).forEach(item => {
      item.style.display = "block"
    });
  }

  function showModal(data) {
    let modal = document.getElementById("Modal")
    modal.style.display = "block"
    document.body.style.position = 'fixed'
    setInfo(data)
  }

  const PRODUCTS = () => {
    return (
      <div className='div-cards'>
      {productsJson.map((data, index) => (
          <Card key={index} data={data} show_modal={() => showModal(data)}></Card>
      ))}
    </div>
    )
  }

  return (
    <>
      <section id='cardsPage'>
        <div className='sidebar' id='sideBar'>
            <div className='align-sidebar'>

                {CATEGORIESCARDS()}
      
              <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filterProductCards}></input>
            </div>
        </div>

        {PRODUCTS()}
      </section>

      <Modal data={getInfo}></Modal>
    </>
  )
}