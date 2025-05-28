import './style.css'
import BackPage from '../../components/BackPage';
import Image from "next/image";
import ConfigProduct from "../../components/ConfigProduct";
import { DetailsContext } from "../../components/DetailsContext";
import { GridComponents } from "../../components/GridComponents";

const getImages = async (id: string) => {
    const secretKey = process.env.API_SECRET_KEY;
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const response = await fetch(`${backApi}/api/v1/images/${id}`,
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'api': `${secretKey}`, 
            },
        }
    );

    const data = await response.json();
    return data;
}

const getProduct  = async (id: string) => {
    const secretKey = process.env.API_SECRET_KEY;
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const response = await fetch(`${backApi}/api/v1/products/${id}`,
        {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
                'api': `${secretKey}`, 
            },
        }
    );
    const data = await response.json();
    return data;
}

const getSuggest  = async (id: string) => {
    const secretKey = process.env.API_SECRET_KEY;
    const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
    const response = await fetch(`${backApi}/api/v1/suggest/${id}`,
    {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function items(props: any) {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const { id } = (await props.params)
    const product = await getProduct(id);

    const [products, images, suggestions, dollar, price] = await Promise.all([
        getProducts(product.category),
        getImages(id),
        getSuggest(id),
        getDollar(),
        getGlobalPrice()
    ]);



    return (
    <div>
    
        <div className="details_container">
            <div className="arrow">
                <BackPage
                    src={'/arrow-left.png'}
                    alt={'volver'}
                    width={50}
                    height={50}
                    type={`/products/${product.category}`}
                />
            </div>
            <div className="container-items">
                <div className="details_carousel">
                    <div className="details_carousel-inner">
                        <Image
                            src={product.image}
                            alt="Imagen personalizada"
                            width={500}
                            height={300}
                            style={{
                                width: '100%',
                                height: 'auto',
                                objectFit: 'cover',
                                flex: '1 0 100%',
                                scrollSnapAlign: 'start',
                            }}
                        />   
                        { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        images.map((item: any, count: number) => (
                            <Image 
                                src={item.image}
                                key={count}
                                alt="Imagen personalizada"
                                width={500}
                                height={300}
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    flex: '1 0 100%',
                                    scrollSnapAlign: 'start',
                                }}
                            />
                        ))}
                    </div>
                    
                    <ConfigProduct 
                        id={id} 
                        type={`/products/${product.category}`}
                        info={product}
                        images={images}
                    />

                </div>

                <div className="duttons">
                    <button id="prev"> {'<'} </button>
                    <button id="next"> {'>'} </button>
                </div>

                <DetailsContext
                    product={product}
                    dollar={dollar}
                />
            </div>
        </div>

        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>mas para explorar</h3>

        <GridComponents
            dollar={dollar}
            myAppApi={`${myAppApi}`}
            product={product}
            suggestions={suggestions}
            products={products}
            id={id}
            priceGlobal={price[0].price}
        />
    </div>
    )
}