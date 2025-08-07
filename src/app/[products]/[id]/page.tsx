import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./styles.css";
import {db, Product, suggest} from "../../db";
import Banner from "../../../component/Banner";

type Producto = {
  id: number;
  price: number;
  name: string;
  category: string;
  description: string;
  image: string;
  images: string[],
  associations: suggest[],
  tag: string[]
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

async function obtenerProducto(id: number, category: string): Promise<Producto> {
  let product: Product = {
    id: 4,
    price: 780,
    name: "mueble",
    category: category,
    description: "Muebles fabricados por profecionales, y materiales de primera",
    image: `/zultan_1.PNG`,
    images: [],
    associations: [],
    tag: []
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
    associations: product.associations,
    tag: product.tag,
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
  // const myapi = process.env.NEXT_PUBLIC_API_URL || "";
  const mensaje = `https://tjm-front.vercel.app/${producto.category}/${producto.id}
Hola, @tiojaimemuebleria me gustaría saber más sobre este producto:`

  const dollar = await getDollar();

  const onChangeDollar = (price: number):string => {
    const priceNumber = Number(price)
    const dollarWhitGlobal = priceNumber;
    const result = dollar.monitors.usd.price * dollarWhitGlobal;
    const formatted = new Intl.NumberFormat('es-VE', {
    style: 'currency',
    currency: 'VES',
    minimumFractionDigits: 2
    }).format(result);

    // console.log("formatted + priceGlobal", formatted, priceGlobal); // "Bs. 2.500,00"
    return formatted;
  }


  return (
    <main className="main">
      <Banner
        images={producto.images}
      />

      <Link href="/" className="buttonHome">
        <Image src={"/back.webp"} width={35} height={35} alt="go back"/>
      </Link>

      <div className="container">
        <div className="container_main-product">
          <h2 className="title">{producto.name}</h2>
          <p className="description">{producto.description}</p>
          <p className="price">{onChangeDollar(producto.price)}</p>

          <p className="caracteristicas">Caracteristicas</p>

          <div className="gridContainers">
            {producto.tag.map((item, key)=>{
              return(
                <p key={key}>{item}</p>
              )
            })}
          </div>

          <div className="whatsapp-link">
            <Link
              href={`https://wa.me/584120213946?text=${encodeURIComponent(mensaje)} ${producto.name}-${producto.price}`}
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
      <div>
        {producto.associations.length > 0 ?
          <div>
            <p className="caracteristicas">Sugerencias</p>
            <div className="productsGrid">
              {producto.associations.map((item, key)=>{
                return(
                  <div key={key}>
                    <div>
                      <Image
                        src={`/${item.image}`}
                        alt={item.name}
                        width={200}
                        height={200}
                        className={`productImage`}
                      />
                    </div>
                    <div className={`details`}>
                      <div className={`details_container`}>
                        <p className={`productName`}>{item.name}</p>
                        <div className={`detailsNamePrice`}>
                          {/* <p className="productPrice">${item.price}</p> */}
                          <Link
                            href={`https://wa.me/584120213946?text=${encodeURIComponent(mensaje)} ${item.name}-${item.price}`}
                            target="_blank"
                          >
                            <Image src={"/WhatsApp.svg.webp"} alt="WhatsApp" width={40} height={40} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          :
          <></>
          }
        </div>
      </div>
    </main>
  );
}
