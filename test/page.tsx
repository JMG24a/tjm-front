import Image from "next/image";
import './main.css'
import ScrollAnimation from "./components/scrollEffect";
import NavBar from "./components/NavBar";
import Link from "next/link";
import Login from "./components/Login";


export default function Home() {
    return (
        <body className="main_body">
            <Login/>

        <section>
            <div className="container">
                <header id="navbar">
                    <Link href={'/'} className="main_logo">
                        <Image 
                            src="/Tio-Jaime.png" 
                            alt=""
                            width={'220'}
                            height={'60'}                                
                        />
                    </Link>
                    <NavBar/>

                </header>
                    <div className="content">
                        <h2>Tio Jaime</h2>
                        <p>
                            En Tío Jaime, nos especializamos en transformar 
                            espacios en hogares. Somos una empresa comprometida
                            con nuestros clientes, con más de siete años de
                            experiencia en el mercado, ofreciendo los mejores
                            precios y productos de calidad. Nuestra pasión
                            es diseñar muebles personalizados que se adapten a tus
                            necesidades y estilo, brindando soluciones tanto
                            al mayor como al detal. Nos destacamos por nuestra
                            atención al cliente, entregas puntuales y una amplia
                            variedad de opciones que combinan diseño, comodidad
                            y durabilidad. Ven y descubre cómo podemos ayudarte
                            a crear el espacio que siempre soñaste.
                        </p>
                    </div>
                    <ScrollAnimation>
                        <div className="img scroll-up">
                            <Image src="/silla_principal.png" width="220" height="220" alt="silla"/>
                        </div>
                    </ScrollAnimation>
            </div>
            <div className="home">
                <h2>Equipa tu hogar</h2>
                <div className="container-cards">
                    <div className="cardHome scroll-up">
                        <img src="/comedor.jpg" alt=""/>
                        <h3>Cocina</h3>
                        <p>Haz de tu cocina un lugar lleno de estilo y 
                           eficiencia con nuestra línea de muebles 
                           especialmente diseñados para este espacio. 
                           Contamos con gabinetes modernos que optimizan 
                           el almacenamiento, mesas prácticas para tus 
                           comidas diarias y sillas ergonómicas que aportan 
                           comodidad. Cada pieza está pensada para que 
                           disfrutes al máximo cada momento, ya sea cocinando 
                           o compartiendo con los tuyos.
                        </p>
                    </div>
                    <div className="cardHome scroll-up">
                        <img src="/cama.jpg" alt=""/>
                        <h3>habitaciones</h3>
                        <p>Crea el refugio perfecto para descansar y relajarte
                           con nuestra línea de mobiliario para el dormitorio.
                           Descubre camas elegantes que combinan diseño y 
                           comodidad, cabeceras únicas que realzan el estilo 
                           de tu espacio, y armarios amplios que facilitan la 
                           organización de tus prendas y accesorios. 
                           Todo está diseñado para brindarte un ambiente 
                           armonioso que invite al descanso y al bienestar.
                        </p>
                    </div>
                    <div className="cardHome scroll-up">
                        <img src="/EuroStyle.jpg" alt=""/>
                        <h3>Sala</h3>
                        <p>Convierte tu sala de estar en el centro de 
                           reuniones y momentos especiales con nuestra 
                           colección de muebles. Desde sofás suaves y cómodos 
                           que invitan a relajarte, hasta mesas de centro 
                           funcionales y modernos centros de entretenimiento 
                           que destacan por su diseño contemporáneo. 
                           Crea un espacio cálido y acogedor donde disfrutar 
                           de películas, conversaciones y momentos 
                           inolvidables con familia y amigos.
                        </p>
                    </div>
                    <div className="cardHome scroll-up">
                        <img src="/oficina.jpg" alt=""/>
                        <h3>Oficina</h3>
                        <p>Convierte tu sala de estar en el centro de 
                           reuniones y momentos especiales con nuestra 
                           colección de muebles. Desde sofás suaves y cómodos 
                           que invitan a relajarte, hasta mesas de centro 
                           funcionales y modernos centros de entretenimiento 
                           que destacan por su diseño contemporáneo. 
                           Crea un espacio cálido y acogedor donde disfrutar 
                           de películas, conversaciones y momentos 
                           inolvidables con familia y amigos.
                        </p>
                    </div>
                </div>
                </div>
        </section>
    
        {/* <div className="carousel">
            <div className="carousel-inner">
                <Image src="/slider-1.jpg" alt="Image 1" id="slider-1" width={500} height={300} style={{
                        width: '100%',
                        height: 'auto',
                        flex: '1 0 100%',
                        scrollSnapAlign: 'start',
                        objectFit: 'cover',
                }}/>
                <Image src="/slider-3.jpg" alt="Image 3" id="slider-2" width={500} height={300} style={{
                        width: '100%',
                        height: 'auto',
                        flex: '1 0 100%',
                        scrollSnapAlign: 'start',
                        objectFit: 'cover',
                }}/>
                <Image src="/slider-2.jpg" alt="Image 2" id="slider-3" width={500} height={300} style={{
                        width: '100%',
                        height: 'auto',
                        flex: '1 0 100%',
                        scrollSnapAlign: 'start',
                        objectFit: 'cover',
                }}/>
                <Image src="/slider-4.jpg" alt="Image 4" id="slider-4" width={500} height={300} style={{
                        width: '100%',
                        height: 'auto',
                        flex: '1 0 100%',
                        scrollSnapAlign: 'start',
                        objectFit: 'cover',
                }}/>
            </div>
            <div className="slider-nav">
                <Link href="#slider-1"></Link>
                <Link href="#slider-2"></Link>
                <Link href="#slider-3"></Link>
                <Link href="#slider-4"></Link>
            </div>
        </div> */}
        <footer className="footer">
            <div className="footer_content">
                <section className="footer_main">
                    <Link href="/" className="footer__logo">
                        <Image 
                            src="/Logo-2.png" 
                            alt="Logo" 
                            className="logo__footer"
                            width={500}
                            height={300}
                            style={{

                            }}
                        />
                    </Link>
                    <article className="footer__contact">
                        <h4>Contactanos al:</h4>
                        <p>Telefono: 04120521922</p>
                        <p>Telefono: 04120213946</p>
                        <h4>Ubicanos en:</h4>
                        <p>Lara: Barquisimeto centro carrera 21 con calle 21</p>
                        <p>Yaracuy: San pablo Av.Panamericana</p>
                    </article>
                    <nav className="footer__social">
                        <Link href={"https://wa.me/584120213946"} target="_blank">
                            <Image src="/whatsapp_icon.png" alt="" className="footer__media" width={30} height={30}/>
                        </Link>
                        <Link href="https://www.instagram.com/tiojaimemuebleria" className="footer__social-links" target="_blank">
                            <Image src="/instagram_icon.png" alt="" className="footer__media" width={20} height={20}/>
                        </Link>
    
                    </nav>
                </section>
                <section className="footer__copyright">
                    <p className="footer__copyright-text">
                        &copy; Muebleria Tio Jaime
                    </p>
                </section>
            </div>
        </footer>
    
    </body>
  );
}
