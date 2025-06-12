// Tipos de productos
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[]
  description: string,
  tag: string[],
  category?: string,
};


export const db: Record<string, Product[]> = {
  sofa: [
    {
      id: 1,
      name: "Zultan",
      price: 770,
      description: "El mueble está diseñado con una estructura de zaman, con dimensiones de 240 m x 240 m. Incorpora un revestimiento de goma de 4 pulgadas, con una densidad de 24 grados, garantizando resistencia y comodidad.",
      image: "zultan_3.jpg",
      images: [
        "zultan_3.jpg",
        "zultan_1.PNG",
        "zultan_4.PNG",
        "zultan_5.PNG",
        "zultan_6.PNG",
        // "zultan_7.PNG",
      ],
      tag: [
        "5 Puestos",
        "3 Piezas",
        'Goma 5"',
        "Cincha 5cm",
      ]
    },
    {
        id: 2,
        name: "Mueble L",
        price: 550,
        description: "El Mueble L cuenta con una estructura robusta de zaman y un diseño conpacto. Su dimensiones de 160m x 200m garantizan confort y ahorro de espacio, complementado con una sincha de 5 cm que optimiza la resistencia y estabilidad. Además, incorpora un revestimiento de goma de 4 pulgadas con densidad de 24 grados, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
        image: "mueblel.PNG",
        images: [
          "mueblel.PNG",
          "muebleL_2.PNG"
        ],
        tag: []
    },
      {
        id: 3,
        name: "Juego Suiza",
        price: 710,
        description: "El juego Suiza está compuesto por dos piezas con una estructura de zaman y un diseño tradicional, con capacidad para cinco puestos. La primera pieza tiene una longitud de 150 cm y ofrece dos puestos, mientras que la segunda mide 210 cm, proporcionando un espacio amplio y confortable.",
        image: "sofa_juego_suiza.PNG",
        images: [
          "sofa_juego_suiza.PNG",
          "sofa_juego_zuisa2.jpg"
        ],
        tag: []
    },
    {
      id: 6,
      name: "Roma",
      price: 1400,
      description: `El mueble Roma posee una estructura robusta de zaman y un diseño compacto, con capacidad para seis puestos. Sus dimensiones de 250 cm x 310 cm garantizan confort, complementado por una cincha de 5 cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 6 pulgadas con una densidad de 24 grados, ofreciendo el equilibrio ideal entre comodidad y durabilidad. Como complemento, incluye detalles de lujo como portavasos y mecanismos reclinables para mayor comodidad.`,
      image: "Roma.PNG",
      images: [
          "Roma.PNG",
          "roma_2.PNG",
          "roma_3.PNG"
        ],
        tag: []
    },
    {
      id: 7,
      name: "Maya",
      price: 1600,
      description: "",
      image: "maya.PNG",
      images: [
          "maya.PNG"
        ],
        tag: []
    },
    {
      id: 8,
      name: "Roraima",
      price: 1050,
      description: "",
      image: "sofa_roraima.jpg",
      images: [
          "sofa_roraima.jpg",
          "sofa_roraima2.jpg",
          "sofa_roraima3.jpg"
        ],
        tag: []
    },
    {
      id: 9,
      name: "Roraima S",
      price: 660,
      description: "",
      image: "sofa_roraima_s.jpg",
      images: [
          "sofa_roraima_s.jpg",
          "sofa_roraima_s2.jpg"
        ],
        tag: []
    },
    {
      id: 10,
      name: "David",
      price: 460,
      description: "",
      image: "sofa_david_3.jpg",
      images: [
          "sofa_david_3.jpg",
          "sofa_david_.jpg",
          "sofa_david_2.jpg"
        ],
        tag: []
    },
    {
      id: 11,
      name: "Invierno",
      price: 730,
      description: "",
      image: "sofa_invierno.jpg",
      images: [
          "sofa_invierno.jpg",
        ],
        tag: []
    },
    {
      id: 12,
      name: "Charlott",
      price: 430,
      description: "",
      image: "sofa_charlot.jpg",
      images: [
          "sofa_charlot.jpg",
        ],
        tag: []
    },
    {
      id: 13,
      name: "Media Luna",
      price: 670,
      description: "",
      image: "sofa_media_luna.jpg",
      images: [
          "sofa_media_luna.jpg",
        ],
        tag: []
    },
    {
      id: 14,
      name: "Mueble L",
      price: 550,
      description: "",
      image: "sofa_mueblel5p(1).jpg",
      images: [
          "sofa_mueblel5p(1).jpg",
          "sofa_mueblel5p(2).jpg",
          "sofa_mueblel5p(3).jpg",
        ],
        tag: []
    },
    {
      id: 15,
      name: "Rodolfo",
      price: 690,
      description: "",
      image: "sofa_rodolfo.jpg",
      images: [
          "sofa_rodolfo.jpg",
        ],
        tag: []
    },
    {
      id: 16,
      name: "Enmaly",
      price: 320,
      description: "",
      image: "sofa_enmaly.jpg",
      images: [
          "sofa_enmaly.jpg",
          "sofa_enmaly2.jpg",
        ],
        tag: []
    },
    {
      id: 17,
      name: "Europa",
      price: 810,
      description: "",
      image: "sofa_europa.jpg",
      images: [
          "sofa_europa.jpg",
          "sofa_europa2.jpg"
        ],
        tag: []
    },
    {
      id: 18,
      name: "Grecia",
      price: 460,
      description: "",
      image: "sofa_grecia.jpg",
      images: [
          "sofa_grecia.jpg",
        ],
        tag: []
    },
    {
      id: 19,
      name: "Ali",
      price: 520,
      description: "",
      image: "sofa_ali.jpg",
      images: [
          "sofa_ali.jpg",
        ],
        tag: []
    },
    {
      id: 5,
      name: "Fenix",
      price: 450,
      description: `El modelo Fénix consta de tres piezas con una estructura robusta de zaman y un diseño moderno, ideal para cinco puestos. Sus dimensiones de 190 cm x 190 cm garantizan confort y optimización del espacio.

      Además, cuenta con un revestimiento de goma de 4 pulgadas y una densidad de 24 grados, proporcionando el equilibrio perfecto entre comodidad y durabilidad.`,
      image: "fenix.PNG",
      images: [
        "fenix.PNG",
        "fenix_2.PNG"
      ],
      tag: []
    },
    {
      id: 20,
      name: "Labros",
      price: 625,
      description: "",
      image: "sofa_labros.jpg",
      images: [
          "sofa_labros.jpg",
        ],
        tag: []
    },
    {
      id: 21,
      name: "Richard",
      price: 460,
      description: "",
      image: "sofa_richard.jpg",
      images: [
          "sofa_richard.jpg",
        ],
        tag: []
    },
    {
      id: 22,
      name: "Audi",
      price: 590,
      description: "",
      image: "sofa_audi.jpg",
      images: [
          "sofa_audi.jpg",
        ],
        tag: []
    },
    {
      id: 23,
      name: "Suiza",
      price: 510,
      description: "",
      image: "sofa_zuisa.jpg",
      images: [
          "sofa_zuisa.jpg",
        ],
        tag: []
    },
    {
      id: 24,
      name: "Anasur",
      price: 440,
      description: "",
      image: "sofa_anasur.jpg",
      images: [
          "sofa_anasur.jpg",
        ],
        tag: []
    },
    {
      id: 25,
      name: "Rosa",
      price: 660,
      description: "",
      image: "sofa_rosa.jpg",
      images: [
          "sofa_rosa.jpg",
        ],
        tag: []
    },
        {
      id: 26,
      name: "Juego Principe",
      price: 450,
      description: "",
      image: "sofa_juego_principe.jpg",
      images: [
          "sofa_juego_principe.jpg",
          "sofa_juego_principe2.jpg"
        ],
        tag: []
    },
    {
      id: 27,
      name: "Juego Barco",
      price: 690,
      description: "",
      image: "sofa_barco.jpg",
      images: [
          "sofa_barco.jpg",
        ],
        tag: []
    },
    {
      id: 28,
      name: "Juego Mufada",
      price: 670,
      description: "",
      image: "sofa_juego_mufada.jpg",
      images: [
          "sofa_juego_mufada.jpg",
        ],
        tag: []
    },
    {
      id: 29,
      name: "Sofa Cama",
      price: 470,
      description: "",
      image: "sofa_sofacama.jpg",
      images: [
          "sofa_sofacama.jpg",
        ],
        tag: []
    },
    {
      id: 30,
      name: "Juego Primavera",
      price: 260,
      description: "",
      image: "sofa_juego_primavera2.jpg",
      images: [
          "sofa_juego_primavera2.jpg",
          "sofa_juego_primavera.jpg",
        ],
        tag: []
    },
    {
      id: 31,
      name: "Ariana",
      price: 540,
      description: "",
      image: "sofa_ariana.jpg",
      images: [
          "sofa_ariana.jpg",
        ],
        tag: []
    },
    {
      id: 32,
      name: "Curazao",
      price: 680,
      description: "",
      image: "sofa_curazao2.jpg",
      images: [
          "sofa_curazao2.jpg",
        ],
        tag: []
    },
    {
      id: 33,
      name: "Paris",
      price: 400,
      description: "",
      image: "sofa_paris.jpg",
      images: [
          "sofa_paris.jpg",
        ],
        tag: []
    },
  ],
  dormitorio:[
    {
      id: 101,
      name: "Coquito",
      price: 140,
      description: "",
      image: "coco.jpg",
      images: [
        "coco.jpg"
      ],
      tag: []
    },
    {
      id: 102,
      name: "Nene",
      price: 180,
      description: "",
      image: "nene.jpg",
              images: [
        "nene.jpg"
      ],
      tag: []
    },
    {
      id: 103,
      name: "Capitan",
      price: 240,
      description: "",
      image: "capitan.jpg",
      images: [
        "capitan.jpg"
      ],
      tag: []
    },
    {
      id: 104,
      name: "Triangular",
      price: 180,
      description: "",
      image: "triangular.jpg",
      images: [
        "triangular.jpg"
      ],
      tag: []
    },
    {
      id: 105,
      name: "Moises",
      price: 240,
      description: "",
      image: "moises.jpg",
      images: [
        "moises.jpg"
      ],
      tag: []
    },
    {
      id: 106,
      name: "Madera",
      price: 160,
      description: "",
      image: "cama_madera.jpg",
      images: [
        "cama_madera.jpg",
        "cama_madera_pintada.jpg"
      ],
      tag: []
    },
    {
      id: 107,
      name: "Isabela",
      price: 290,
      description: "",
      image: "cama_isabela.jpg",
      images: [
        "cama_isabela.jpg",
      ],
      tag: []
    },
    {
      id: 108,
      name: "Princesa",
      price: 225,
      description: "",
      image: "princesa.jpg",
      images: [
        "princesa.jpg",
      ],
      tag: []
    },
    {
      id: 109,
      name: "Aurora",
      price: 290,
      description: "",
      image: "cama_aurora2.jpg",
      images: [
        "cama_aurora.jpg",
        "cama_aurora2.jpg"
      ],
      tag: []
    },
    {
      id: 110,
      name: "Barco",
      price: 260,
      description: "",
      image: "cama_barco.jpg",
      images: [
        "cama_barco.jpg",
      ],
      tag: []
    },
    {
      id: 111,
      name: "Magnun",
      price: 440,
      description: "",
      image: "cama_magnun.jpg",
      images: [
        "cama_magnun.jpg",
      ],
      tag: []
    },
    {
      id: 112,
      name: "Sol",
      price: 440,
      description: "",
      image: "cama_sol.jpg",
      images: [
        "cama_sol.jpg",
      ],
      tag: []
    },
    {
      id: 113,
      name: "Cama Sol Especial",
      price: 500,
      description: "",
      image: "cama_sol_especial.jpg",
      images: [
        "cama_sol_especial.jpg",
      ],
      tag: []
    },
    {
      id: 114,
      name: "Cama Cuna Duplex",
      price: 620,
      description: "",
      image: "cama_cuna.jpg",
      images: [
        "cama_cuna.jpg",
      ],
      tag: []
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
      tag: []
    },
    {
      id: 230,
      name: "Juego para cuarto",
      price: 460,
      description: "",
      image: "multi_mesa_chifonier.jpg",
      images: [
        "multi_mesa_chifonier.jpg"
      ],
      tag: []
    },
    {
      id: 206,
      name: "mesa de centro decorativo",
      price: 170,
      description: "",
      image: "multi_mesa_centro2.jpg",
      images: [
        "multi_mesa_centro2.jpg"
      ],
      tag: []
    },
    {
      id: 207,
      name: "mesa de centro",
      price: 160,
      description: "",
      image: "multi_mesa_centro.jpg",
      images: [
        "multi_mesa_centro.jpg"
      ],
      tag: []
    },
    {
      id: 208,
      name: "mesa de centro",
      price: 150,
      description: "",
      image: "multi_mesa_centro3.jpg",
      images: [
        "multi_mesa_centro3.jpg"
      ],
      tag: []
    },
    {
      id: 209,
      name: "Mesa de Manicure S",
      price: 240,
      description: "",
      image: "multi_mesa_manicure_s.jpg",
      images: [
        "multi_mesa_manicure_s.jpg"
      ],
      tag: []
    },
    {
      id: 210,
      name: "Mesa de Manicure M",
      price: 270,
      description: "",
      image: "multi_mesa_manicure_l.jpg",
      images: [
        "multi_mesa_manicure_l.jpg"
      ],
      tag: []
    },
    {
      id: 211,
      name: "Mesa de Manicure L",
      price: 295,
      description: "",
      image: "multi_manicure_l.jpg",
      images: [
        "multi_manicure_l.jpg"
      ],
      tag: []
    },
    {
      id: 212,
      name: "Gavetero Moderno",
      price: 430,
      description: "",
      image: "multi_gavetero.jpg",
      images: [
        "multi_gavetero.jpg"
      ],
      tag: []
    },
    {
      id: 213,
      name: "Gavetero",
      price: 560,
      description: "",
      image: "multi_gavetero2.jpg",
      images: [
        "multi_gavetero2.jpg"
      ],
      tag: []
    },
    {
      id: 214,
      name: "Gavetero",
      price: 400,
      description: "",
      image: "multi_gavetero3.jpg",
      images: [
        "multi_gavetero3.jpg"
      ],
      tag: []
    },
    {
      id: 215,
      name: "multimueble",
      price: 280,
      description: "",
      image: "multimueble_geometrico.jpg",
      images: [
        "multimueble_geometrico.jpg"
      ],
      tag: []
    },
    // {
    //   id: 207,
    //   name: "Centro de TV",
    //   price: 460,
    //   description: "",
    //   image: "multi_centro_tv.jpg",
    //   images: [
    //     "multi_centro_tv.jpg"
    //   ]d:\tjmPNG\heic\catalogo multimuebles\multi_gavetero2.jpg
    // },
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
      name: "Lux",
      price: 560,
      description: "El comedor lux es una comedor con estructura de saman ",
      image: "lux.jpg",
      images: [
        "lux.jpg"
      ],
      tag: []
    },
    {
      id: 302,
        name: "Isabela",
        price: 650,
        description: "",
        image: "isabela.jpg",
                images: [
          "isabela.jpg",
          "isabela_2.jpg"
        ],
        tag: []
    },
    {
      id: 303,
      name: "LiLy",
      price: 460,
      description: "",
      image: "lily.jpg",
      images: [
        "lily.jpg"
      ],
      tag: []
    },
    {
      id: 304,
      name: "Coral",
      price: 500,
      description: "",
      image: "coral.jpg",
      images: [
        "coral.jpg"
      ],
      tag: []
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
      tag: []
    },
    {
      id: 306,
      name: "Tipo v",
      price: 630,
      description: "",
      image: "Tipo_v.jpg",
      images: [
        "Tipo_v.jpg"
      ],
      tag: []
    },
    {
      id: 307,
      name: "Redondo",
      price: 320,
      description: "",
      image: "redondo.jpg",
      images: [
        "redondo.jpg"
      ],
      tag: []
    },
    {
      id: 308,
      name: "Valentina",
      price: 540,
      description: "",
      image: "valentina.jpg",
      images: [
        "valentina.jpg"
      ],
      tag: []
    },
    {
      id: 309,
      name: "Tipo i",
      price: 540,
      description: "",
      image: "tipo_i.jpg",
      images: [
        "tipo_i.jpg"
      ],
      tag: []
    },
        {
      id: 310,
      name: "Madera",
      price: 540,
      description: "",
      image: "madera.jpg",
      images: [
        "madera.jpg"
      ],
      tag: []
    },
  ],
    colchones:[
    {
      id: 401,
      name: "Imperia San Remo",
      price: 200,
      description: "",
      image: "colchon_imperia.JPG",
      images: [
        "colchon_imperia.JPG"
      ],
      tag: []
    },
    {
      id: 402,
      name: "Colflex Lady Best",
      price: 230,
      description: "",
      image: "colchon_colflex_lady.PNG",
      images: [
        "colchon_colflex_lady.PNG"
      ],
      tag: []
    },
  ]
}
