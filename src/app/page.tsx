import Image from "next/image";
import styles from "./Home.module.css";

const products = Array(4).fill({
  name: "Zultan 2 puestos",
  price: "Bs 1500",
  imageUrl: "/sofa.jpg",
});

const categories = [
  "Sofas",
  "Dormitorios",
  "Colchones",
  "Multimuebles",
  "Comedores",
];

export default function HomePage() {
  return (
    <div>
      {/* Imagen representativa */}
      <div className="w-full">
        <Image
          src="/started.jpg"
          alt="Imagen representativa del negocio"
          width={900}
          height={200}
          className={styles.banner}
        />
      </div>

      {/* Categorías navbar */}
      <nav className={styles.navbar}>
        {categories.map((cat) => (
          <span key={cat}>{cat}</span>
        ))}
      </nav>

      {/* Rejilla de productos */}
      <div className={styles.productsGrid}>
        {products.map((product, idx) => (
          <div key={idx} className={styles.productCard}>
            <Image
              src={'/09b153fe8ea49db5511267d4de977b6a.jpg'}
              alt={product.name}
              width={300}
              height={200}
              className={styles.productImage}
            />
            <div className={styles.details}>
                <div>
                    <p className={styles.productName}>{product.name}</p>
                    <p className={styles.productPrice}>{product.price}</p>
                </div>
                <Image
                    src={'/wp.png'}
                    alt={product.name}
                    width={50}
                    height={50}
                />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
