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
      image: "zultan_3.PNG",
      images: [
        "zultan_3.PNG",
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
    }
  ],
  dormitorio:[
    {
        id: 101,
        name: "Zultan 2 Puestos",
        price: 460,
        description: "",
        image: "zultan2puestos.PNG",
                images: [
          "mueblel.PNG"
        ]
    }
  ],
  multimueble:[
    {
      id: 201,
        name: "Zultan 2 Puestos",
        price: 460,
        description: "",
        image: "zultan2puestos.PNG",
                images: [
          "mueblel.PNG"
        ]
    }
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
      name: "Isabela",
      price: 460,
      description: "",
      image: "isabela.jpg",
      images: [
        "isabela.jpg"
      ]
    }
  ]
}
