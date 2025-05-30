"use client"
import Link from 'next/link';
import styles from "../app/Home.module.css";

const NavBar = () => {
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    
  return (
    <div className={styles.navbar}>
        <Link href={`${myAppApi}/?category=sofa`}>Sofas</Link>
        <Link href={`${myAppApi}/?category=comedor`}>Comedores</Link>
        <Link href={`${myAppApi}/?category=dormitorio`}>Dormitorios</Link>
        <Link href={`${myAppApi}/?category=multimueble`}>Multimuebles</Link>
        <Link href={`${myAppApi}/?category=colchones`}>Colchones</Link>
    </div>
  );
};

export default NavBar;