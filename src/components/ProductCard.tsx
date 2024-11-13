import Link from "next/link";
import styles from "../styles/catalog.module.scss";
import { ProductType } from "../entities/product";
import { rupiahFormatter } from "../utils/numbers";

export type ProductCardProps = {
    product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link href={`/product/${product.id}`}>
    <a className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{rupiahFormatter(product.price)}</p>
    </a>
  </Link>
);

export default ProductCard;
