import dynamic from 'next/dynamic';
import { ProductType } from "@/src/entities/product";
import styles from "@/src/styles/catalog.module.scss";
import { envConfigs } from '@/src/utils/configs';

// lazzy loading component
const ProductCard = dynamic(() => import('@/src/components/product/ProductCard'), {
  ssr: false, 
});

export async function getServerSideProps() {
  const res = await fetch(envConfigs.NEXT_PUBLIC_API_URL + "/products");
  const products = await res.json();

  return { props: { products } };
}

export type CatalogProps = {
  products: ProductType[];
};

export default function CatalogPage({ products }: CatalogProps) {
  return (
    <div className={styles.catalog}>
      <h1>Product Catalog</h1>
      <div className={styles.productList}>
        {/** Need do this because limitation of max 10000 chars https://my-json-server.typicode.com/*/}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
