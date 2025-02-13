import Link from "next/link";
import './style.css'
import BackPage from '../../../components/BackPage';
import Image from "next/image";

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function items(props: any) {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    const { id } = (await props.params)
    const product = await getProduct(id);
    const images = await getImages(id);
    const suggestions = await getSuggest(id);
    let gr1 = -1, gr2 = 1, gc = 1;

    return (
<body>
    
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