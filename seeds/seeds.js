require("dotenv/config");
require("./../db");
const Interest = require("../models/Interest.model");

const interest_json = [
  {
    name: "Museo del Prado",
    description:
      "El Museo Nacional del Prado es uno de los más importantes del mundo,así como uno de los más visitados y está considerada la institución cultural más importante de España.Rico en cuadros de maestros españoles y del resto de Europa de los siglos XV al XVIII, y españoles del XIX",
    type: "Museum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/800px-Museo_del_Prado_2016_%2825185969599%29.jpg",

    location: {
      coords: ["40.41389614172485", "-3.6921163731375537"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.museodelprado.es/",
    openingTime: "10h",
    closingTime: "20h",
  },
  {
    name: "Museo de Historia de Madrid",
    description:
      "The Museum of History of Madrid, a former Municipal Museum, is located in the Centro district of the capital of Spain, on Fuencarral Street, it was built in the 18th century by the architect Pedro de Ribera.",
    type: "Museum",
    image: "http://eldiadezamora.es/upload/images/03_2020/3268_historia.jpg",

    location: {
      coords: ["40.42596104314411", "-3.7008315022254177"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://museomadrid.com/museo-de-historia/",
    openingTime: "10h",
    closingTime: "20h",
  },

  {
    name: "Museo del Thyssen",
    description:
      "The Museo Nacional Thyssen-Bornemisza is a gallery of old and modern masters located in Madrid, it is the fifth most visited museum in Spain, ",
    type: "Museum",
    image: "https://www.lahoradigital.com/images/thumbs/MuseoThyssen.jpg-0004343.jpeg",

    location: {
      coords: ["40.41628563309572", "-3.6949146731375224"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.museothyssen.org/",
    openingTime: "10h",
    closingTime: "19h",
  },
  {
    name: "Teatro Lara",
    description:
      "The Lara theater is an old Italian-style theater built in 1879 at number 15 of the Corredera Baja de San Pablo in Madrid's Maravillas neighborhood, in the surroundings of what has been known as the Malasaña area since the last third of the 20th century. ",
    type: "Theater",
    image: "https://vramon1958.files.wordpress.com/2013/12/el-lara-5.jpg",

    location: {
      coords: ["40.422260182304775", "-3.7044775310606983"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "http://www.teatrolara.com/",
    openingTime: "12h",
    closingTime: "22h",
  },
  {
    name: "Tempo de Debod",
    description:
      "The Temple of Debod is an ancient Egyptian building currently located in the Spanish city of Madrid. It is located to the west of the Plaza de España, next to the Paseo del Pintor Rosales, on a height where the Cuartel de la Montaña was located",

    type: "Monument",
    image:
      "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/templo_deblod_1.jpg?itok=T6hBT_Fj",
    location: {
      coords: ["40.42423393412232", "-3.7178016884780956"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    openingTime: "10h",
    closingTime: "19h",
  },
  {
    name: "Puerta de Alcalá",
    description:
      "The Puerta de Alcalá is one of the five old royal gates that gave access to the city of Madrid, and is located in the center of the roundabout in Plaza de la Independencia.",
    creationDate: "January 01, 1778 ",
    type: "Monument",
    image: "https://imgs-akamai.mnstatic.com/85/93/8593f28dd7f0bca602eb336c05305cc3.jpg",
    location: {
      coords: ["40.42012266712455", "-3.6887262731374246"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    openingTime: "24h",
  },
  {
    name: "Kapital",
    type: "Disco",
    image: "https://www.limusinaspremiumadrid.com/wp-content/uploads/discoteca-kapital-madrid-3.jpg",
    price: "Expensive",
    location: {
      coords: ["40.41103860894415", "-3.6935275087847415"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://teatrokapital.com/",
    openingTime: "22h",
    closingTime: "06h",
    caracteristics: {
      musicType: "Comercial",
    },
  },
  {
    name: "Fabrik",
    type: "Disco",
    image: "https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/10/12/16340567226151.jpg",
    price: "Expensive",
    location: {
      coords: ["40.265685849600224", "-3.8405364961606714"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://https://fabrikclub.com/.com/",
    openingTime: "19:30h",
    closingTime: "06h",
    caracteristics: {
      musicType: "Tecno",
    },
  },
  {
    name: "Teatro Barceló",
    type: "Disco",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a3/Teatro_Barcel%C3%B3_%28Madrid%29_01.jpg",
    price: "Expensive",
    location: {
      coords: ["40.427202874031956", "-3.6997662752364993"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://teatrobarcelo.com/",
    openingTime: "21:00h",
    closingTime: "07h",
    caracteristics: {
      musicType: "Comercial",
    },
  },
  {
    name: "Cherokee",
    type: "Pub",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/07/ed/e2/f0/playoff-cherokee.jpg",
    price: "Normal",
    location: {
      coords: ["40.427079155819754", "-3.6957263399663134"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.facebook.com/CherokeeMadrid",
    openingTime: "22h",
    closingTime: "03h",
    caracteristics: {
      musicType: "Various",
    },
  },
  {
    name: "Riu Plaza",
    type: "Outdoor",
    image: "https://www.riu.com/en/binaris/rooftop-riu-plaza-espana-6_tcm55-221735.jpg?v=tm020221_0941",
    price: "Expensive",
    location: {
      coords: ["40.4252822039076", "-3.7104951320877095"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite:
      "https://www.riu.com/es/hotel/espana/madrid/hotel-riu-plaza-espana/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=ZES",
    openingTime: "11h",
    closingTime: "02h",
    caracteristics: {
      musicType: "Various",
    },
  },
  {
    name: "La carlota",
    type: "Restaurant",
    price: "Normal",

    location: {
      coords: ["40.42271129138648", "-3.6943453018021866"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://lacarlotamadrid.es/carta-lacarlotarestaurante/",
    openingTime: "14h",
    closingTime: "00h",
    image: "https://media-cdn.tripadvisor.com/media/photo-f/16/8b/70/39/la-carlota.jpg",
    caracteristics: {
      food: "Japonesa, Sushi",
    },
  },
  {
    name: "Taberna El pirata ",
    type: "Restaurant",
    price: "Normal",

    location: {
      coords: ["40.41494446344406", "-3.7047709748146804"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.tripadvisor.es/Restaurant_Review-g187514-d20204382-Reviews-Taberna_el_pirata_ll-Madrid.html",
    openingTime: "08h",
    closingTime: "00h",
    image: "https://media-cdn.tripadvisor.com/media/photo-f/1b/97/98/c4/hamburguesas.jpg",
    caracteristics: {
      food: "Americana, cerveza artesanal",
    },
  },
  {
    name: "Allright ",
    type: "Restaurant",
    price: "Normal",

    location: {
      coords: ["40.43771787844112", "-3.6875880387515205"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://alright.es/",
    openingTime: "08h",
    closingTime: "00h",
    image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-restaurante-allright-8-1556206301.jpg",
    caracteristics: {
      food: "Americana, opciones vegetarianas",
    },
  },
  {
    name: "DiverXO ",
    type: "Restaurant",
    price: "Expensive",

    location: {
      coords: ["40.45852234141739", "-3.6858077000000034"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://diverxo.com/",
    openingTime: "13h",
    closingTime: "00:30h",
    image: "https://imag.bonviveur.com/fotografia-del-comedor-de-diverxo.jpg",
    caracteristics: {
      food: "Gourmet",
    },
  },
  {
    name: "Taberna Malaspina ",
    type: "Bar",
    price: "Economic",

    location: {
      coords: ["40.41604360722879", "-3.7026611445553357"],
    },
    // review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.tripadvisor.es/Restaurant_Review-g187514-d1023232-Reviews-Taberna_Malaspina-Madrid.html",
    openingTime: "10h",
    closingTime: "00:30h",
    image: "https://media-cdn.tripadvisor.com/media/photo-s/19/10/23/02/photo1jpg.jpg",
    caracteristics: {
      food: "Tapas",
    },
  },
];

Interest.create(interest_json)
  .then((interests) => console.log(`Created ${interests.length} interest places!`))
  .catch((err) => console.log(err));
