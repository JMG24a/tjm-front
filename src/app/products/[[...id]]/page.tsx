import './style.css'
import NavBar from "../../../components/NavBar";
import Link from 'next/link';

interface itemsProps{
    params:{
        id: string
    }
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

export default async function items(props: itemsProps) {
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
                <a href="/" className="logo"><img src="/Tio-Jaime.png" alt=""/></a>
                <NavBar/>
            </header>

            <div className="grid-container">
                {products.map((item: any, count: number)=>{
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
                            >
                                    <img src={`${item.image}`} alt="Item Image"/>
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
                            >
                                <img src={`${item.image}`} alt="Item Image"/>
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