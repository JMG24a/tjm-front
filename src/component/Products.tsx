import styles from "../app/Home.module.css";
import Image from "next/image";

// interface typeProduct {
//   category: string;
//   createdAt: string;
//   description: string;
//   id: string;
//   image: string;
//   name: string;
//   price: string;
//   size: string;
// }

// interface typedb {
//     id: number;
//     name: string;
//     price: string;
//     image: string;
// }

// const getProducts = async (category: string) => {
//   const secretKey = process.env.API_SECRET_KEY;
//   const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
//   const res = await fetch(`${backApi}/api/v1/products?category=${category}`, {
//     headers: {
//       "Content-Type": "application/json",
//       api: secretKey!,
//     },
//     next: { revalidate: 60 }, // ✅ ISR para evitar fetch en cada request
//   });

//   if (!res.ok) throw new Error("Failed to fetch products");

//   return res.json();
// };

// const getDollar  = async () => {
//     const response = await fetch("https://pydolarve.org/api/v1/dollar?page=bcv&format_date=default&rounded_price=true",{
//         method: 'GET', 
//         headers: {
//             'Content-Type': 'application/json'
//           },
//     });
//     const data = await response.json();
//     return data;
// }

// Tipos de productos
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

// Categorías válidas (clave del objeto `db`)
type Category = keyof typeof db; // "sofa" | "dormitorio" | "multimueble" | "comedor" | "colchones"

const db: Record<string, Product[]> = {
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

type typeProps = {
  category?: Category;
};

export default async function Products({category}:typeProps) {
  const categories: Category = (category && category in db ? category : "sofa") as Category;
    // const priceDollar = await getDollar() 
    //   const products = await getProducts(category);

  return (
    <div className={styles.productsGrid}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {db[categories].map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className={styles.productImage}
          />
          <div className={styles.details}>
            <div className={styles.details_container}>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.detailsNamePrice}>
                <p className={styles.productPrice}>${product.price}</p>
                <Image src={"/WhatsApp.svg.webp"} alt="WhatsApp" width={40} height={40} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
