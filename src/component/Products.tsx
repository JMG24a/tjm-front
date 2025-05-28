"use client"
import Link from 'next/link';
import styles from "../app/Home.module.css";
import Image from 'next/image';

const products2 = Array(4).fill({
  name: "Zultan 2 puestos",
  price: "Bs 1500",
  imageUrl: "/sofa.jpg",
});

interface typeProducts {
    products: [
        {
            category: string,
            createdAt: string,
            description: string,
            id: string,
            image: string,
            name: string,
            price: string,
            size: string
        }
    ]
}

const Products = ({products}:typeProducts) => {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    console.log('products', products)
  return (
      <div className={styles.productsGrid}>
        {products.map((product, key) => (
          <div key={key} className={styles.productCard}>
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
                <Image
                    src={'/wp.png'}
                    alt={product.name}
                    width={50}
                    height={50}
                />
            </div>
          </div>
        ))}
      </div>
  );
};

export default Products;