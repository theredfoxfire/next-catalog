import dynamic from 'next/dynamic';
import { ProductType } from "@/src/entities/product";
import styles from "@/src/styles/catalog.module.scss";
import { envConfigs } from '@/src/utils/configs';
import { useMachine } from '@xstate/react';
import { catalogMachine } from '@/src/machines/catalogMachine';
import { useEffect } from 'react';

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
  const [state, send] = useMachine(catalogMachine);

  useEffect(() => {
    send({type: 'SET_PRODUCTS', products: products});
  }, []);

  const productData = state?.context?.products as ProductType[];

  if (!productData) {
    return <>Loading...</>
  }
  return (
    <div className={styles.catalog}>
      <h1>Product Catalog</h1>
      <div className={styles.productList}>
        {/** Need do this because limitation of max 10000 chars https://my-json-server.typicode.com/*/}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
