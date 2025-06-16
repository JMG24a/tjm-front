// app/page.tsx

import Image from "next/image";
import styles from "./Home.module.css";
import Navbar from "../component/Navbar";
import Products from "../component/Products";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function HomePage({ searchParams }: any) {
  const category =
    typeof searchParams?.category === "string" ? searchParams.category : undefined;

  return (
    <div>
      <div className="w-full">
        <Image
          src="/frame_327.png"
          alt="Imagen representativa del negocio"
          width={900}
          height={200}
          className={styles.banner}
        />
      </div>

      <Navbar />

      <Products category={category || "sofa"} />
    </div>
  );
}
