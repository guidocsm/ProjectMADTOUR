require("dotenv/config");
require("./../db");
const Art = require("../models/Art.model");
const Ent = require("../models/Ent.model")
const Gastronomy = require("../models/Gastronomy.model")


const art_json = [
  {
    name: "Museo del Prado",
    description:
      "El Museo Nacional del Prado es uno de los más importantes del mundo,así como uno de los más visitados y está considerada la institución cultural más importante de España.Rico en cuadros de maestros españoles y del resto de Europa de los siglos XV al XVIII, y españoles del XIX",
    creationDate: "November 19, 1819 ",
    type: "Museum",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/800px-Museo_del_Prado_2016_%2825185969599%29.jpg",
    owner: "Miguel Falomir",
    location: {
      coords: ["40.41389614172485", "-3.6921163731375537"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.museodelprado.es/",
    openingTime: "10h",
    closingTime: "20h",
  },
  {
    name: "Museo del Thyssen",
    description:
      "El Museo Nacional Thyssen-Bornemisza es una pinacoteca de maestros antiguos y modernos ubicada en Madrid,es el quinto museo más visitado en España, ",
    creationDate: "January 01, 1992 ",
    type: "Museum",
    image: "https://www.lahoradigital.com/images/thumbs/MuseoThyssen.jpg-0004343.jpeg",
    owner: "Guillermo Solana",
    location: {
      coords: ["40.41628563309572", "-3.6949146731375224"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    webSite: "https://www.museothyssen.org/",
    openingTime: "10h",
    closingTime: "19h",
  },
  {
    name: "Tempo de Debod",
    description:
      "El Templo de Debod es un edificio del antiguo Egipto localizado actualmente en la ciudad española de Madrid. Está situado al oeste de la plaza de España, junto al paseo del Pintor Rosales, en un alto donde se encontraba el Cuartel de la Montaña ",
    creationDate: "January 01, 1992 ",
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
      "La puerta de Alcalá es una de las cinco antiguas puertas reales que daban acceso a la ciudad de Madrid.​Se encuentra situada en el centro de la rotonda de la Plaza de la Independencia.",
    creationDate: "January 01, 1778 ",
    type: "Monument",
    image: "https://imgs-akamai.mnstatic.com/85/93/8593f28dd7f0bca602eb336c05305cc3.jpg",
    location: {
      coords: ["40.42012266712455", -"3.6887262731374246"],
    },
    //review: { type: Schema.Types.ObjectId, ref: "Review" },
    openingTime: "24h",
  },
];
Art.create(art_json)
  .then((arts) => console.log(`Created ${arts.length} arts places!`))
  .catch((err) => console.log(err));

const ent_json = [
    {
        name: "Kapital",
        type: "Disco",
        musicType: "Shuffle",
        price: "Expensive",
        location: {
          coords: ["40.41103860894415", "-3.6935275087847415"],
        },
        // review: { type: Schema.Types.ObjectId, ref: "Review" },
        webSite: "https://teatrokapital.com/",
        openingTime: "22h",
        closingTime: "06h"
      },
    {
        name: "Fabrik",
        type: "Disco",
        musicType: "Shuffle",
        price: "Expensive",
        location: {
          coords: ["40.265685849600224", "-3.8405364961606714"],
        },
        // review: { type: Schema.Types.ObjectId, ref: "Review" },
        webSite: "https://https://fabrikclub.com/.com/",
        openingTime: "19:30h",
        closingTime: "06h"
      },
      {
        name: "Cherokee",
        type: "Pub",
        musicType: "Shuffle",
        price: "Normal",
        location: {
          coords: ["40.427079155819754", "-3.6957263399663134"],
        },
        // review: { type: Schema.Types.ObjectId, ref: "Review" },
        webSite: "https://www.facebook.com/CherokeeMadrid",
        openingTime: "22h",
        closingTime: "03h"
      },
      {
        name: "Riu Plaza",
        type: "Outdoor",
        musicType: "Shuffle",
        price: "Expensive",
        location: {
          coords: ["40.4252822039076", "-3.7104951320877095"],
        },
        // review: { type: Schema.Types.ObjectId, ref: "Review" },
        webSite: "https://www.riu.com/es/hotel/espana/madrid/hotel-riu-plaza-espana/?utm_source=google&utm_medium=organic&utm_campaign=my_business&utm_content=ZES",
        openingTime: "11h",
        closingTime: "02h"
      },
];
Ent.create(ent_json)
  .then((ents) => console.log(`Created ${ents.length} entertainment places!`))
  .catch((err) => console.log(err));

  const gastronomy_json = [
    {
      name: "La carlota",
      type: "Restaurant",
      price: "Normal",
      food: "Japonesa, Sushi",
      location: {
        coordinates: ["40.42271129138648", "-3.6943453018021866"],
      },
      // review: { type: Schema.Types.ObjectId, ref: "Review" },
      webSite: "https://lacarlotamadrid.es/carta-lacarlotarestaurante/",
      openingTime: "14h",
      closingTime: "00h",
      image: "https://media-cdn.tripadvisor.com/media/photo-f/16/8b/70/39/la-carlota.jpg",
    },
    {
      name: "Taberna El pirata ",
      type: "Restaurant",
      price: "Normal",
      food: "Americana, cerveza artesanal",
      location: {
        coordinates: ["40.41494446344406", "-3.7047709748146804"],
      },
      // review: { type: Schema.Types.ObjectId, ref: "Review" },
      webSite: "https://www.tripadvisor.es/Restaurant_Review-g187514-d20204382-Reviews-Taberna_el_pirata_ll-Madrid.html",
      openingTime: "08h",
      closingTime: "00h",
      image: "https://media-cdn.tripadvisor.com/media/photo-f/1b/97/98/c4/hamburguesas.jpg",
    },
    {
      name: "Allright ",
      type: "Restaurant",
      price: "Normal",
      food: "Americana, opciones vegetarianas",
      location: {
        coordinates: ["40.43771787844112", "-3.6875880387515205"],
      },
      // review: { type: Schema.Types.ObjectId, ref: "Review" },
      webSite: "https://alright.es/",
      openingTime: "08h",
      closingTime: "00h",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-restaurante-allright-8-1556206301.jpg",
    },
    {
      name: "DiverXO ",
      type: "Restaurant",
      price: "Expensive",
      food: "Gourmet",
      location: {
        coordinates: ["40.45852234141739", "-3.6858077000000034"],
      },
      // review: { type: Schema.Types.ObjectId, ref: "Review" },
      webSite: "https://diverxo.com/",
      openingTime: "13h",
      closingTime: "00:30h",
      image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-restaurante-allright-8-1556206301.jpg",
    },
  ];
  Gastronomy.create(gastronomy_json)
    .then((gasts) => console.log(`Created ${gasts.length} gastronomy places!`))
    .catch((err) => console.log(err));