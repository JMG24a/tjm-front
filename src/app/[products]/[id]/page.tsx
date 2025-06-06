import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import {db, Product} from "../../db";
import Banner from "../../../component/Banner";

type Producto = {
  id: number;
  price: number;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[]
};

async function obtenerProducto(id: number, category: string): Promise<Producto> {
  let product: Product = {
    id: 4,
    price: 780,
    name: "mueble",
    category: category,
    description: "Muebles fabricados por profecionales, y materiales de primera",
    image: `/zultan_1.PNG`,
    images: []
  }

  db[category].map((item)=>{
    if(item.id == id){
      product = item;
    }
  })

  return {
    id: product.id,
    price: product.price,
    name: product.name,
    category: category,
    description: product.description,
    image: product.image,
    images: product.images,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const producto = await obtenerProducto(params.id, params.products);
  return {
    title: producto.name,
    description: producto.description,
    openGraph: {
      title: producto.name,
      description: producto.description,
      url: `https://tjm-front.vercel.app/${producto.category}/${producto.id}`,
      images: [
        {
          url: `https://tjm-front.vercel.app/${producto.image}`, // asegúrate de que sea una ruta válida
          width: 1200,
          height: 630,
          alt: producto.name,
        },
      ],
      siteName: 'TJM Front',
      type: 'website',
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const producto = await obtenerProducto(params.id, params.products);
    const myapi = process.env.NEXT_PUBLIC_API_URL || ""
  return (
    <main className="main">
      <Banner
        images={producto.images}
      />
      {/* <div className="carousel">
        <div className="carousel-track">
          <img src="/zultan_1.PNG" alt="foto 1" />
          <img src="/zultan_3.PNG" alt="foto 2" />
        </div>
      </div> */}

      <div className="container">
        <div className="container_main-product">
          <h2 className="title">{producto.name}</h2>
          <p className="description">{producto.description}</p>
          <p className="price">${producto.price}</p>

          <div className="whatsapp-link">
            <Link
              href={`https://wa.me/584120213946?text=https://tjm-front.vercel.app/${producto.category}/${producto.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
              <Image
                src="/WhatsApp.svg.webp"
                alt="WhatsApp"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>

        <div className="productsGrid">
          <div className="productCard">
            <Link href={`${myapi}/${producto.category}/${producto.id}`}>
              <Image
                src="/maya.PNG"
                alt={producto.name}
                width={200}
                height={200}
                className="productImage"
              />
            </Link>
            <div className="details">
              <div className="details_container">
                <p className="productName">{producto.name}</p>
                <div className="detailsNamePrice">
                  <p className="productPrice">${producto.price}</p>
                <Link
                  href={`https://wa.me/584120213946?text=https://tjm-front.vercel.app/${producto.category}/${producto.id}`}
                  target="_blank"
                >
                  <Image
                    src="/WhatsApp.svg.webp"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                  />
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
