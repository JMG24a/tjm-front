// Tipos de productos
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category?: string,
  description?: string,
};


export const db: Record<string, Product[]> = {
  sofa: [
    {
        id: 1,
        name: "Zultan",
        price: 780,
        image: "zultan_3.PNG"
    },
    {
        id: 2,
        name: "Mueble L",
        price: 460,
        image: "mueblel.PNG"
    },
      {
        id: 3,
        name: "Juego Zuisa",
        price: 460,
        image: "zultan2puestos.PNG"
    },
    {
        id: 5,
        name: "Fenix",
        price: 460,
        image: "fenix.PNG"
    },
    {
      id: 6,
      name: "Roma",
      price: 1400,
      image: "Roma.PNG"
    },
    {
      id: 7,
      name: "Maya",
      price: 1600,
      image: "maya.PNG"
    }
  ],
  dormitorio:[
    {
        id: 101,
        name: "Zultan 2 Puestos",
        price: 460,
        image: "zultan2puestos.PNG"
    }
  ],
  multimueble:[
    {
      id: 201,
        name: "Zultan 2 Puestos",
        price: 460,
        image: "zultan2puestos.PNG"
    }
  ],
    comedor:[
    {
      id: 301,
        name: "Zultan 2 Puestos",
        price: 460,
        image: "zultan2puestos.PNG"
    }
  ],
      colchones:[
    {
      id: 401,
        name: "Zultan 2 Puestos",
        price: 460,
        image: "zultan2puestos.PNG"
    }
  ]
}
