import './style.css'
import NavBar from "../../../components/NavBar";
import Link from 'next/link';
import Image from 'next/image';

// interface itemsProps{
//     params:{
//         id: string
//     }
// }

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
    const { id } = (await props.params)
    const products = await getProducts(id);
    let gr1 = -1, gr2 = 1, gc = 1;

    console.log('props', id)
    console.log(products)
    return (
        <body>
            <div className="bubble bubble-1"></div>
            <div className="bubble bubble-2"></div>
            <header id="navbar">
                <Link href="/" className="logo">
                    <Image 
                        src="/Tio-Jaime.png" 
                        alt="" 
                        width={'220'}
                        height={'60'}
                    />
                </Link>
                <NavBar/>
            </header>

            <div className="grid-container">
                { // eslint-disable-next-line @typescript-eslint/no-explicit-any
                products.map((item: any, count: number)=>{
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
                                        <div className="price">{item.price}$</div>
                                    </div>
                            </Link>
                        )
                    }else{
                        return(
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
                                    <div className="price">{item.price}$</div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
        </body>
    )
}