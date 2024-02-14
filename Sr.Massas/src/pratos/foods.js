/* importa all imagens */
import Agua from '../assets/Agua.webp'
import AguaGas from '../assets/Agua_gas.webp'
import Batata from '../assets/Batata_recheada.jpg'
import Enrolado from '../assets/Enrolado.jpg'
import Lasanha from '../assets/Lasanha.jpg'
import Nhoque from '../assets/Nhoque.jpg'
import Panela from '../assets/Panela.jpg'
import Panquecas from '../assets/Panquecas.webp'
import Pastel from '../assets/Pastel.jpg'


const menuJson = [
    {
      "id": 0,
      "name": "Lasanha de Macarrão",
      "category": "Italiana",
      "desc": "Deliciosa lasanha de macarrão caseira diversos sabores disponiveis",
      "price": "22.00",
      "amount": "Serve: 1 pessoa",
      "image": Lasanha,
      "snow": "none"
    },
    {
      "id": 1,
      "name": "Panquecas",
      "category": "Panquecas",
      "desc": "Deliciosas Panquecas com molho e queijo, disponivel em diversos sabores",
      "price": "22.00",
      "amount": "Server: 1 pessoa",
      "image": Panquecas,
      "snow": "none"
    },
    {
      "id": 2,
      "name": "Pastel",
      "category": "Salgados",
      "desc": "Patel de massa amanteiga muito crocante com diversas opções de recheios",
      "price": "7.00",
      "amount": "1 Unidade",
      "image": Pastel,
      "snow": "none"
    },
    {
      "id": 3,
      "name": "Batata recheada",
      "category": "Brasileira",
      "desc": "Batata recheada com queijo, acompanha arroz",
      "price": "22.00",
      "amount": "Serve: 1 pessoa",
      "image": Batata,
      "snow": "none"
    },
    {
      "id": 4,
      "name": "Nhoque",
      "category": "Italiana",
      "desc": "Nhoque de mandioca e molho de carne vermelha, acompanha arroz",
      "price": "22.00",
      "amount": "Serve: 1 pessoa",
      "image": Nhoque,
      "snow": "none"
    },
    {
      "id": 5,
      "name": "Carne de panela",
      "category": "Brasileira",
      "desc": "Carne de panela macia e cremosa com molho e batatas, acompanha arroz",
      "price": "22.00",
      "amount": "Serve: 1 pessoa",
      "image": Panela,
      "snow": "none"
    },
    {
      "id": 6,
      "name": "Água mineral sem gas",
      "category": "Bebidas",
      "desc": "Água mineral sem gás 600ml",
      "price": "4.00",
      "amount": "600ml",
      "image": Agua,
      "snow": "block"
    },
    {
      "id": 7,
      "name": "Água mineral com gas",
      "category": "Bebidas",
      "desc": "Água mineral com gás 600ml",
      "price": "4.00",
      "amount": "600ml",
      "image": AguaGas,
      "snow": "block"
    },
    {
      "id": 8,
      "name": "Lasanha de Macarrão",
      "category": "Congelados",
      "desc": "Deliciosa lasanha de macarrão caseira diversos sabores disponiveis",
      "price": "18.00",
      "amount": "Serve: 1 pessoa",
      "image": Lasanha,
      "snow": "block"
    },
    {
      "id": 9,
      "name": "Panquecas ",
      "category": "Congelados",
      "desc": "Deliciosas Panquecas com molho e queijo, disponivel em diversos sabores",
      "price": "18.00",
      "amount": "Serve: 1 pessoa",
      "image": Panquecas,
      "snow": "block"
    },
    {
      "id": 10,
      "name": "Batata recheada",
      "category": "Congelados",
      "desc": "Batata recheada com queijo, acompanha arroz",
      "price": "20.00",
      "amount": "Serve: 1 pessoa",
      "image": Batata,
      "snow": "block"
    },
    {
      "id": 11,
      "name": "Nhoque",
      "category": "Congelados",
      "desc": "Nhoque de mandioca e molho de carne vermelha, acompanha arroz",
      "price": "20.00",
      "amount": "Serve: 1 pessoa",
      "image": Nhoque,
      "snow": "block"
    },
    {
      "id": 12,
      "name": "Carne de panela",
      "category": "Congelados",
      "desc": "Carne de panela macia e cremosa com molho e batatas, acompanha arroz",
      "price": "20.00",
      "amount": "Serve: 1 pessoa",
      "image": Panela,
      "snow": "block"
    },
    {
      "id": 13,
      "name": "Enrolados",
      "category": "Salgados",
      "desc": "Salgado enrolado muito macio com diversas opções de recheios",
      "price": "7.00",
      "amount": "1 Unidade",
      "image": Enrolado,
      "snow": "none"
    }
  ]

  export default menuJson;