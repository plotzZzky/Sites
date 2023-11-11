import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSun, faSnowflake, faRing, faSocks, faBagShopping, faBars } from '@fortawesome/free-solid-svg-icons'
import NavBar from "../elements/navbar"
import Card from '../elements/Card'
import './inventory.css'
import data from "../media/produtos.json"
import Modal from '../elements/Modal';


export default function Inventory() {
  const [getCategory, setCategory] = useState("");
  const [getList, setList] = useState(data.items);
  const [getInfo, setInfo] = useState([])
  const [getCards, setCards] = useState([])

  const Categories = [['Verão', <FontAwesomeIcon icon={faSun} />], ['Inverno', <FontAwesomeIcon icon={faSnowflake} />],
  ['Acessórios', <FontAwesomeIcon icon={faRing} />], ['Calçados', <FontAwesomeIcon icon={faSocks} />],
  ['Outros', <FontAwesomeIcon icon={faBagShopping} />]]

  function filter_product_cards(event) {
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

  function display_product_cards_by_category(data) {
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

  function display_all_product_card() {
    const items = document.getElementsByClassName("card");
    Array.from(items).forEach(item => {
      item.style.display = "flex"
    });
  }

  function show_sidebar() {
    const sidebar = document.getElementById("sideBar")
    if (sidebar.className == "sidebar") {
      sidebar.classList.add("responsive")
    } else {
      sidebar.className = "sidebar"
    }
  }

  function show_modal(data) {
    let modal = document.getElementById("Modal")
    modal.style.display = "block"
    document.body.style.position = 'fixed'
    setInfo(data)
  }

  function create_product_cards() {
    setCards(
      getList.map((data) => (
        <Card key={data.id} data={data} show_modal={() => show_modal(data)}></Card>
      ))
    )
  }

  useEffect(() => {
    create_product_cards()
  }, []);


  return (
    <>
      <div className="page" id='cardsPage'>
        <NavBar></NavBar>
        <div className='sidebar' id='sideBar'>
            <div className='align-categories'>
              {Categories.map((data) => (
                <div className='sidebar-category' onClick={() => display_product_cards_by_category(data[0])}>
                  {data[1]}
                  <a>{data[0]}</a>
                </div>
              ))}
                <div className='sidebar-category' onClick={display_all_product_card}>
                  <FontAwesomeIcon icon={faBars} />
                  <a>Todos</a>
                </div>
                <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filter_product_cards}></input>
            </div>
          <div className='sidebar-icon' onClick={show_sidebar}>
            <FontAwesomeIcon icon={faAngleRight} className='icon-arrow' size='' />
          </div>
        </div>

        <div className='div-cards'>
          {getCards}
        </div>
        <Modal data={getInfo}></Modal>
      </div>
    </>
  )
}