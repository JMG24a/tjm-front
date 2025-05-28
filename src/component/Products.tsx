"use client"
import styles from "../app/Home.module.css";
import Image from 'next/image';

const products2 = Array(4).fill({
  name: "Zultan 2 puestos",
  price: "Bs 1500",
  imageUrl: "/sofa.jpg",
});

interface typeProduct {
    category: string,
    createdAt: string,
    description: string,
    id: string,
    image: string,
    name: string,
    price: string,
    size: string
}

interface typeProps {
    category: string
}

const getDollar  = async () => {
    const response = await fetch("https://pydolarve.org/api/v1/dollar?page=bcv&format_date=default&rounded_price=true",{
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json'
          },
    });
    const data = await response.json();
    return data;
}

const getGlobalPrice  = async () => {
    const secretKey = process.env.API_SECRET_KEY;
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const response = await fetch(`${backApi}/api/v1/products?category=global`,{
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'api': `${secretKey}`, 
          },
    });
    const data = await response.json();
    return data;
}

const getProducts  = async ({category}: typeProps) => {
    const secretKey = process.env.API_SECRET_KEY;
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const response = await fetch(`${backApi}/api/v1/products?category=${category}`,{
        method: 'GET', 
        headers: {
            'Content-Type': 'application/json',
            'api': `${secretKey}`, 
          },
    });
    const data = await response.json();
    return data;
}

const Products = async ({category}:any) => {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;

    const [products, dollar, price] = await Promise.all([
      getProducts(category),
      getDollar(),
      getGlobalPrice()
    ]);

  return (
      <div className={styles.productsGrid}>
        {products.map((product: typeProduct, key:any) => (
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