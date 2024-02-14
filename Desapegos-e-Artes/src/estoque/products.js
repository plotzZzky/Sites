import camisa_preta_b from "../assets/clothes/camisa_preta_b.jpg"
import camisa_preta from "../assets/clothes/camisa_preta.jpg"

import camisa_xadrez from "../assets/clothes/camisa_xadrez.jpg"
import camisa_xadrez_b from "../assets/clothes/camisa_xadrez_b.jpg"
import camisa_xadrez_c from "../assets/clothes/camisa_xadrez_c.jpg"

import casaco_jeans_a from "../assets/clothes/casaco_jeans_a.jpg"
import casaco_jeans_b from "../assets/clothes/casaco_jeans_b.jpg"
import casaco_jeans_c from "../assets/clothes/casaco_jeans_c.jpg"

import casaco_marron_a from "../assets/clothes/casaco_marron_a.jpg"
import casaco_marron_b from "../assets/clothes/casaco_marron_b.jpg"
import casaco_marron_c from "../assets/clothes/casaco_marron_c.jpg"

import luva_roxa from "../assets/clothes/luva_roxa.jpg"

import short_azul_a from "../assets/clothes/short_azul_a.jpg"
import short_azul_b from "../assets/clothes/short_azul_b.jpg"
import short_azul_c from "../assets/clothes/short_azul_c.jpg"

import sobretudo from "../assets/clothes/sobretudo.jpg"
import sobretudo_b from "../assets/clothes/sobretudo_b.jpg"
import sobretudo_c from "../assets/clothes/sobretudo_c.jpg"

import sueter_azul_a from "../assets/clothes/sueter_azul_a.jpg"
import sueter_azul_b from "../assets/clothes/sueter_azul_b.jpg"
import sueter_azul_c from "../assets/clothes/sueter_azul_c.jpg"

import touca_cetim_a from "../assets/clothes/touca_cetim_a.jpg"
import touca_cetim_b from "../assets/clothes/touca_cetim_b.jpg"


const estoqueJson = [
  {
    "id": 0, "name": "Luva roxa", "category": "Inverno", "price": "7,00", "cover": luva_roxa, "images": [],
    "desc": "Pra você que procura por um acessório de inverno elegante e aconchegante Temos luvas femininas roxas, peludinhas em nosso brechó, que vão manter suas mãos quentinhas durante toda a temporada de frio. Com um toque suave e macio, essas luvas vão te envolver em uma sensação de conforto e bem-estar enquanto você se mantém quente. Então, escolha essas luvas femininas de inverno em nosso brechó e sinta-se elegante e confortável"
  },
  {
    "id": 1, "name": "Casaco marron", "category": "Inverno", "price": "40,00", "cover": casaco_marron_a, "images": [casaco_marron_b, casaco_marron_c],
    "desc": "Este lindo casaco marrom é perfeito para quem procura uma peça de inverno elegante e sofisticada. Com seu tecido macio e quente, ele é a escolha ideal para te manter aquecido nos dias frios. Além disso, sua cor marrom clássica e versátil combina com uma variedade de estilos e looks, desde o casual ao mais formal. Comprar um casaco em nosso brechó é uma ótima escolha, pois você estará fazendo uma compra sustentável e consciente, dando uma nova vida a uma peça de qualidade que ainda tem muito a oferecer."
  },
  {
    "id": 2, "name": "Short azul", "category": "Verão", "price": "10,00", "cover": short_azul_a, "images": [short_azul_b, short_azul_c],
    "desc": "Este short azul casual é perfeito para quem procura uma peça confortável e descolada para usar em dias quentes. Com seu tecido leve e fresco, ele é a escolha ideal para te manter confortável e estiloso nos dias de verão. Além disso, sua cor azul vibrante adiciona um toque de cor e alegria ao seu guarda-roupa. Este short é perfeito para combinar com camisetas básicas, blusas cropped ou regatas soltinhas para um look despojado e confortável. Então, escolha este short azul em nosso brechó e sinta-se fresco, confortável e com muito estilo."
  },
  {
    "id": 3, "name": "Sueter azul", "category": "Inverno", "price": "40,00", "cover": sueter_azul_a, "images": [sueter_azul_b, sueter_azul_c],
    "desc": "Este suéter azul de lã é a peça perfeita para quem busca um look elegante e quentinho para o inverno. Com sua textura macia e aconchegante, ele é perfeito para te manter aquecido nos dias frios. Além disso, sua cor azul clássica e versátil combina com diversos estilos e ocasiões, desde um look casual até um look mais formal. Este suéter é perfeito para combinar com calças jeans, saias midi ou vestidos, para um visual elegante e sofisticado. Então, escolha este suéter azul de lã em nosso brechó e sinta-se elegante, quentinho e estiloso"
  },
  {
    "id": 4, "name": "Touca de cetim", "category": "Outros", "price": "5,00", "cover": touca_cetim_a, "images": [touca_cetim_b],
    "desc": "Esta touca de cetim é perfeita para quem deseja manter os cabelos saudáveis e sem frizz. Com sua textura suave e macia, ela protege o cabelo durante o sono, evitando o atrito com o travesseiro que pode causar danos e deixá-lo arrepiado. Além disso, sua cor vibrante e estilo moderno adicionam um toque de estilo ao seu visual de dormir. Esta touca é perfeita para quem busca manter a beleza dos cabelos, sem abrir mão do conforto e estilo. Então, escolha esta touca de cetim anti-frizz em nosso brechó e tenha um sono tranquilo, sem se preocupar com seus cabelos."
  },
  {
    "id": 5, "name": "Camisa preta", "category": "Verão", "price": "40,00", "cover": camisa_preta, "images": [camisa_preta_b],
    "desc": "Esta camisa preta é perfeita para quem busca um visual elegante e atemporal. Com seu tecido leve e confortável, ela pode ser usada tanto em eventos formais quanto em ocasiões mais casuais. Além disso, sua cor escura proporciona um aspecto sofisticado e combina com diversas outras cores e estilos. Escolha esta camisa preta em nosso brechó e tenha um visual elegante e versátil em qualquer situação."
  },
  {
    "id": 6, "name": "Camisa xadrez", "category": "Verão", "price": "40,00", "cover": camisa_xadrez, "images": [camisa_xadrez_b, camisa_xadrez_c],
    "desc": "Esta camisa xadrez é perfeita para quem busca um estilo mais casual e descontraído. Com seu padrão clássico e atemporal, ela pode ser usada em diversas ocasiões, desde um passeio no parque até uma tarde com amigos. Além disso, seu tecido leve e confortável garante um look descontraído e confortável, sem abrir mão do estilo. Escolha esta camisa xadrez em nosso brechó e tenha um visual descolado e moderno para o seu dia a dia."
  },
  {
    "id": 7, "name": "Sobretudo", "category": "Inverno", "price": "80,00", "cover": sobretudo, "images": [sobretudo_b, sobretudo_c],
    "desc": "Este sobretudo é a escolha perfeita para quem busca um visual elegante e sofisticado. Com seu corte clássico e atemporal, ele é ideal para ocasiões formais e eventos especiais. Além disso, seu tecido de alta qualidade garante um toque suave e confortável, mantendo-o aquecido nos dias mais frios. Sua cor sóbria e elegante combina com diversos estilos e cores, tornando-se uma peça versátil e indispensável em qualquer guarda-roupa. Adquira este sobretudo em nosso brechó e tenha um visual sofisticado e atemporal para as suas ocasiões especiais."
  },
  {
    "id": 7, "name": "Casaco jeans", "category": "Inverno", "price": "60,00", "cover": casaco_jeans_a, "images": [casaco_jeans_b, casaco_jeans_c],
    "desc": "Esta jaqueta jeans é perfeita para um visual casual e elegante. Com um design clássico e atemporal, oferece conforto e estilo para diversas ocasiões. O denim de alta qualidade proporciona toque suave, enquanto sua tonalidade versátil permite combinações fáceis. Adquira essa peça única para um visual descontraído com um toque de moda atemporal."
  },
]

export default estoqueJson;