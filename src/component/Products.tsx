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

// interface typeProps {
//   category: string;
// }

const db = {
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
        id: 2,
        name: "Zultan 2 Puestos",
        price: 460,
        image: "zultan2puestos.PNG"
    }
  ]
}

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

export default async function Products() {
    // const priceDollar = await getDollar() 
//   const products = await getProducts(category);

  return (
    <div className={styles.productsGrid}>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {db.sofa.map((product: any) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className={styles.productImage}
          />
          <div className={styles.details}>
            <div className={styles.detailsNamePrice}>
              <p className={styles.productName}>{product.name}</p>
              <p className={styles.productPrice}>{product.price}</p>
            </div>
            <Image src={"/WhatsApp.svg.webp"} alt="WhatsApp" width={40} height={40} />
          </div>
        </div>
      ))}
    </div>
  );
}
