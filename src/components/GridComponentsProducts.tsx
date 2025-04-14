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
                price_old: number
            }
        }
    }
}

export const GridComponentsProducts = ({dollar, products, myAppApi}: propsInterface) => {
    let gr1 = -1, gr2 = 1, gc = 1;

    const onChangeDollar = (price: number):string => {
        const result = dollar.monitors.usd.price_old * price;
        const formatted = new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        minimumFractionDigits: 2
        }).format(result);

        console.log("formatted", formatted); // "Bs. 2.500,00"

        return formatted;
    }

    return(
        <div className="product_grid-container">
            { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                products.map((item: any, count: number) => {
                    const number = count + 1;
                    if (number % 2 !== 0 && number !== 1) {
                        if (gc == 1) {
                            gc = 2
                        } else {
                            gc = 1
                        }
                        gr1 = gr1 + 2;
                        gr2 = gr2 + 2;

                        return (
                            <Link
                                className="item-container"
                                style={{ gridColumn: `${gc}`, gridRow: `${gr1}/${gr2}` }}
                                href={`${myAppApi}/details/${item.id}`}
                                key={count}
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
                    } else {
                        return (
                            <Link
                                className="item-container"
                                href={`${myAppApi}/details/${item.id}`}
                                key={count}
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
                                    <div className="name">{`${item.name}`}</div>
                                    <div className="price">{onChangeDollar(item.price)}</div>
                                </div>
                            </Link>
                        )
                    }
                })}
        </div>
    )
}


