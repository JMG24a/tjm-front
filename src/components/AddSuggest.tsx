'use client'
import Image from "next/image"
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"

interface propsType {
    products:[{
        image: string,
        name: string,
        id: number
    }],
    id:string,
    type:string,
}

export const AddSuggest = ({products, id, type}:propsType) => {
    const [token, setToken] = useState<string | null>(null);
    let gr1 = -1, gr2 = 1, gc = 1;
    const router = useRouter();
    const [modalState, setModalState] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
          const savedToken = localStorage.getItem('token');
          setToken(savedToken);
        }
      }, []);

    const addSuggestModal = () => {
        setModalState(!modalState)
    }

    const handleBack = () => {
        if (window.history.length > 1) {
          router.push(type);
        } else {
          router.push('/'); // Redirige a la página principal si no hay historial
        }
      };

    const handleSuggest = async (idSuggest:string) => {
        const backApi = process.env.NEXT_PUBLIC_API_BACK_URL;
        // const data = {
        //     idProduct: 7,
        //     idSuggest
        // }
        // console.log("🚀 ~ handleSuggest ~ data:", data)
        try {   
          const response = await fetch(`${backApi}/api/v1/suggest`, {
              method: 'POST',
              headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                idProduct: id[0],
                idSuggest
              }),
              credentials: 'include'
          });
          const sesult = await response.json();
          console.log("data2", sesult)
          handleBack()
        } catch (error) {
            console.error("Error:", error);
        }
    }

    if(token){
        return(
            <>
                <div className="item-container" style={{border: "solid 1px"}} onClick={addSuggestModal}>
                    <Image 
                        src={`/plus_add.png`} 
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
                        <div className="name">Agregar</div>
                        <div className="price">Sugerencia</div>
                    </div>
                </div>

                {modalState && (
                    <div className="add_suggest--modal">
                        <button onClick={addSuggestModal} className="add_suggest--button-cancel">X</button>
                        <h3 className="add_suggest--title">Agregar Sugerencia</h3>
                        <div className="add_grid_container--products">
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
                                        <div 
                                            className="item-container" 
                                            style={{  gridColumn: `${gc}`, gridRow: `${gr1}/${gr2}`}} 
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
                                                <div className="details" style={{textAlign: "center"}}>
                                                    <div className="name">{item.name}</div>
                                                    <div 
                                                        className="name"
                                                        onClick={()=>handleSuggest(item.id)}
                                                    >
                                                        Agregar
                                                    </div>
                                                </div>
                                        </div>
                                    )
                                }else{
                                    return(
                                        <div 
                                            onClick={()=>handleSuggest(item.id)}
                                            className="item-container"
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
                                            <div className="details" style={{textAlign: "center"}}>
                                                <div className="name">{item.name}</div>
                                                <div 
                                                    className="name"
                                                    onClick={()=>handleSuggest(item.id)}
                                                >
                                                    Agregar
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
                        </div>
                    </div>
                )}
            </>
        )
    }
}




