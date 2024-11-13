import Link from "next/link";
import styles from "../styles/catalog.module.scss";
import { ProductType } from "../entities/product";
import { rupiahFormatter } from "../utils/numbers";
import ProductImage from "./ProductImage";

export type ProductCardProps = {
    product: ProductType;
}

const ProductCard = ({ product }: ProductCardProps) => (
  <Link href={`/product/${product.id}`}>
    <div className={styles.card}>
      <ProductImage width="100%" height="250px" src={product.image} />
      <h2>{product.name}</h2>
      <p>{rupiahFormatter(product.price)}</p>
    </div>
  </Link>
);

export default ProductCard;
