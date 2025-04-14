"use client";

import Image from "next/image";
import Link from "next/link";
import { AddSuggest } from "./AddSuggest";

interface propsInterface {
    id: string,
    products: [{
        image: string,
        name: string,
        id: number
    }],
    product: {
        name: string,
        description: string,
        size: string,
        price: number,
        category: string
    },
    myAppApi: string,
    suggestions: [{
        suggest:{
            id: number,
			name: string,
			price: string,
			image: string
        }
    }],
    dollar: {
        monitors: {
            usd: {
                price: number
                price_old: number
            }
        }
    }
}

export const GridComponents = ({id, dollar, products, suggestions, product, myAppApi}: propsInterface) => {
    let gr1 = -1, gr2 = 1, gc = 1;

    const onChangeDollar = (price: number):string => {
        const result = dollar.monitors.usd.price * price;
        const formatted = new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        minimumFractionDigits: 2
        }).format(result);

        console.log("formatted", formatted); // "Bs. 2.500,00"

        return formatted;
    }

    return(
        <div className="grid-container">
                { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                suggestions.map((item: any, count: number)=>{
                    const number = count + 1;
                    if(number % 2 !== 0 && number !== 1){
                        if(gc == 1){
                            gc = 2
                        }else{
                            gc = 1
                        }
                        gr1 = gr1 + 2;
                        gr2 = gr2 + 2; 

                        return(
                            <Link 
                                className="item-container" 
                                style={{  gridColumn: `${gc}`, gridRow: `${gr1}/${gr2}`}} 
                                href={`${myAppApi}/details/${item.suggest.id}`}
                                key={count}
                            >
                                    <Image 
                                        src={`${item.suggest.image}`} 
                                        key={count}
                                        alt="Imagen personalizada"
                                        width={500}
                                        height={300}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            borderRadius: '8px',
                                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                        }}
                                    />
                                    <div className="details">
                                        <div className="name">{item.suggest.name}</div>
                                        <div className="price">{onChangeDollar(item.suggest.price)}</div>
                                    </div>
                            </Link>
                        )
                    }else{
                        return(
                            <Link 
                                className="item-container"
                                href={`${myAppApi}/details/${item.suggest.id}`}
                                key={count}
                            >
                                <Image 
                                    src={`${item.suggest.image}`} 
                                    key={count}
                                    alt="Imagen personalizada"
                                    width={500}
                                    height={300}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                                <div className="details">
                                    <div className="name">{`${item.suggest.name}`}</div>
                                    <div className="price">{onChangeDollar(item.suggest.price)}</div>
                                </div>
                            </Link>
                        )
                    }
                })}
                <AddSuggest products={products} id={id} type={`/products/${product.category}`}/>
            </div>
    )
}


