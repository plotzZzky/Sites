import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faSnowflake } from '@fortawesome/free-solid-svg-icons'
import NavBar from "../elements/navbar"
import Card from '../elements/Card'
import './menu.css'
import data from "../media/cardapio.json"


export default function Menu() {
  const [getCategory, setCategory] = useState("");
  const [getFood, setFood] = useState(data.food);
  const [getCards, setCards] = useState([]);
  const Categories = ['Brasileira', 'Italiana', 'Panquecas', 'Strogonoffs', 'Salgados', 'Congelados', 'Bebidas']

  function filter_food() {
    const value = document.getElementById("FilterInput").value.toLowerCase();
    const items = document.getElementsByClassName("card-margin");
    Array.from(items).forEach(item => {
      const name = item.querySelector(".card-name").innerHTML.toLowerCase();

      if (name.includes(value)) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }


  function set_category(value) {
    let items = document.getElementsByClassName("card-margin")
    Array.from(items).forEach(item => {
      const name = item.querySelector(".card-category").innerHTML;

      if (name.indexOf(value) > -1) {
        item.style.display = "flex";
      } else {
        item.style.display = "none";
      }
    });
  }

  function set_all() {
    let items = document.getElementsByClassName("card-margin")
    for (let item of items) {
      item.style.display = "flex";
    }
  }

  function create_food_cards() {
    setCards(getFood.map((data) => (
      <Card key={data.id} data={data} ></Card>))
    )
  }

  useEffect(() => {
    create_food_cards()
  }, [])

  return (
    <>
      <NavBar></NavBar>

      <div className="page" id='Menu'>
        <div className='sidebar' id='sideBar'>
        <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filter_food}></input>
          <div className='sidebar-align-items'>
            {Categories.map((data) => (
              <a className='sidebar-category' onClick={() => set_category(data)}> {data} </a>
            ))}
            <a className='sidebar-category' onClick={set_all}> Todos </a>
          </div>
        </div>

        <div className='div-cards'>
          {getCards}
        </div>
      </div>
    </>
  )
}