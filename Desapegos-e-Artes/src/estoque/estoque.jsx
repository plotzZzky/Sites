import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSun, faSnowflake, faRing, faSocks, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import Card from '../elements/Card'
import productsJson from './products';
import Modal from '../elements/Modal'
import './estoque.css'


export default function Inventory() {
  const [getInfo, setInfo] = useState([])
  const [getCards, setCards] = useState([])

  const Categories = [
    ['Verão', <FontAwesomeIcon icon={faSun} />], 
    ['Inverno', <FontAwesomeIcon icon={faSnowflake} />],
    ['Acessórios', <FontAwesomeIcon icon={faRing} />], 
    ['Calçados', <FontAwesomeIcon icon={faSocks} />],
    ['Outros', <FontAwesomeIcon icon={faBagShopping} />],
  ]

  const CATEGORIESCARDS = () => {
    Categories.map((data) => (
      <div className='sidebar-category' onClick={() => displayProductCardsByCategory(data[0])}>
        {data[1]}
        <a>{data[0]}</a>
      </div>
    ))
  }

  function filterProductCards(event) {
    const value = event.target.value.toLowerCase()
    const items = document.getElementsByClassName("card");
    Array.from(items).forEach(item => {
      const name = item.querySelector(".card-name").innerHTML.toLowerCase();

      if (name.includes(value)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  function displayProductCardsByCategory(data) {
    const value = data.toLowerCase()
    const items = document.getElementsByClassName("card");
    Array.from(items).forEach(item => {
      const category = item.querySelector(".card-category").innerHTML.toLowerCase();
      
      if (category.includes(value)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  function displayAllProductCard() {
    const items = document.getElementsByClassName("card");
    Array.from(items).forEach(item => {
      item.style.display = "flex"
    });
  }

  function showSidebar() {
    const sidebar = document.getElementById("sideBar")
    if (sidebar.className == "sidebar") {
      sidebar.classList.add("responsive")
    } else {
      sidebar.className = "sidebar"
    }
  }

  function showModal(data) {
    let modal = document.getElementById("Modal")
    modal.style.display = "block"
    document.body.style.position = 'fixed'
    setInfo(data)
  }

  function createProductCards() {
    setCards(
      productsJson.map((data) => (
        <Card key={data.id} data={data} show_modal={() => showModal(data)}></Card>
      ))
    )
  }

  useEffect(() => {
    createProductCards()
  }, []);

  return (
    <>
      <section id='cardsPage'>
        <div className='sidebar' id='sideBar'>
            <div className='align-categories'>

              {CATEGORIESCARDS()}

              <div className='sidebar-category' onClick={displayAllProductCard}>
                <FontAwesomeIcon icon={faBars} />
                <a>Todos</a>
              </div>
              
              <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filterProductCards}></input>
            </div>

          <div className='sidebar-icon' onClick={showSidebar}>
            <FontAwesomeIcon icon={faAngleRight} className='icon-arrow' size='' />
          </div>
        </div>

        <div className='div-cards'>
          {getCards}
        </div>
      </section>

      <Modal data={getInfo}></Modal>
    </>
  )
}