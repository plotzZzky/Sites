import { useState, useEffect } from 'react';
import Card from '../elements/Card'
import './menu.css'
import menuJson from "./foods"


export default function Menu() {
  const [getCards, setCards] = useState([]);
  const CATEGORIES = ['Brasileira', 'Italiana', 'Panquecas', 'Strogonoffs', 'Salgados', 'Congelados', 'Bebidas']

  const CATEGORIESCARD = () => {
    CATEGORIES.map((data) => (
      <a className='sidebar-category' onClick={() => setCategory(data)}> {data} </a>
    ))
  }

  function filterFood() {
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

  function setCategory(value) {
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

  function setAll() {
    let items = document.getElementsByClassName("card-margin")
    for (let item of items) {
      item.style.display = "flex";
    }
  }

  function createFoodCards() {
    setCards(menuJson.map((data) => (
      <Card key={data.id} data={data} ></Card>))
    )
  }

  useEffect(() => {
    createFoodCards()
  }, [])

  return (
    <>
      <div className="page" id='Menu'>
        <div className='sidebar' id='sideBar'>
          <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filterFood}></input>
          <div className='sidebar-align-items'>
            {CATEGORIESCARD}
            <a className='sidebar-category' onClick={setAll}> Todos </a>
          </div>
        </div>

        <div className='div-cards'>
          {getCards}
        </div>
      </div>
    </>
  )
}