"use client";

import Image from "next/image";
import Link from "next/link";

interface propsInterface {
    products: [{
        image: string,
        name: string,
        id: number
    }],
    myAppApi: string,
    dollar: {
        monitors: {
            usd: {
                price: number,
                price_old: number
            }
        }
    }
}

export const GridComponentsProducts = ({dollar, products, myAppApi}: propsInterface) => {
    let count = 0;
    let rs=0, rf=3
    let flat = false;
    let col = true;

    const onChangeDollar = (price: number):string => {
        console.log("🚀 ~ onChangeDollar ~ dollar.monitors.usd.price:", dollar.monitors.usd.price)
        const result = dollar.monitors.usd.price * price;
        const formatted = new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        minimumFractionDigits: 2
        }).format(result);

        return formatted;
    }

    return(
        <div className="product_grid-container">
            { // eslint-disable-next-line @typescript-eslint/no-explicit-any
products.map((item: any, key: number)=>{
    const column = col ? 1 : 2;
    if(count === 0){
        count++
        col = false;
        flat = !flat;
        rs++;
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
        )
    }
    
    if(count < 3 && !col){
        if(flat){
            rf--;
            flat = !flat;
            count++
            console.log("col 2", `${rs}/${rf}`);
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
        rf++;
        rs++;
        console.log("col 2", `${rs}/${rf}`);
        count++
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
    }else if(!col){
        rf = rf + 2;
        rs++;
        console.log("col 2", `${rs}/${rf}`);
        count = 1;
        col = !col
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

    if(count < 3 && col){
        if(flat){
            rf--;
            flat = !flat;
            count++
            console.log("col 1", `${rs}/${rf}`);
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
        rf++;
        rs++;
        console.log("col 1", `${rs}/${rf}`);
        count++
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
    }else if(col){
        rf = rf + 2;
        rs++;
        console.log("col 1", `${rs}/${rf}`);
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
        </div>
    )
}