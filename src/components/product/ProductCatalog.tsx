import styles from "@/src/styles/catalog.module.scss";
import ImageSlider from "@/src/components/slider/ImageSlider";
import { ProductType } from "@/src/entities/product";
import ProductCard from "./ProductCard";

const mockImages = [
  "https://img.freepik.com/free-photo/copy-space-teenage-boy_23-2148478770.jpg?t=st=1731636389~exp=1731639989~hmac=f7145ad4fded5951591d46288534afbd42dd3de9ff7dcd2b96e5fce79097aa6c&w=1380",
];

const ProductCatalog = ({ products }: { products: ProductType[] }) => {
  return (
    <div className={styles.catalog}>
      <div className={styles.campaignBox}>
        <h1>SUMMER CLASSIC COLLECTIONS</h1>
        <p>
          Uncover the beauty of simplicity and grace with our Summer Classic
          Collection. Thoughtfully designed for effortless style, each piece
          brings a blend of comfort and elegance, perfect for warm, sunlit days.
        </p>
      </div>
      <div className={styles.sliderContainer}>
        <ImageSlider images={mockImages} />
      </div>
      <div className={styles.productList}>
        {/** Need do this because limitation of max 10000 chars https://my-json-server.typicode.com/*/}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product, key) => (
          <ProductCard
            key={product.id}
            product={product}
            isSale={key % 2 === 0}
          />
        ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product, key) => (
          <ProductCard
            key={product.id}
            product={product}
            isSale={key % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;