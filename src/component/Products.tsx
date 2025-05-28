import styles from "../app/Home.module.css";
import Image from "next/image";

interface typeProduct {
  category: string;
  createdAt: string;
  description: string;
  id: string;
  image: string;
  name: string;
  price: string;
  size: string;
}

interface typeProps {
  category: string;
}

const getProducts = async (category: string) => {
  const secretKey = process.env.API_SECRET_KEY;
  const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
  const res = await fetch(`${backApi}/api/v1/products?category=${category}`, {
    headers: {
      "Content-Type": "application/json",
      api: secretKey!,
    },
    next: { revalidate: 60 }, // ✅ ISR para evitar fetch en cada request
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export default async function Products({ category }: typeProps) {
  const products = await getProducts(category);

  return (
    <div className={styles.productsGrid}>
      {products.map((product: typeProduct) => (
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.name}
            width={200}
            height={200}
            className={styles.productImage}
          />
          <div className={styles.details}>
            <div>
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
