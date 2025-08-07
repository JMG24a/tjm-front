"use client"
import Link from 'next/link';
import styles from "../app/Home.module.css";
import { useSearchParams } from 'next/navigation'

const NavBar = () => {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category');

  const links = [
    { label: 'Sofas', category: 'sofa' },
    { label: 'Comedores', category: 'comedor' },
    { label: 'Dormitorios', category: 'dormitorio' },
    { label: 'Multimuebles', category: 'multimueble' },
    { label: 'Colchones', category: 'colchones' }
  ];

  return (
    <div className={styles.navbar}>
      {links.map(link => (
        <Link
          key={link.category}
          href={`/?category=${link.category}`}
          className={currentCategory === link.category ? styles.current : styles.idle}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default NavBar;
