import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";

type Producto = {
  id: string;
  price: number;
  nombre: string;
  category: string;
  descripcion: string;
  imagenUrl: string;
};

async function obtenerProducto(id: string, category: string): Promise<Producto> {
  return {
    id,
    price: 780,
    nombre: "Zapato",
    category: category,
    descripcion: "Zapatos ligeros, cómodos y duraderos para correr.",
    imagenUrl: "/zultan_1.PNG",
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const producto = await obtenerProducto(params.id, params.products);
  return {
    title: producto.nombre,
    description: producto.descripcion,
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Page({ params }: any) {
  const producto = await obtenerProducto(params.id, params.products);

  return (
    <main className="main">
      <div className="carousel">
        <div className="carousel-track">
          <img src="/zultan_1.PNG" alt="foto 1" />
          <img src="/zultan_3.PNG" alt="foto 2" />
        </div>
      </div>

      <div className="container">
        <div className="container_main-product">
          <h2 className="title">{producto.nombre}</h2>
          <p className="description">{producto.descripcion}</p>
          <p className="description">${producto.price}</p>

          <div className="whatsapp-link">
            <a
              href="https://wa.me/00000000000"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Whatsapp
            </a>
          </div>
        </div>

        <div className="productsGrid">
          <div className="productCard">
            <Link href="/">
              <Image
                src="/maya.PNG"
                alt={producto.nombre}
                width={200}
                height={200}
                className="productImage"
              />
            </Link>
            <div className="details">
              <div className="details_container">
                <p className="productName">{producto.nombre}</p>
                <div className="detailsNamePrice">
                  <p className="productPrice">${producto.price}</p>
                  <Image
                    src="/WhatsApp.svg.webp"
                    alt="WhatsApp"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
