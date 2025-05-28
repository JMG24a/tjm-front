import Image from "next/image";
import styles from "./Home.module.css";
import Navbar from "../component/navbar"
import Products from "../component/Products"

type Props = {
  searchParams: {
    category: string;
  };
};

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

const getProducts  = async (category: string) => {
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

export default async function HomePage({ searchParams }: Props) {

    const [products, dollar, price] = await Promise.all([
      getProducts(searchParams.category),
      getDollar(),
      getGlobalPrice()
    ]);

  return (
    <div>
      {/* Imagen representativa */}
      <div className="w-full">
        <Image
          src="/started.jpg"
          alt="Imagen representativa del negocio"
          width={900}
          height={200}
          className={styles.banner}
        />
      </div>

      {/* Categorías navbar */}
      <Navbar/>

      {/* Rejilla de productos */}
      <Products
        products={products}
      />
    </div>
  );
}
