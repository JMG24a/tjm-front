"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBar = () => {
    const pathname = usePathname();
    const myAppApi = process.env.NEXT_PUBLIC_API_URL;
    
  return (
    <ul>
        <Link href={`${myAppApi}/products/comedor`} className="nav-a">Comedores</Link>
        <Link href={`${myAppApi}/products/dormitorio`} className="nav-a">Dormitorios</Link>
        <Link href={`${myAppApi}/products/multimueble`} className="nav-a">Multimuebles</Link>
        <Link href={`${myAppApi}/products/sofa`} className="nav-a">Sofas</Link>
    </ul>
  );
};

export default NavBar;