import Card from '@comps/Card'
import './menu.css'
import menuJson from "./foods"

export default function Menu() {
  const CATEGORIES = ['Brasileira', 'Italiana', 'Panquecas', 'Strogonoffs', 'Salgados', 'Congelados', 'Bebidas']

  // Categorias da sidebar
  const CATEGORIESCARDS = () => {
    return (
      <div className='sidebar-align-items'>
        {CATEGORIES.map((data, index) => (
          <a className='sidebar-category' key={index} onClick={() => setCategory(data)}> {data} </a>
        ))}
        <a className='sidebar-category' onClick={showAllCards}> Todos </a>
      </div>
    )
  }

  // Cards dos pratos
  const FOODCARDS = () => {
    return(
      <div className='cards'>
        {menuJson.map((data, index) => (
          <Card key={index} data={data} ></Card>))
        }
      </div>
    )
  }

  function filterFood() {
    const value = document.getElementById("FilterInput").value.toLowerCase();
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

  function setCategory(value) {
    let items = document.getElementsByClassName("card-margin")
    Array.from(items).forEach(item => {
      const name = item.querySelector(".card-category").innerHTML;

      if (name.indexOf(value) > -1) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }

  function showAllCards() {
    let items = document.getElementsByClassName("card-margin")
    for (let item of items) {
      item.style.display = "block";
    }
  }

  return (
    <section id='Menu'>
      <div className='sidebar' id='sideBar'>
        <input type='Text' placeholder='Buscar' className='sidebar-filter' id='FilterInput' onChange={filterFood}></input>
        {CATEGORIESCARDS()}
      </div>

      {FOODCARDS()}
    </section>
  )
}