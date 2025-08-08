// app/page.tsx

import Image from "next/image";
import styles from "./Home.module.css";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import "../component/dropDownButton.css";
import {RandomOptionsWs} from "../component/RandomOptionsWs";
import Link from "next/link";

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

      <div className={"menu"}>
        <div>
          <Link href={"https://www.instagram.com/tiojaimemuebleria/"} target='_blank'>
            <Image src={"/Instagram_logo_2022.svg.webp"} height={25} width={25} alt='redirect'/>
          </Link>
        </div>
        <div>
          <RandomOptionsWs>
            <Image src={"/WhatsApp.svg.webp"} height={30} width={30} alt='redirect' />
          </RandomOptionsWs>

          {/* <Link href={"https://wa.me/584120213946"} target='_blank'>
          </Link> */}
        </div>
      </div>

      {/* <DropdownButton /> */}

      <Products category={category || "sofa"} />
    </div>
  );
}
