"use client";

interface propsInterface {
    product: {
        name: string,
        description: string,
        size: string,
        price: number,
    },
    dollar: {
        monitors: {
            usd: {
                price: number
                price_old: number
            }
        }
    }
}

export const DetailsContext = ({product, dollar}: propsInterface) => {

    const onChangeDollar = (price: number):string => {
        const result = dollar.monitors.usd.price * price;
        const formatted = new Intl.NumberFormat('es-VE', {
        style: 'currency',
        currency: 'VES',
        minimumFractionDigits: 2
        }).format(result);

        return formatted;
    }

    return(
        <div className="container-content">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p><b>Tamaño</b>: {product.size}</p>
            <p>{onChangeDollar(product.price)}</p>
        </div>
    )
}


