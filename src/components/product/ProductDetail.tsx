import styles from '@/src/styles/productDetail.module.scss';
import { type ProductType } from '@/src/entities/product';
import { type ProductMachineEvent, type ProductMachineState } from '@/src/machines/productMachine';
import { currencyFormatter } from '@/src/utils/numbers';
import ImageSlider from '../slider/ImageSlider';

export type ProductDetailProps = {
    product: ProductType;
    state: ProductMachineState;
    send: (event: ProductMachineEvent) => void;
};

const mockDummyImageSlider = 'https://xelltechnology.com/wp-content/uploads/2022/04/dummy4.jpg';

const ProductDetail = ({ product }: ProductDetailProps) => {
  return (
    <div className={styles.detailContainer}>
      <ImageSlider images={[product.image, mockDummyImageSlider]} />
      <div className={styles.info}>
        <h1>{product.name}</h1>
        <p className={styles.price}>{currencyFormatter({value: product.price})}</p>
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