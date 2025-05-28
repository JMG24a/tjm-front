import './style.css'
import NavBar from "../../components/NavBar";
import Link from 'next/link';
import Image from 'next/image';
import AddProduct from '../../components/AddProduct';
import { GridComponentsProducts } from '../../components/GridComponentsProducts';
import PriceGlobal  from '../../components/PriceGlobal';

// interface itemsProps{
//     params:{
//         id: string
//     }
// }

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function items(props: any) {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const { id } = (await props.params);
    const [products, dollar, price] = await Promise.all([
        getProducts(id),
        getDollar(),
        getGlobalPrice()
    ]);

    return (
        <div>
            <AddProduct/>
            <PriceGlobal info={price}/>
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <header id="navbar">
                <Link href={'/'} className="logo">
                    <Image 
                        src="/Tio-Jaime.png" 
                        alt="" 
                        width={'220'}
                        height={'60'}
                        style={{margin: "0 auto"}}
                    />
                </Link>
                <NavBar/>
            </header>

            <GridComponentsProducts
                dollar={dollar}
                myAppApi={`${myAppApi}`}
                products={products}
                priceGlobal={price[0].price}
            />
        </div>
    )
}