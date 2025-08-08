// Tipos de productos
export type suggest = {
  id: number,
  name: string,
  price: number,
  image: string,
}

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[]
  description: string,
  tag: string[],
  associations: suggest[],
  category?: string,
};


export const db: Record<string, Product[]> = {
  sofa: [
    {
      id: 1,
      name: "Zultan",
      price: 0,
      description: "El mueble está diseñado con una estructura de zaman, con dimensiones de 240 m x 240 m. Incorpora un revestimiento de goma de 4 pulgadas, garantizando resistencia y comodidad.",
      image: "sofa_zultan_3.jpg",
      images: [
        "sofa_zultan_3.jpg",
        "zultan_1.PNG",
        "zultan_4.PNG",
        "zultan_5.PNG",
        "zultan_6.PNG",
        // "zultan_7.PNG",
      ],
      associations: [

      ],
      tag: [
        "5 Puestos",
        "3 Piezas",
        'Goma 4"',
        "Cincha 5cm",
      ]
    },
    {
        id: 2,
        name: "Mueble L",
        price: 0,
        description: "El Mueble L cuenta con una estructura robusta de zaman y un diseño conpacto. Su dimensiones de 160m x 200m garantizan confort y ahorro de espacio, resistencia y estabilidad. Además, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
        image: "sofa_mueblel2.jpg",
        images: [
          "sofa_mueblel2.jpg",
          "sofa_muebleL_2.PNG"
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "3 Piezas",
          'Goma 4"',
          "Cincha 5cm",
        ]
    },
      {
        id: 3,
        name: "Juego Suiza",
        price: 0,
        description: "El juego Suiza está compuesto por dos piezas con una estructura de zaman y un diseño tradicional, con capacidad para cinco puestos. La primera pieza tiene una longitud de 150 cm y ofrece dos puestos, mientras que la segunda mide 210 cm, proporcionando un espacio amplio y confortable.",
        image: "sofa_juego_suiza.PNG",
        images: [
          "sofa_juego_suiza.PNG",
          "sofa_juego_zuisa2.jpg"
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "2 Piezas",
          'Goma 4"',
          "Cincha 5cm",
        ]
    },
    {
      id: 4,
      name: "Roma",
      price: 0,
      description: `El mueble Roma posee una estructura robusta de zaman. Su dimensión de 250 cm x 310 cm garantizan confort, resistencia y estabilidad. Como complemento, incluye detalles de lujo como portavasos y mecanismos reclinables para mayor comodidad.`,
      image: "sofa_roma.PNG",
      images: [
          "sofa_roma.PNG",
          "sofa_roma_2.PNG",
          "sofa_roma_3.PNG",
          "mueble_roma (1).jpg",
          "mueble_roma (2).jpg",
          "mueble_roma (3).jpg",
          "sofa_roma7.JPG"
        ],
        associations: [

        ],
        tag: [
          "6 Puestos",
          "4 Piezas",
          'Goma 6"',
          "Cincha 5cm",
          "Portavasos",
          "Reclinable",
        ]
    },
    {
      id: 5,
      name: "Damasco",
      price: 0,
      description: `El mueble Maya posee una estructura robusta de zaman y con capacidad para seis puestos. Sus dimensiones de 250 cm x 310 cm garantizan confort, que optimiza la resistencia y estabilidad, ofreciendo el equilibrio ideal entre comodidad y durabilidad. Como complemento, incluye detalles de lujo como portavasos y mecanismos reclinables para mayor comodidad.`,
      image: "sofa_maya.PNG",
      images: [
          "sofa_maya.PNG"
        ],
        associations: [

        ],
        tag: [
          "6 Puestos",
          "4 Piezas",
          'Goma 6"',
          "Cincha 5cm",
        ]
    },
    {
      id: 6,
      name: "Mueble L Plus",
      price: 0,
      description: `El mueble Media Luna posee una estructura robusta de zaman, son 3 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_mueblel5p(2).jpg",
      images: [
          // "sofa_mueblel5p(1).jpg",
          "sofa_mueblel5p(2).jpg",
          "sofa_mueblel5p(3).jpg",
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "3 Piezas",
          'Goma 3.5"',
          "cincha 5cm",
        ]
    },
      {
      id: 7,
      name: "Mueble Berlin",
      price: 212,
      description: `El mueble Media Luna posee una estructura robusta de zaman, son 3 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "mueble_berlin.PNG",
      images: [
        "mueble_berlin.PNG",
        "mueble_berlin (1).jpg",
        "mueble_berlin (2).jpg",
        "mueble_berlin (3).jpg",

        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "3 Piezas",
          'Goma 3.5"',
          "cincha 5cm",
        ]
    },
    {
      id: 30,
      name: "Modern",
      price: 670,
      description: "El juego de muebles Mufada posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_modern.PNG",
      images: [
          "sofa_modern2.PNG",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id:  31,
      name: "Juego Nube",
      price: 670,
      description: "El juego de muebles Mufada posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_nube_2_review.png",
      images: [
        "sofa_nube (2).JPG",
        "sofa_nube (1).JPG",
        "sofa_nube (3).JPG",
      ],
        associations: [

        ],
        tag: []
    },
    {
      id: 8,
      name: "David",
      price: 460,
      description: `El mueble David posee una estructura robusta de zaman, son 4 piezas con capacidad para 5 puestos. Sus dimensiones de 200cm x 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_david_3.jpg",
      images: [
          "sofa_david_3.jpg",
          "sofa_david_.jpg",
          "sofa_david_2.jpg"
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "4 Piezas",
          'Goma 2.5"',
        ]
    },
    {
      id: 9,
      name: "Invierno",
      price: 730,
      description: `El mueble Invierno posee una estructura robusta de zaman, son 2 piezas con capacidad para 3 puestos. Sus dimensiones de 175cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_invierno.jpg",
      images: [
          "sofa_invierno2.jpg",
        ],
        associations: [

        ],
        tag: [
          "3 Puestos",
          "2 Piezas",
          'Goma 4"',
          "cincha 5cm"
        ]
    },
    {
      id: 10,
      name: "Charlot",
      price: 430,
      description: `El mueble Charlott posee una estructura robusta de zaman, son 2 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_charlot.jpg",
      images: [
          "sofa_charlot2.jpg",
        ],
        associations: [

        ],
        tag: [
          "3 Puestos",
          "2 Piezas",
          'Goma 2.5"',
        ]
    },
    {
      id: 11,
      name: "Media Luna",
      price: 670,
      description: `El mueble Media Luna posee una estructura robusta de zaman, son 3 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_media_luna.jpg",
      images: [
          "sofa_media_luna2.jpg",
        ],
        associations: [

        ],
        tag: [
          "3 Puestos",
          "2 Piezas",
          'Goma 3"',
          "cincha 5cm",
          "Diseño capitaneado"
        ]
    },
   {
      id: 12,
      name: "Saman Barnisado",
      price: 670,
      description: `El mueble Media Luna posee una estructura robusta de zaman, son 3 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_saman_barnisado-removebg-preview.png",
      images: [
          "sofa_saman_barnisado.JPG",
        ],
        associations: [

        ],
        tag: [
          "3 Puestos",
          "2 Piezas",
          'Goma 3"',
          "cincha 5cm",
          "Diseño capitaneado"
        ]
    },
        {
      id: 13,
      name: "Mueble Palermo",
      price: 212,
      description: `El mueble Media Luna posee una estructura robusta de zaman, son 3 piezas con capacidad para 3 puestos. Sus dimensiones de 160cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "mueble_palermo__2_-removebg-preview.png",
      images: [
        "mueble_berlin.PNG",
        "mueble_palermo (1).jpg",
        "mueble_palermo (2).jpg",
        "mueble_palermo (3).jpg",
        "mueble_palermo3.JPG"
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "3 Piezas",
          'Goma 3.5"',
          "cincha 5cm",
        ]
    },
   {
      id: 14,
      name: "Roraima S",
      price: 660,
      description: `El mueble Roraima s posee una estructura robusta de zaman y con capacidad para ocho puestos. Sus dimensiones de 250cm x 250cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad, Además, incorpora un revestimiento de goma de 4 pulgadas`,
      image: "sofa_roraima_s.jpg",
      images: [
          "sofa_roraima_s.jpg",
          "sofa_roraima_s2.jpg"
        ],
        associations: [

        ],
        tag: [
          "8 Puestos",
          "4 Piezas",
          'Goma 3"',
          "Cincha 5cm",
        ]
    },
    {
      id: 15,
      name: "Rodolfo",
      price: 690,
      description: `El mueble Rodolfo posee una estructura robusta de zaman, son 4 piezas con capacidad para 6 puestos. Sus dimensiones de 160cm x 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_rodolfo.jpg",
      images: [
          "sofa_rodolfo.jpg",
        ],
        associations: [

        ],
        tag: [
          "6 Puestos",
          "3 Piezas",
          'Goma 3.5"',
          "cincha 5cm",
        ]
    },
    {
      id: 16,
      name: "Enmaly",
      price: 320,
      description: `El mueble Enmaly posee una estructura robusta de zaman, son 3 piezas con capacidad para 5 puestos. Sus dimensiones de 190cm x 190cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_enmaly.jpg",
      images: [
          "sofa_enmaly.jpg",
          "sofa_enmaly2.jpg",
          "sofa_enmaly.JPG"
        ],
        associations: [

        ],
        tag: [
          "5 Puestos",
          "3 Piezas",
          'Goma 2.5"',
        ]
    },
    {
      id: 17,
      name: "Europa",
      price: 810,
      description: `El mueble Europa posee una estructura robusta de zaman, son 4 piezas con capacidad para 6 puestos. Sus dimensiones de 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece accesorios de lujo como portavasos y patas de lujo`,
      image: "sofa_europa.jpg",
      images: [
          "sofa_europa.jpg",
          "sofa_europa2.jpg",
          "mueble_europa (1).JPG",
          "mueble_europa (2).JPG"
        ],
        associations: [

        ],
        tag: [
          "3 puestos",
          "1 pieza",
          "porta vasos"
        ]
    },
    {
      id: 18,
      name: "Grecia",
      price: 460,
      description: `El mueble Grecia posee una estructura robusta de zaman, son 3 piezas con capacidad para 4 puestos. Sus dimensiones de 180cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_grecia.jpg",
      images: [
          "sofa_grecia.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 19,
      name: "Ali",
      price: 520,
      description: `El mueble Ali posee una estructura robusta de zaman, son 2 piezas con capacidad para 3 puestos. Sus dimensiones de 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_ali.jpg",
      images: [
          "sofa_ali.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 20,
      name: "Fenix",
      price: 450,
      description: `El mueble Fenix posee una estructura robusta de zaman, son 3 piezas con capacidad para 5 puestos. Sus dimensiones de 200cm x 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "fenix.PNG",
      images: [
        "fenix.PNG",
        "fenix_2.PNG"
      ],
      associations: [],
      tag: []
    },
    {
      id: 21,
      name: "Labros",
      price: 625,
      description: `El mueble Labros posee una estructura robusta de zaman, son 2 piezas con capacidad para 5 puestos. Sus dimensiones de 160cm x 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_labros.jpg",
      images: [
          "sofa_labros.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 22,
      name: "Richard",
      price: 460,
      description: `El mueble Richard posee una estructura robusta de zaman, son 3 piezas con capacidad para 5 puestos. Sus dimensiones de 160cm x 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad`,
      image: "sofa_richard.jpg",
      images: [
          "sofa_richard.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 23,
      name: "Audi",
      price: 590,
      description: "El mueble Audi posee una estructura robusta de zaman, son 3 piezas con capacidad para 5 puestos. Sus dimensiones de 160cm x 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_audi.jpg",
      images: [
          "sofa_audi.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 24,
      name: "Suiza",
      price: 510,
      description: "El mueble Suiza posee una estructura robusta de zaman, 1 piezas con capacidad para 3 puestos. Sus dimensiones de 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_zuisa.jpg",
      images: [
          "sofa_zuisa2.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 25,
      name: "Anasur",
      price: 440,
      description: "El mueble Anasur posee una estructura robusta de zaman, 3 piezas con capacidad para 5 puestos. Sus dimensiones de 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_anasur.jpg",
      images: [
          "sofa_anasur.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 26,
      name: "Rosa",
      price: 660,
      description: "El mueble Rosa posee una estructura robusta de zaman, 3 piezas con capacidad para 5 puestos. Sus dimensiones de 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_rosa.jpg",
      images: [
          "sofa_rosa.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 27,
      name: "Juego Principe",
      price: 450,
      description: "El juego de muebles Principe posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas individuales y una pieza de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_juego_principe.jpg",
      images: [
          "sofa_juego_principe.jpg",
          "sofa_juego_principe2.jpg"
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 28,
      name: "Juego Barco",
      price: 690,
      description: "El juego de muebles Barco posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_barco.jpg",
      images: [
          "sofa_barco.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 29,
      name: "Juego Mufada",
      price: 670,
      description: "El juego de muebles Mufada posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_juego_mufada.jpg",
      images: [
          "sofa_juego_mufada.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 32,
      name: "Sofa Cama",
      price: 470,
      description: "El Sofa Cama tiene una estructura robusta de zaman, con capacidad para 3 puestos. Este mueble tiene una gran practicidad ya que se puede transformar en una cama matrimonial que garantiza confort, resistencia y estabilidad.",
      image: "sofa_sofacama.jpg",
      images: [
          "sofa_sofacama.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 33,
      name: "Sofa Cama Con Mecanismo",
      price: 470,
      description: "El Sofa Cama tiene una estructura robusta de zaman, con capacidad para 3 puestos. Este mueble tiene una gran practicidad ya que se puede transformar en una cama matrimonial que garantiza confort, resistencia y estabilidad.",
      image: "sofa_cama_mecanismo (1).PNG",
      images: [
          "sofa_cama_mecanismo (1).PNG",
          "sofa_cama_mecanismo (2).PNG"
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 34,
      name: "Sofa Cama pequeño",
      price: 470,
      description: "El Sofa Cama 130x100 tiene una estructura robusta de zaman, con capacidad para 3 puestos. Este mueble tiene una gran practicidad ya que se puede transformar en una cama matrimonial que garantiza confort, resistencia y estabilidad.",
      image: "sofa_cama_pequeno (1).PNG",
      images: [
          "sofa_cama_pequeno (1).PNG",
          "sofa_cama_pequeno (2).PNG"
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 35,
      name: "Sofa Cama Con Portavasos",
      price: 470,
      description: "El Sofa Cama 130x100 tiene una estructura robusta de zaman, con capacidad para 3 puestos. Este mueble tiene una gran practicidad ya que se puede transformar en una cama matrimonial que garantiza confort, resistencia y estabilidad.",
      image: "sofa_cama_posabroPNG.png",
      images: [
          "sofa_cama_posabrazo (1).JPG",
          "sofa_cama_posabrazo (2).JPG",
          "sofa_cama_posabrazo (3).JPG",
          "sofa_cama_posabrazo (4).JPG",
          "sofa_cama_posabrazo (5).JPG",
          "sofa_cama_posabrazo (6).JPG",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 36,
      name: "Juego Primavera",
      price: 260,
      description: "El juego de muebles Primavera posee una estructura robusta de zaman, con capacidad para 4 puestos. Este juego cuenta con 2 piezas individuales y una pieza de 2 puestos garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_juego_primavera2.jpg",
      images: [
          "sofa_juego_primavera2.jpg",
          "sofa_juego_primavera.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 37,
      name: "Ariana",
      price: 540,
      description: "El mueble Ariana posee una estructura robusta de zaman, 1 piezas con capacidad para 3 puestos. Sus dimensiones de 200cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_ariana.jpg",
      images: [
          "sofa_ariana.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 38,
      name: "Curazao",
      price: 680,
      description: "El mueble Curazao posee una estructura robusta de zaman, 1 piezas con capacidad para 3 puestos. Sus dimensiones de 210cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece detalles de lujo como cabeceras reclinables ideal entre comodidad y durabilidad",
      image: "sofa_curazao2.jpg",
      images: [
          "sofa_curazao2.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 39,
      name: "Paris",
      price: 400,
      description: "El mueble Curazao posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos. Sus dimensiones de 120cm garantizan confort, que optimiza la resistencia y estabilidad, Además ofrece el equilibrio ideal entre comodidad y durabilidad",
      image: "sofa_paris.jpg",
      images: [
          "sofa_paris.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 40,
      name: "Cleopatra",
      price: 400,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_cleopatra.png",
      images: [
          "mueble_cleopatra.png",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 41,
      name: "Columpio",
      price: 400,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "muble_aereo.png",
      images: [
          "muble_aereo-view.png",
          "mueble_aereo2.png"
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 42,
      name: "Poltrona Rosa",
      price: 180,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_rosa.png",
      images: [
          "mueble_poltrona_rosa.png",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 43,
      name: "Poltrona Rolando",
      price: 95,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_rolando.png",
      images: [
          "mueble_poltrona_rolando.png",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 44,
      name: "Poltrona Roma",
      price: 300,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_roma.jpg",
      images: [
          "mueble_poltrona_roma.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 45,
      name: "Poltrona Mistic",
      price: 210,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_mistic.jpg",
      images: [
          "mueble_poltrona_mistic.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 46,
      name: "Poltrona Rudy",
      price: 240,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_rudy.jpg",
      images: [
          "mueble_poltrona_rudy.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 47,
      name: "Poltrona Petalo",
      price: 240,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_petalo.jpg",
      images: [
          "mueble_poltrona_petalo.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 48,
      name: "Poltrona Gray",
      price: 200,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_gray.jpg",
      images: [
          "mueble_poltrona_gray.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 49,
      name: "Poltrona Miss",
      price: 130,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_miss.jpg",
      images: [
          "mueble_poltrona_miss.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 50,
      name: "Poltrona Presidencial",
      price: 240,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_poltrona_presidencial.jpg",
      images: [
          "mueble_poltrona_presidencial.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 51,
      name: "Poltrona Nube",
      price: 240,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "sofa_poltrona_nube2.png",
      images: [
          "sofa_poltrona_nube2.png",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 52,
      name: "Peresosa Capitoneada",
      price: 290,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_peresosa_capitoneada.jpg",
      images: [
          "mueble_peresosa_capitoneada.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 53,
      name: "Divan Sutra",
      price: 250,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_divan_sutra.jpg",
      images: [
          "mueble_divan_sutra.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 54,
      name: "Divan Barriga",
      price: 290,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "mueble_divan_barriga.jpg",
      images: [
          "mueble_divan_barriga.jpg",
        ],
        associations: [

        ],
        tag: []
    },
    {
      id: 55,
      name: "Camilla Spa",
      price: 290,
      description: "El mueble Cleopatra posee una estructura robusta de zaman, 1 piezas con capacidad para 2 puestos.",
      image: "sofa_camilla.JPG",
      images: [
          "sofa_camilla.JPG",
        ],
        associations: [

        ],
        tag: []
    }
  ],
  dormitorio:[
    {
      id: 101,
      name: "Coquito",
      price: 0,
      description: "",
      image: "coco.jpg",
      images: [
        "coco.jpg"
      ],
      associations: [],
      tag: [
        "Matrimonial",
        "Queen",
        "King"
      ]
    },
    {
      id: 102,
      name: "Nene",
      price: 0,
      description: "",
      image: "cama_nene.jpg",
      images: [
        "cama_nene.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 103,
      name: "Capitan",
      price: 240,
      description: "",
      image: "cama_capitan.jpg",
      images: [
        "cama_capitan2P.jpg",
        "cama_capitan2.jpg",
      ],
      associations: [],
      tag: [
        "Invididual"
      ]
    },
    {
      id: 104,
      name: "Triangular",
      price: 180,
      description: "",
      image: "cama_triangular.jpg",
      images: [
        "cama_triangular.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 105,
      name: "Moises",
      price: 240,
      description: "",
      image: "cama_moises.jpg",
      images: [
        "cama_moises.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 106,
      name: "Moises Ligth",
      price: 240,
      description: "",
      image: "cama_moises_ligth__2_-removebg-preview.png",
      images: [
        "cama_moises_ligth (2).JPG",
        "cama_moises_ligth (1).JPG",
      ],
      associations: [],
      tag: []
    },
    {
      id: 107,
      name: "Moises con baul",
      price: 240,
      description: "",
      image: "cama_moises_baul__1_-removebg-preview (1).png",
      images: [
        "cama_moises_baul (1).JPG",
        "cama_moises_baul (2).JPG",
        "cama_moises_baul (3).JPG",
      ],
      associations: [],
      tag: []
    },
    {
      id: 108,
      name: "Madera",
      price: 160,
      description: "",
      image: "cama_madera_r.jpg",
      images: [
        "cama_madera.jpg",
        "cama_madera2.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 109,
      name: "Isabel",
      price: 290,
      description: "",
      image: "cama_isabela2.jpg",
      images: [
        "cama_isabela21.jpg",
        "cama_isabela3.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 110,
      name: "Isabel 4 puestos",
      price: 290,
      description: "",
      image: "comedor_isabel_cuatro.PNG",
      images: [
        "comedor_isabel_cuatro.PNG",
        "cama_isabela3.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 111,
      name: "Media Luna",
      price: 290,
      description: "",
      image: "comedor_media_luna.PNG",
      images: [
        "comedor_media_luna.PNG",
        "comedor_luna_1.JPG",
        "comedor_luna_2.JPG",
        "comedor_luna3.JPG"
      ],
      associations: [],
      tag: []
    },
    {
      id: 112,
      name: "Princesa",
      price: 225,
      description: "",
      image: "cama_princesa.jpg",
      images: [
        "cama_princesa.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 113,
      name: "Aurora",
      price: 290,
      description: "",
      image: "cama_aurora2.jpg",
      images: [
        "cama_aurora2.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 114,
      name: "Barco",
      price: 260,
      description: "",
      image: "cama_barco.jpg",
      images: [
        "cama_barco.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 115,
      name: "Magnun",
      price: 440,
      description: "",
      image: "cama_magnun.jpg",
      images: [
        "cama_magnun.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 117,
      name: "Sol",
      price: 440,
      description: "",
      image: "cama_sol1.jpg",
      images: [
        "cama_sol11.jpg",
        "cama_sol2.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 118,
      name: "Cama Sol Especial",
      price: 500,
      description: "",
      image: "cama_sol_especial2.jpg",
      images: [
        "cama_sol_especial.jpg",
        "cama_sol_especial2.jpg"
      ],
      associations: [],
      tag: []
    },
    {
      id: 119,
      name: "Cama Cuna Duplex",
      price: 620,
      description: "",
      image: "cama_cuna.jpg",
      images: [
        "cama_cuna.jpg",
      ],
      associations: [],
      tag: []
    },
    {
      id: 120,
      name: "cama box",
      price: 75,
      description: "",
      image: "cama_box.jpg",
      images: [
        "cama_box.jpg",
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 121,
      name: "cama punto",
      price: 115,
      description: "",
      image: "cama_punto2.png",
      images: [
        "cama_punto2.png",
        "cama_punto.png",
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 122,
      name: "rodolf",
      price: 110,
      description: "",
      image: "cama_madera_rodolfo.png",
      images: [
        "cama_madera_rodolfo.png",
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 123,
      name: "Cama Rockford",
      price: 110,
      description: "",
      image: "cama_rockford.jpg",
      images: [
        "cama_rockford.jpg",
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 124,
      name: "Cama Edith",
      price: 1390,
      description: "",
      image: "cama_edith.png",
      images: [
        "cama_edith2.png"
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 125,
      name: "Marruecos",
      price: 640,
      description: "",
      image: "cama_marruecos.png",
      images: [
        "cama_marruecos2.png"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
    {
      id: 126,
      name: "Cama Espejo",
      price: 640,
      description: "",
      image: "cama_espejo.png",
      images: [
        "cama_espejo.png"
      ],
      associations: [],
      tag: [
        "invididual",
      ]
    },
    {
      id: 127,
      name: "Cama Singapur",
      price: 670,
      description: "",
      image: "cama_singapur.png",
      images: [
        "cama_singapur.png"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
    {
      id: 128,
      name: "Cuna",
      price: 150,
      description: "",
      image: "cama_cuna_basica.jpg",
      images: [
        "cama_cuna_basica.jpg"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
    {
      id: 129,
      name: "Cuna Plus",
      price: 335,
      description: "",
      image: "cama_cuna_plus.jpg",
      images: [
        "cama_cuna_plus.jpg",
        "cama_cuna_plus (1).JPG",
        "cama_cuna_plus (2).JPG",
        "cama_cuna_plus (3).JPG"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
    {
      id: 130,
      name: "Cama Hielo",
      price: 335,
      description: "",
      image: "cama_nube2.png",
      images: [
        "cama_nube2.png",
        "cama_hielo.jpg"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
    {
      id: 131,
      name: "Cama Nube",
      price: 335,
      description: "",
      image: "cama_nube__2_-removebg-preview.png",
      images: [
        "cama_nube (1).JPG",
        "cama_nube (2).JPG",
        "cama_nube (3).JPG"
      ],
      associations: [],
      tag: [
        "Matrimonial",
      ]
    },
  ],
  multimueble:[
    {
      id: 201,
      name: "Peinadora S",
      price: 270,
      description: "",
      image: "multi_peinadora_s.jpg",
      images: [
        "multi_peinadora_s.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 202,
      name: "Peinadora M",
      price: 340,
      description: "",
      image: "multi_mesa_manicure.jpg",
      images: [
        "multi_mesa_manicure.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 203,
      name: "Peinadora XL",
      price: 695,
      description: "",
      image: "multi_mesa_manicure2.jpg",
      images: [
        "multi_mesa_manicure2.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 204,
      name: "Peinadora",
      price: 245,
      description: "",
      image: "multi_mesa_manicure3.jpg",
      images: [
        "multi_mesa_manicure3.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 205,
      name: "Escritorio Ejecutivo",
      price: 245,
      description: "",
      image: "multimueble_escritorio_ejecutivo-removebg-preview.png",
      images: [
        "multimueble_escritorio_ejecutivo-removebg-preview.png"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 206,
      name: "Juego para cuarto",
      price: 460,
      description: "",
      image: "multi_mesa_chifonier.jpg",
      images: [
        "multi_mesa_chifonier.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 207,
      name: "mesa de centro decorativo",
      price: 170,
      description: "",
      image: "multi_mesa_centro2.jpg",
      images: [
        "multi_mesa_centro2.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 208,
      name: "mesa de centro",
      price: 160,
      description: "",
      image: "multi_mesa_centro.jpg",
      images: [
        "multi_mesa_centro.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 209,
      name: "mesa de centro",
      price: 150,
      description: "",
      image: "multi_mesa_centro3.jpg",
      images: [
        "multi_mesa_centro3.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 210,
      name: "mesa de centro",
      price: 130,
      description: "",
      image: "multi_mesa_centro_3.jpg",
      images: [
        "multi_mesa_centro_3.jpg",
        "multimueble_mesa_centro_con_luz.JPG"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 211,
      name: "mesa de centro",
      price: 130,
      description: "",
      image: "multi_mesa_centro_4.jpg",
      images: [
        "multi_mesa_centro_4.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 212,
      name: "Mesa de Manicure S",
      price: 240,
      description: "",
      image: "multi_mesa_manicure_s.jpg",
      images: [
        "multi_mesa_manicure_s.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 213,
      name: "Mesa de Manicure M",
      price: 270,
      description: "",
      image: "multi_mesa_manicure_l.jpg",
      images: [
        "multi_mesa_manicure_l.jpg",
        "mesa_manicure_vol2_2.JPG",
        "multimueble_mesa_manicure_m.JPG"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 214,
      name: "Mesa de Manicure L",
      price: 295,
      description: "",
      image: "multi_manicure_l.jpg",
      images: [
        "multi_manicure_l.jpg",
        "mesa_manicure_l2.JPG"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 215,
      name: "Gavetero Moderno",
      price: 430,
      description: "",
      image: "multi_gavetero.jpg",
      images: [
        "multi_gavetero.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 216,
      name: "Gavetero",
      price: 560,
      description: "",
      image: "multi_gavetero2.jpg",
      images: [
        "multi_gavetero2.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 217,
      name: "Gavetero",
      price: 400,
      description: "",
      image: "multi_gavetero3.jpg",
      images: [
        "multi_gavetero3.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 218,
      name: "multimueble",
      price: 280,
      description: "",
      image: "multimueble_geometrico.jpg",
      images: [
        "multimueble_geometrico.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 219,
      name: "Modulo tv Jirahara",
      price: 510,
      description: "",
      image: "multimueble_modulo_tv1.png",
      images: [
        "multimueble_modulo_tv1.png",
        "multimueble_modulo_tv_mediterraneo (1).JPG",
        "multimueble_modulo_tv_mediterraneo (2).JPG",
        "multimueble_modulo_tv_mediterraneo (3).JPG",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 221,
      name: "Modulo tv Mediterraneo",
      price: 510,
      description: "",
      image: "multimueble_modulo_tv2.png",
      images: [
        "multimueble_modulo_tv2.png"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 222,
      name: "Modulo small tv",
      price: 510,
      description: "",
      image: "multi_modulo_smal.jpg",
      images: [
        "multi_modulo_smal.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 223,
      name: "Modulo tv Barra",
      price: 510,
      description: "",
      image: "multi_modulo_barra.jpg",
      images: [
        "multi_modulo_barra.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 224,
      name: "Modulo tv Glass",
      price: 510,
      description: "",
      image: "multi_modulo_vidrio.png",
      images: [
        "multi_modulo_vidrio.png"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 225,
      name: "Ropero Vol 1",
      price: 510,
      description: "",
      image: "multi_ropero_vol1.jpg",
      images: [
        "multi_ropero_vol1.jpg",
        "multi_ropero_vol1.1.jpg"
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 226,
      name: "Ropero Vol 2",
      price: 510,
      description: "",
      image: "multi_ropero_vol2.jpg",
      images: [
        "multi_ropero_vol2.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 227,
      name: "Ropero Vol 3",
      price: 510,
      description: "",
      image: "multi_ropero_vol3.jpg",
      images: [
        "multi_ropero_vol3.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 228,
      name: "Ropero Vol 4",
      price: 510,
      description: "",
      image: "multi_ropero_vol4.jpg",
      images: [
        "multi_ropero_vol4.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 229,
      name: "Ropero Vol 5",
      price: 510,
      description: "",
      image: "multi_ropero_vol5.jpg",
      images: [
        "multi_ropero_vol5.jpg",
        "multi_ropero_vol5.1.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 230,
      name: "Ropero Princesa",
      price: 510,
      description: "",
      image: "multimueble_ropero_princesa.png",
      images: [
        "multimueble_ropero_princesa.png",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 231,
      name: "Mesa de Noche Vol 1",
      price: 110,
      description: "",
      image: "multi_mesa_noche_0.jpg",
      images: [
        "multi_mesa_noche_0.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 232,
      name: "Mesa de Noche Vol 2",
      price: 110,
      description: "",
      image: "multi_mesa_noche_1.jpg",
      images: [
        "multi_mesa_noche_1.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 233,
      name: "Mesa de Noche Vol 3",
      price: 110,
      description: "",
      image: "multi_mesa_noche_2.jpg",
      images: [
        "multi_mesa_noche_2.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 234,
      name: "Mesa de Noche Vol 4",
      price: 110,
      description: "",
      image: "multi_mesa_noche_3.jpg",
      images: [
        "multi_mesa_noche_3.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 235,
      name: "Mesa de Noche Vol 5",
      price: 110,
      description: "",
      image: "multi_mesa_noche_4.jpg",
      images: [
        "multi_mesa_noche_4.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 236,
      name: "Mesa de Noche Vol 6",
      price: 110,
      description: "",
      image: "multi_mesa_noche_5.jpg",
      images: [
        "multi_mesa_noche_5.jpg",
      ],
      associations: [

      ],
      tag: []
    },
    {
      id: 237,
      name: "Mesa Centro Arteco",
      price: 110,
      description: "moodelos a consultar",
      image: "mesa_centro_vidrio2.png",
      images: [
        "mesa_centro_arteco_3_pisos (1).JPG",
        "mesa_centro_arteco_3_pisos (2).JPG",
      ],
      associations: [

      ],
      tag: []
    },
    // {
    //   id: 208,
    //   name: "Centro de TV",
    //   price: 460,
    //   description: "",
    //   image: "multi_centro_tv2.jpg",
    //   images: [
    //     "multi_centro_tv2.jpg"
    //   ]
    // },
  ],
    comedor:[
    {
      id: 301,
      name: "Tipo v",
      price: 0,
      description: "Comedor con estructura de samán y tope de vidrio, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_tipo_v2.png",
      images: [
        "comedor_tipo_v2.png",
        "comedor_tipo_v3.png",
        "Tipo_v.jpg",
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 302,
        name: "Isabela",
        price: 0,
        description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
        image: "isabela.jpg",
                images: [
          "isabela.jpg",
          "isabela_2.jpg"
        ],
        associations: [

        ],
        tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 303,
      name: "LiLy",
      price: 460,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "lily.jpg",
      images: [
        "lily.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 304,
      name: "Coral",
      price: 500,
      description: "Comedor con estructura de samán y tope de vidrio, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 150 cm x 150 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_coral.jpg",
      images: [
        "comedor_coral.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 305,
      name: "Tifany",
      price: 800,
      description: "",
      image: "tifany.jpg",
      images: [
        "tifany.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 306,
      name: "Lux",
      price: 560,
      description: "Comedor de cuatro puestos, ideal para optimizar espacios reducidos. Fabricado en madera de samán, ofrece una combinación perfecta de elegancia y modernidad, convirtiéndose en una pieza sofisticada para cualquier ambiente.",
      image: "lux.jpg",
      images: [
        "lux.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 307,
      name: "Rog",
      price: 320,
      description: "Comedor de cuatro puestos y tope de vidrio, ideal para optimizar espacios reducidos. Fabricado en madera de samán, ofrece una combinación perfecta de elegancia y modernidad, convirtiéndose en una pieza sofisticada para cualquier ambiente.",
      image: "redondo.jpg",
      images: [
        "redondo.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 308,
      name: "Valentina",
      price: 540,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_valentina.jpg",
      images: [
        "comedor_valentina.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
        "Banquillo"
      ]
    },
    {
      id: 309,
      name: "Canada",
      price: 540,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 150 cm x 150 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_tipo_i.jpg",
      images: [
        "comedor_tipo_i.jpg"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 310,
      name: "Saman barnizado",
      price: 540,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "madera.jpg",
      images: [
        "madera.jpg",
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 311,
      name: "Luna",
      price: 950,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_marmol.png",
      images: [
        "comedor_marmol.png"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 312,
      name: "Valet",
      price: 900,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_valet_marmol.png",
      images: [
        "comedor_valet_marmol.png"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 313,
      name: "Viper",
      price: 850,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_viper.png",
      images: [
        "comedor_viper.png"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 314,
      name: "Ramadan",
      price: 850,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_ramadan.png",
      images: [
        "comedor_ramadan (1).JPG",
        "comedor_ramadan (2).JPG",
        "comedor_ramadan.JPG"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 315,
      name: "Saturno con tope de vidrio",
      price: 1000,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_rosa.png",
      images: [
        "comedor_rosa.png",
        "comedor_zatruno_2.JPG"
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
    {
      id: 316,
      name: "Saturno",
      price: 1000,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "comedor_zaturno_con_tope-removebg-preview.png",
      images: [
        "comedor_zaturno_con_tope-removebg-preview.png",
      ],
      associations: [],
      tag: [
        "4 Puestos",
        "6 Puestos",
        '8 Puestos',
      ]
    },
  ],
    colchones:[
    {
      id: 409,
      name: "Paris",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "paris.png",
      images: [
        "paris.png"
      ],
      associations: [
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 410,
      name: "Colflex",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "Group 375.png",
      images: [
        "Group 375.png"
      ],
      associations: [
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 411,
      name: "Confort",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "confort_logo.png",
      images: [
        "confort_logo.png"
      ],
      associations: [
        {
          id: 3,
          name: "San Remo Matrimonial",
          price: 165,
          image: "colchon_imperia.JPG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 412,
      name: "Serta",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "Group 380.png",
      images: [
        "Group 380.png"
      ],
      associations: [
        {
          id: 3,
          name: "San Remo Matrimonial 1 pillow",
          price: 190,
          image: "colchon_imperia2.JPG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 413,
      name: "Divenca",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "divenca.png",
      images: [
        "divenca.png"
      ],
      associations: [
        {
          id: 3,
          name: "San Remo Matrimonial 2 pillow",
          price: 220,
          image: "colchon_imperial_san_remo.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 414,
      name: "Silys",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "silys.png",
      images: [
        "silys.png"
      ],
      associations: [
        {
          id: 3,
          name: "San Rebowd Matrimonial",
          price: 150,
          image: "colchon_imperia_one_pillow.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 416,
      name: "Imperia",
      price: 0,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "imperia2.png",
      images: [
        "imperia2.png"
      ],
      associations: [
        {
          id: 3,
          name: "Atlanta Matrimonial",
          price: 170,
          image: "colchon_eclipse_atlanta.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
  ]
}
