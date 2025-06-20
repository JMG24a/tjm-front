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
      price: 770,
      description: "El mueble está diseñado con una estructura de zaman, con dimensiones de 240 m x 240 m. Incorpora un revestimiento de goma de 4 pulgadas, garantizando resistencia y comodidad.",
      image: "sofa_zultan_3.PNG",
      images: [
        "sofa_zultan_3.PNG",
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
        price: 550,
        description: "El Mueble L cuenta con una estructura robusta de zaman y un diseño conpacto. Su dimensiones de 160m x 200m garantizan confort y ahorro de espacio, complementado con una sincha de 5 cm que optimiza la resistencia y estabilidad. Además, incorpora un revestimiento de goma de 4 pulgadas con densidad de 24 grados, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
        image: "mueblel.PNG",
        images: [
          "mueblel.PNG",
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
        price: 710,
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
      id: 6,
      name: "Roma",
      price: 1400,
      description: `El mueble Roma posee una estructura robusta de zaman. Su dimensión de 250 cm x 310 cm garantizan confort, resistencia y estabilidad. Como complemento, incluye detalles de lujo como portavasos y mecanismos reclinables para mayor comodidad.`,
      image: "sofa_roma.PNG",
      images: [
          "sofa_roma.PNG",
          "sofa_roma_2.PNG",
          "sofa_roma_3.PNG"
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
      id: 7,
      name: "Maya",
      price: 1600,
      description: `El mueble Maya posee una estructura robusta de zaman y con capacidad para seis puestos. Sus dimensiones de 250 cm x 310 cm garantizan confort, complementado por una cincha de 5 cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 6 pulgadas con una densidad de 24 grados, ofreciendo el equilibrio ideal entre comodidad y durabilidad. Como complemento, incluye detalles de lujo como portavasos y mecanismos reclinables para mayor comodidad.`,
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
      id: 8,
      name: "Roraima",
      price: 1050,
      description: `El mueble Roraima posee una estructura robusta de zaman y con capacidad para seis puestos. Sus dimensiones de 250cm x 250cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 4 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_roraima.jpg",
      images: [
          "sofa_roraima.jpg",
          "sofa_roraima2.jpg",
          "sofa_roraima3.jpg"
        ],
        associations: [

        ],
        tag: [
          "6 Puestos",
          "3 Piezas",
          "1 Puff",
          'Goma 4"',
          "Cincha 5cm",
        ]
    },
    {
      id: 9,
      name: "Roraima S",
      price: 660,
      description: `El mueble Roraima S posee una estructura robusta de zaman y con capacidad para ocho puestos. Sus dimensiones de 250cm x 250cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 4 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
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
      id: 10,
      name: "David",
      price: 460,
      description: `El mueble David posee una estructura robusta de zaman y con capacidad para 5 puestos. Sus dimensiones de 200cm x 200cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 2.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
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
      id: 11,
      name: "Invierno",
      price: 730,
      description: `El mueble Invierno posee una estructura robusta de zaman y con capacidad para 3 puestos. Sus dimensiones de 200cm x 180cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 4 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_invierno.jpg",
      images: [
          "sofa_invierno.jpg",
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
      id: 12,
      name: "Charlott",
      price: 430,
      description: `El mueble Charlott posee una estructura robusta de zaman y con capacidad para 3 puestos. Sus dimensiones de 150cm x 170cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 2.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_charlot.jpg",
      images: [
          "sofa_charlot.jpg",
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
      id: 13,
      name: "Media Luna",
      price: 670,
      description: `El mueble Media Luna posee una estructura robusta de zaman y con capacidad para 3 puestos. Sus dimensiones de 150cm x 170cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 3 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_media_luna.jpg",
      images: [
          "sofa_media_luna.jpg",
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
      id: 14,
      name: "Mueble L",
      price: 550,
      description: `El Mueble L posee una estructura robusta de zaman y con capacidad para 5 puestos. Sus dimensiones de 250cm x 165cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 3.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
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
      id: 15,
      name: "Rodolfo",
      price: 690,
      description: `El Mueble Rodolfo posee una estructura robusta de zaman y con capacidad para 6 puestos. Sus dimensiones de 250cm x 180cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 3.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
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
      description: `El Mueble Enmaly posee una estructura robusta de zaman y con capacidad para 5 puestos. Sus dimensiones de 175cm x 175cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 2.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_enmaly.jpg",
      images: [
          "sofa_enmaly.jpg",
          "sofa_enmaly2.jpg",
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
      description: `El Mueble Europa posee una estructura robusta de zaman y con capacidad para 3 puestos y accesorios de lujo como porta vasos. Sus dimensiones de 175cm garantizan confort, complementado por una cincha de 5cm que optimiza la resistencia y estabilidad.

Además, incorpora un revestimiento de goma de 2.5 pulgadas, ofreciendo el equilibrio ideal entre comodidad y durabilidad.`,
      image: "sofa_europa.jpg",
      images: [
          "sofa_europa.jpg",
          "sofa_europa2.jpg"
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
      description: ``,
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
      description: "",
      image: "sofa_ali.jpg",
      images: [
          "sofa_ali.jpg",
        ],
        associations: [

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
      associations: [],
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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
        associations: [

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
      price: 180,
      description: "",
      image: "nene.jpg",
              images: [
        "nene.jpg"
      ],
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      associations: [],
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
      id: 230,
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
      id: 206,
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
      id: 207,
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
      id: 208,
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
      id: 209,
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
      id: 210,
      name: "Mesa de Manicure M",
      price: 270,
      description: "",
      image: "multi_mesa_manicure_l.jpg",
      images: [
        "multi_mesa_manicure_l.jpg"
      ],
      associations: [

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
      associations: [

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
      associations: [

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
      associations: [

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
      associations: [

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
      associations: [

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
      id: 302,
        name: "Isabela",
        price: 650,
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
      image: "coral.jpg",
      images: [
        "coral.jpg"
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
      name: "Tipo v",
      price: 630,
      description: "Comedor con estructura de samán y tope de vidrio, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "Tipo_v.jpg",
      images: [
        "Tipo_v.jpg"
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
      image: "valentina.jpg",
      images: [
        "valentina.jpg"
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
      name: "Tipo i",
      price: 540,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado pintado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 150 cm x 150 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "tipo_i.jpg",
      images: [
        "tipo_i.jpg"
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
      name: "Madera",
      price: 540,
      description: "Comedor con estructura de samán, diseñado para ofrecer resistencia y durabilidad. Fabricado con materiales de alta calidad, cuenta con un acabado barnizado impecable y detalles cuidadosamente trabajados. Sus dimensiones de 170 cm x 120 cm lo convierten en una opción versátil y elegante para cualquier espacio",
      image: "madera.jpg",
      images: [
        "madera.jpg"
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
      id: 403,
      name: "Colflex Vegas",
      price: 139,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_colflex_vega.jpg",
      images: [
        "colchon_colflex_vega.jpg"
      ],
      associations: [
        {
          id: 1,
          name: "Vegas Matrimonial",
          price: 170,
          image: "colchon_colflex_vega.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 404,
      name: "Colflex Collection",
      price: 165,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_colflex_lady.PNG",
      images: [
        "colchon_colflex_lady.PNG"
      ],
      associations: [
        {
          id: 1,
          name: "Collection Queen",
          price: 270,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 2,
          name: "Collection King",
          price: 320,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 3,
          name: "Collection Matrimonial",
          price: 210,
          image: "colchon_colflex_lady.PNG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 405,
      name: "Colflex Collection 1 pillow",
      price: 190,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_colflex_lady.PNG",
      images: [
        "colchon_colflex_lady.PNG"
      ],
      associations: [
        {
          id: 1,
          name: "Collection 1 pillow Queen",
          price: 314,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 2,
          name: "Collection 1 pillow King",
          price: 375,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 3,
          name: "Collection 1 pillow Matrimonial",
          price: 240,
          image: "colchon_colflex_lady.PNG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 406,
      name: "Colflex Collection 2 pillow",
      price: 213,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_colflex_lady.PNG",
      images: [
        "colchon_colflex_lady.PNG"
      ],
      associations: [
        {
          id: 1,
          name: "Collection 2 pillow Queen",
          price: 349,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 2,
          name: "Collection 2 pillow King",
          price: 433,
          image: "colchon_colflex_lady.PNG",
        },
        {
          id: 3,
          name: "Collection 2 pillow Matrimonial",
          price: 275,
          image: "colchon_colflex_lady.PNG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 407,
      name: "Colflex Europillow",
      price: 247,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_colflex_europillow.png",
      images: [
        "colchon_colflex_europillow.png"
      ],
      associations: [
        {
          id: 1,
          name: "Europillow Queen",
          price: 396,
          image: "colchon_colflex_europillow.png",
        },
        {
          id: 2,
          name: "Europillow King",
          price: 475,
          image: "colchon_colflex_europillow.png",
        },
        {
          id: 3,
          name: "Europillow Matrimonial",
          price: 325,
          image: "colchon_colflex_europillow.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 408,
      name: "Divenca Caroni",
      price: 115,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_divenca2.jpg",
      images: [
        "colchon_divenca2.jpg"
      ],
      associations: [
        {
          id: 1,
          name: "Caroni Matrimonial",
          price: 148,
          image: "colchon_divenca2.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 409,
      name: "Divenca Orinoco",
      price: 145,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_divenca2.png",
      images: [
        "colchon_divenca2.png"
      ],
      associations: [
        {
          id: 1,
          name: "Orinoco Queen",
          price: 220,
          image: "colchon_divenca2.png",
        },
        {
          id: 2,
          name: "Orinoco King",
          price: 295,
          image: "colchon_divenca2.png",
        },
        {
          id: 3,
          name: "Orinoco Matrimonial",
          price: 180,
          image: "colchon_divenca2.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 410,
      name: "Divenca Ensueño",
      price: 207,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_divenca_1.png",
      images: [
        "colchon_divenca_1.png"
      ],
      associations: [
        {
          id: 1,
          name: "Ensueño Queen",
          price: 327,
          image: "colchon_divenca_1.png",
        },
        {
          id: 2,
          name: "Ensueño King",
          price: 414,
          image: "colchon_divenca_1.png",
        },
        {
          id: 3,
          name: "Ensueño Matrimonial",
          price: 267,
          image: "colchon_divenca_1.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 411,
      name: "Imperia San Remo",
      price: 128,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_imperia.JPG",
      images: [
        "colchon_imperia.JPG"
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
      name: "Imperia San Remo 1 pillow",
      price: 150,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_imperia.JPG",
      images: [
        "colchon_imperia.JPG"
      ],
      associations: [
        {
          id: 3,
          name: "San Remo Matrimonial 1 pillow",
          price: 190,
          image: "colchon_imperia.JPG",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 413,
      name: "Imperia San Remo 2 pillow",
      price: 200,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_imperial_san_remo.jpg",
      images: [
        "colchon_imperial_san_remo.jpg"
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
      name: "Imperia San Rebowd",
      price: 125,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_imperia_one_pillow.png",
      images: [
        "colchon_imperia_one_pillow.png"
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
      name: "Eclipse Atlanta",
      price: 143,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_eclipse_atlanta.png",
      images: [
        "colchon_eclipse_atlanta.png"
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
    {
      id: 417,
      name: "Eclipse Nevada 2 pillow",
      price: 270,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_eclipse_nevada.png",
      images: [
        "colchon_eclipse_nevada.png"
      ],
      associations: [
        {
          id: 1,
          name: "Nevada Queen 2 pillow",
          price: 365,
          image: "colchon_eclipse_nevada.png",
        },
        {
          id: 2,
          name: "Nevada King 2 pillow",
          price: 420,
          image: "colchon_eclipse_nevada.png",
        },
        {
          id: 3,
          name: "Nevada Matrimonial 2 pillow",
          price: 310,
          image: "colchon_eclipse_nevada.png",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 418,
      name: "Sealy Paris",
      price: 143,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_sealy_parisnoche.jpg",
      images: [
        "colchon_sealy_parisnoche.jpg"
      ],
      associations: [
        {
          id: 3,
          name: "Paris Matrimonial",
          price: 170,
          image: "colchon_sealy_parisnoche.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 419,
      name: "Sealy Florida",
      price: 153,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_sealy_atlanta.jpg",
      images: [
        "colchon_sealy_atlanta.jpg"
      ],
      associations: [
        {
          id: 3,
          name: "Florida Matrimonial",
          price: 207,
          image: "colchon_sealy_atlanta.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 420,
      name: "Sealy Planet",
      price: 135,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_sealy_planet.jpg",
      images: [
        "colchon_sealy_planet.jpg"
      ],
      associations: [
        {
          id: 3,
          name: "Planet Matrimonial",
          price: 160,
          image: "colchon_sealy_planet.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 421,
      name: "Sealy Nebraska 1 pillow",
      price: 243,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_sealy_nebraska.jpg",
      images: [
        "colchon_sealy_nebraska.jpg"
      ],
      associations: [
        {
          id: 1,
          name: "Nebraska Queen 1 pillow",
          price: 338,
          image: "colchon_sealy_nebraska.jpg",
        },
        {
          id: 2,
          name: "Nebraska King 1 pillow",
          price: 398,
          image: "colchon_sealy_nebraska.jpg",
        },
        {
          id: 3,
          name: "Nebraska Matrimonial 1 pillow",
          price: 290,
          image: "colchon_sealy_nebraska.jpg",
        },
      ],
      tag: [
        "individual",
        "Garantia 5 años",
      ]
    },
    {
      id: 422,
      name: "Sealy Kansas 2 pillow",
      price: 310,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_sealy_kansas.jpg",
      images: [
        "colchon_sealy_kansas.jpg"
      ],
      associations: [],
      tag: [
        "Matrimonial",
        "Garantia 5 años",
      ]
    },
    {
      id: 423,
      name: "Confort Monte Real 1 pillow",
      price: 189,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_confort_monte_real.jpeg",
      images: [
        "colchon_confort_monte_real.jpeg"
      ],
      associations: [],
      tag: [
        "Matrimonial",
        "Garantia 5 años",
      ]
    },
    {
      id: 424,
      name: "Confort Monte Carlo",
      price: 135,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_confort_monte_carlo.jpg",
      images: [
        "colchon_confort_monte_carlo.jpg"
      ],
      associations: [],
      tag: [
        "Invididual",
        "Garantia 5 años",
      ]
    },
    {
      id: 425,
      name: "Confort Power",
      price: 306,
      description: "El colchón Colflex pillow top tiene una capa adicional de acolchado en la parte superior, lo que proporciona una sensación de suavidad y confort extra",
      image: "colchon_confort_power.png",
      images: [
        "colchon_confort_power.png"
      ],
      associations: [],
      tag: [
        "Queen",
        "Garantia 5 años",
      ]
    },
  ]
}
