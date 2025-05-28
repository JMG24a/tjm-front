import Image from "next/image";
import styles from "./Home.module.css";
import Navbar from "../component/navbar"
import Products from "../component/Products"

type Props = {
  searchParams: {
    category?: string;
  };
};

export default function HomePage({ searchParams }: Props) {

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
      <Products />
    </div>
  );
}
