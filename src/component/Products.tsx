import styles from "../app/Home.module.css";
import Image from "next/image";
import {db} from "../app/db";
import Link from "next/link";

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



// Categorías válidas (clave del objeto `db`)
type Category = keyof typeof db; // "sofa" | "dormitorio" | "multimueble" | "comedor" | "colchones"



type typeProps = {
  category?: Category;
};

export default async function Products({category}:typeProps) {
  const categories: Category = (category && category in db ? category : "sofa") as Category;
    // const priceDollar = await getDollar()
    //   const products = await getProducts(category);

    const myapi = process.env.NEXT_PUBLIC_API_URL || ""

  return (
    <div className={styles.productsGrid}>
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any*/}
      {db[categories].map((product) => (
        <div key={product.id} className={styles.productCard}>
          <Link href={`${myapi}/${categories}/${product.id}`}>
            <Image
              src={product.image}
              alt={product.name}
              width={200}
              height={200}
              className={styles.productImage}
              />
          </Link>
          <div className={styles.details}>
            <div className={styles.details_container}>
              <p className={styles.productName}>{product.name}</p>
              <div className={styles.detailsNamePrice}>
                <p className={styles.productPrice}>${product.price}</p>
                <Link
                  href={`https://wa.me/584120213946?text=https://tjm-front.vercel.app/${categories}/${product.id}`}
                  target="_blank"
                >
                  <Image src={"/WhatsApp.svg.webp"} alt="WhatsApp" width={40} height={40} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
