import Link from "next/link";
import styles from "@/src/styles/catalog.module.scss";
import { ProductType } from "@/src/entities/product";
import { currencyFormatter } from "@/src/utils/numbers";
import ProductImage from "./ProductImage";

export type ProductCardProps = {
    product: ProductType;
    isSale?: boolean;
}

const ProductCard = ({ product, isSale }: ProductCardProps) => (
  <Link href={`/product/${product.id}`}>
    <div className={styles.card}>
      {isSale && <div className={styles.saleTag}>sale</div>}
      <ProductImage width="100%" height="250px" src={product.image} />
      <h2>{product.name}</h2>
      <p>{currencyFormatter({value: product.price})}</p>
      <div className={styles.btnBuy}>Add to cart</div>
    </div>
  </Link>
);

export default ProductCard;
