import styles from '../styles/productDetail.module.scss';
import { type ProductType } from '../entities/product';
import { type ProductMachineEvent, type ProductMachineState } from '../machines/productMachine';
import { rupiahFormatter } from '../utils/numbers';

export type ProductDetailProps = {
    product: ProductType;
    state: ProductMachineState;
    send: (event: ProductMachineEvent) => void;
};

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className={styles.detailContainer}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>{rupiahFormatter(product.price)}</p>
        <p>{product.description}</p>
        {product.variants && (
          <div className={styles.variants}>
            {product.variants.map(variant => (
              <button key={variant} className={styles.variant}>{variant}</button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
