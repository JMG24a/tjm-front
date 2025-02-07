import Link from "next/link";
import './style.css'
import BackPage from '../../../components/BackPage';

interface itemsProps{
    params:{
        id: string
    }
}

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


export default async function items(props: itemsProps) {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const { id } = (await props.params)
    const product = await getProduct(id);
    const images = await getImages(id);
    const suggestions = await getSuggest(id);
    let gr1 = -1, gr2 = 1, gc = 1;

    return (
<body>
    
    <div className="container">
        <div className="arrow">
            <BackPage/>
        </div>
        <div className="container-items">

                <div className="carousel">
                    <div className="carousel-inner">
                        <img src={product.image} alt=""/>   
                        {images.map((item: any) => (
                            <img src={item.image} alt=""/>
                        ))}
                    </div>
                </div>

                <div className="duttons">
                    <button id="prev"> {'<'} </button>
                    <button id="next"> {'>'} </button>
                </div>

            <div className="container-content">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>cm {product.size}</p>
                <p>{product.price}$</p>
            </div>
        </div>
    </div>

    <h3>mas para explorar</h3>

    <div className="grid-container">
                {suggestions.map((item: any, count: number)=>{
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
                                    <img src={`${item.suggest.image}`} alt="Item Image"/>
                                    <div className="details">
                                        <div className="name">{item.suggest.name}</div>
                                        <div className="price">{item.suggest.price}$</div>
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
                                <img src={`${item.suggest.image}`} alt="Item Image"/>
                                <div className="details">
                                    <div className="name">{`${item.suggest.name}`}</div>
                                    <div className="price">{item.suggest.price}$</div>
                                </div>
                            </Link>
                        )
                    }
                })}
            </div>
    </body>
    )
}