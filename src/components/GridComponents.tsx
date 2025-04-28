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
    },
    priceGlobal: {
        price: number
    }
}

export const GridComponents = ({id, dollar, products, suggestions, product, myAppApi, priceGlobal}: propsInterface) => {
    let count = 0;
    let rs=0, rf=3
    let flat = false;
    let col = true;

    const onChangeDollar = (price: number):string => {
        const globalPriceNumber = Number(priceGlobal)
        const priceNumber = Number(price)
        const dollarWhitGlobal = priceNumber + globalPriceNumber;
        const result = dollar.monitors.usd.price * dollarWhitGlobal;

        const formatted = new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        minimumFractionDigits: 2
        }).format(result);
        return formatted;
    }

    return(
        <div className="grid-container">
                { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                suggestions.map((item: any, key: number)=>{
                const column = col ? 1 : 2;
                if(count === 0){
                    count++
                    col = false;
                    flat = !flat;
                    rs++;
                    return(
                        <Link 
                            className="item-container" 
                            style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                }
                
                if(count < 3 && !col){
                    if(flat){
                        rf--;
                        flat = !flat;
                        count++
                        return (
                            <Link 
                                className="item-container" 
                                style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                        );
                    }
                    rf++;
                    rs++;
                    count++
                    return (
                        <Link 
                            className="item-container" 
                            style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                    );
                }else if(!col){
                    rf = rf + 2;
                    rs++;
                    console.log("col 2",col, `${rs}/${rf}`);
                    count = 1;
                    col = !col
                    flat = !flat;
                    return (
                        <Link 
                            className="item-container" 
                            style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                    );
                }
            
                if(count < 3 && col){
                    if(flat){
                        rf--;
                        flat = !flat;
                        count++
                        return (
                            <Link 
                                className="item-container" 
                                style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                        );
                    }
                    rf++;
                    rs++;
                    console.log("col 1",col, `${rs}/${rf}`);
                    count++
                    return (
                        <Link 
                            className="item-container" 
                            style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }} 
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
                    );
                }else if(col){
                    rf = rf + 2;
                    rs++;
                    console.log("col 1",col, `${rs}/${rf}`);
                    count = 1;
                    col = !col;
                    flat = !flat;
                    return (
                        <Link
                            className="item-container"
                            style={{ gridColumn: `${column}`, gridRow: `${rs}/${rf}` }}
                            href={`${myAppApi}/details/${item.id}`}
                            key={key}
                        >
                            <Image
                                src={`${item.image}`}
                                alt="Item Image"
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
                                <div className="name">{item.name}</div>
                                <div className="price">{onChangeDollar(item.price)}</div>
                            </div>
                        </Link>
                    );
                }
            })}
                <AddSuggest products={products} id={id} type={`/products/${product.category}`}/>
            </div>
    )
}

