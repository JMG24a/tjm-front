// Tipos de productos
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  images: string[]
  description: string,
  category?: string,
};


export const db: Record<string, Product[]> = {
  sofa: [
    {
      id: 1,
      name: "Zultan",
      price: 770,
      description: "El mueble Zultan está diseñado con una estructura de zaman, con dimensiones de 240 m x 240 m. Incorpora un revestimiento de goma de 4 pulgadas, con una densidad de 24 grados, garantizando resistencia y comodidad.",
      image: "zultan_3.jpg",
      images: [
        "zultan_3.jpg",
        "zultan_1.PNG",
        "zultan_4.PNG",
        "zultan_5.PNG",
        "zultan_6.PNG",
        "zultan_7.PNG",
      ]
    },
    {
        id: 2,
        name: "Mueble L",
        price: 550,
        description: "El Mueble L cuenta con una estructura robusta de zaman y un diseño conpacto con capacidad para cinco puestos. Sus dimensiones de 150 m x 200 m garantizan confort y ahorro de espacio, complementado con una sincha de 5 cm que optimiza la resistencia y estabilidad. Además, incorpora un revestimiento de goma de 4 pulgadas con una densidad de 24 grados, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
        image: "mueblel.PNG",
        images: [
          "mueblel.PNG",
          "muebleL_2.PNG"
        ]
    },
      {
        id: 3,
        name: "Juego Zuisa",
        price: 460,
        description: "El Mueble L cuenta con una estructura robusta de zaman y un diseño conpacto con capacidad para cinco puestos. Sus dimensiones de 150 m x 200 m garantizan confort y ahorro de espacio, complementado con una sincha de 5 cm que optimiza la resistencia y estabilidad. Además, incorpora un revestimiento de goma de 4 pulgadas con una densidad de 24 grados, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
        image: "zultan2puestos.PNG",
        images: [
          "zultan2puestos.PNG"
        ]
    },
    {
        id: 5,
        name: "Fenix",
        price: 450,
        description: "El Fenix cuenta con una estructura robusta de zaman y un diseño moderno para cinco puestos. Sus dimensiones de 190 m x 190 m garantizan confort y ahorro de espacio, Además, incorpora un revestimiento de goma de 4 pulgadas con una densidad de 24 grados, ofreciendo comodidad y durabilidad.",
        image: "fenix.PNG",
        images: [
          "fenix.PNG",
          "fenix_2.PNG"
        ]
    },
    {
      id: 6,
      name: "Roma",
      price: 1400,
      description: "El mueble Roma cuenta con una estructura robusta de zaman y un diseño conpacto con capacidad para seis puestos. Sus dimensiones de 250 m x 310 m garantiza confort o, complementado con una sincha de 5 cm que optimiza la resistencia y estabilidad. Además, incorpora un revestimiento de goma de 6 pulgadas con una densidad de 24 grados, ofreciendo un equilibrio ideal entre comodidad y durabilidad.",
      image: "Roma.PNG",
      images: [
          "Roma.PNG",
          "roma_2.PNG",
          "roma_3.PNG"
        ]
    },
    {
      id: 7,
      name: "Maya",
      price: 1600,
      description: "",
      image: "maya.PNG",
      images: [
          "maya.PNG"
        ]
    },
    {
      id: 8,
      name: "Roraima",
      price: 1050,
      description: "",
      image: "sofa_roraima.jpg",
      images: [
          "sofa_roraima.jpg",
          "sofa_roraima2.jpg"
        ]
    },
    {
      id: 9,
      name: "Roraima S",
      price: 1050,
      description: "",
      image: "sofa_roraima_s.jpg",
      images: [
          "sofa_roraima_s.jpg",
          "sofa_roraima_s2.jpg"
        ]
    },
    {
      id: 10,
      name: "David",
      price: 1050,
      description: "",
      image: "sofa_david_3.jpg",
      images: [
          "sofa_david_3.jpg",
          "sofa_david_.jpg",
          "sofa_david_2.jpg"
        ]
    },
    {
      id: 11,
      name: "Invierno",
      price: 1050,
      description: "",
      image: "sofa_invierno.jpg",
      images: [
          "sofa_invierno.jpg",
        ]
    }
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
      ]
    },
    {
      id: 103,
      name: "Capitan",
      price: 240,
      description: "",
      image: "capitan.jpg",
      images: [
        "capitan.jpg"
      ]
    },
    {
      id: 104,
      name: "Triangular",
      price: 180,
      description: "",
      image: "triangular.jpg",
      images: [
        "triangular.jpg"
      ]
    },
    {
      id: 105,
      name: "Moises",
      price: 240,
      description: "",
      image: "moises.jpg",
      images: [
        "moises.jpg"
      ]
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
      ]
    },
    {
      id: 107,
      name: "Isabela",
      price: 290,
      description: "",
      image: "cama_isabela.jpg",
      images: [
        "cama_isabela.jpg",
      ]
    },
    {
      id: 108,
      name: "Princesa",
      price: 225,
      description: "",
      image: "princesa.jpg",
      images: [
        "princesa.jpg",
      ]
    },
    {
      id: 109,
      name: "Aurora",
      price: 290,
      description: "",
      image: "cama_aurora.jpg",
      images: [
        "cama_aurora.jpg",
      ]
    },
    {
      id: 110,
      name: "Barco",
      price: 260,
      description: "",
      image: "cama_barco.jpg",
      images: [
        "cama_barco.jpg",
      ]
    },
    {
      id: 111,
      name: "Magnun",
      price: 440,
      description: "",
      image: "cama_magnun.jpg",
      images: [
        "cama_magnun.jpg",
      ]
    },
    {
      id: 112,
      name: "Sol",
      price: 440,
      description: "",
      image: "cama_sol.jpg",
      images: [
        "cama_sol.jpg",
      ]
    },
    {
      id: 113,
      name: "Cama Sol Especial",
      price: 500,
      description: "",
      image: "cama_sol_especial.jpg",
      images: [
        "cama_sol_especial.jpg",
      ]
    },
    {
      id: 114,
      name: "Cama Cuna Duplex",
      price: 620,
      description: "",
      image: "cama_cuna.jpg",
      images: [
        "cama_cuna.jpg",
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
      ]
    },
    {
      id: 202,
      name: "Peinadora M",
      price: 340,
      description: "",
      image: "multi_mesa_manicure.jpg",
      images: [
        "multi_mesa_manicure.jpg"
      ]
    },
    {
      id: 203,
      name: "Peinadora XL",
      price: 695,
      description: "",
      image: "multi_mesa_manicure2.jpg",
      images: [
        "multi_mesa_manicure2.jpg"
      ]
    },
    {
      id: 204,
      name: "Peinadora",
      price: 245,
      description: "",
      image: "multi_mesa_manicure3.jpg",
      images: [
        "multi_mesa_manicure3.jpg"
      ]
    },
    {
      id: 230,
      name: "Juego para cuarto",
      price: 460,
      description: "",
      image: "multi_mesa_chifonier.jpg",
      images: [
        "multi_mesa_chifonier.jpg"
      ]
    },
    {
      id: 206,
      name: "mesa de centro decorativo",
      price: 170,
      description: "",
      image: "multi_mesa_centro2.jpg",
      images: [
        "multi_mesa_centro2.jpg"
      ]
    },
    {
      id: 207,
      name: "mesa de centro",
      price: 160,
      description: "",
      image: "multi_mesa_centro.jpg",
      images: [
        "multi_mesa_centro.jpg"
      ]
    },
    {
      id: 208,
      name: "mesa de centro",
      price: 150,
      description: "",
      image: "multi_mesa_centro3.jpg",
      images: [
        "multi_mesa_centro3.jpg"
      ]
    },
    {
      id: 209,
      name: "Mesa de Manicure S",
      price: 240,
      description: "",
      image: "multi_mesa_manicure_s.jpg",
      images: [
        "multi_mesa_manicure_s.jpg"
      ]
    },
    {
      id: 210,
      name: "Mesa de Manicure M",
      price: 270,
      description: "",
      image: "multi_mesa_manicure_l.jpg",
      images: [
        "multi_mesa_manicure_l.jpg"
      ]
    },
    {
      id: 211,
      name: "Mesa de Manicure L",
      price: 295,
      description: "",
      image: "multi_manicure_l.jpg",
      images: [
        "multi_manicure_l.jpg"
      ]
    },
    {
      id: 212,
      name: "Gavetero Moderno",
      price: 430,
      description: "",
      image: "multi_gavetero.jpg",
      images: [
        "multi_gavetero.jpg"
      ]
    },
    {
      id: 213,
      name: "Gavetero",
      price: 560,
      description: "",
      image: "multi_gavetero2.jpg",
      images: [
        "multi_gavetero2.jpg"
      ]
    },
    {
      id: 214,
      name: "Gavetero",
      price: 400,
      description: "",
      image: "multi_gavetero3.jpg",
      images: [
        "multi_gavetero3.jpg"
      ]
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
      description: "",
      image: "lux.jpg",
      images: [
        "lux.jpg"
      ]
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
        ]
    },
    {
      id: 303,
      name: "LiLy",
      price: 460,
      description: "",
      image: "lily.jpg",
      images: [
        "lily.jpg"
      ]
    },
    {
      id: 304,
      name: "Coral",
      price: 500,
      description: "",
      image: "coral.jpg",
      images: [
        "coral.jpg"
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
      ]
    },
    {
      id: 306,
      name: "Tipo v",
      price: 630,
      description: "",
      image: "Tipo_v.jpg",
      images: [
        "Tipo_v.jpg"
      ]
    },
    {
      id: 307,
      name: "Redondo",
      price: 320,
      description: "",
      image: "redondo.jpg",
      images: [
        "redondo.jpg"
      ]
    },
    {
      id: 308,
      name: "Valentina",
      price: 540,
      description: "",
      image: "valentina.jpg",
      images: [
        "valentina.jpg"
      ]
    },
    {
      id: 309,
      name: "Tipo i",
      price: 540,
      description: "",
      image: "tipo_i.jpg",
      images: [
        "tipo_i.jpg"
      ]
    },
        {
      id: 310,
      name: "Madera",
      price: 540,
      description: "",
      image: "madera.jpg",
      images: [
        "madera.jpg"
      ]
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
      ]
    },
    {
      id: 402,
      name: "Colflex Lady Best",
      price: 230,
      description: "",
      image: "colchon_colflex_lady.PNG",
      images: [
        "colchon_colflex_lady.PNG"
      ]
    },
  ]
}
