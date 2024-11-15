import dynamic from "next/dynamic";
import { ProductType } from "@/src/entities/product";
import styles from "@/src/styles/catalog.module.scss";
import { envConfigs } from "@/src/utils/configs";
import { useMachine } from "@xstate/react";
import { catalogMachine } from "@/src/machines/catalogMachine";
import { useEffect } from "react";
import ImageSlider from "@/src/components/slider/ImageSlider";

// lazzy loading component
const ProductCard = dynamic(
  () => import("@/src/components/product/ProductCard"),
  {
    ssr: false,
  }
);

export async function getServerSideProps() {
  const res = await fetch(envConfigs.NEXT_PUBLIC_API_URL + "/products");
  const products = await res.json();

  return { props: { products } };
}

export type CatalogProps = {
  products: ProductType[];
};

const mockImages = [
  "https://img.freepik.com/free-photo/copy-space-teenage-boy_23-2148478770.jpg?t=st=1731636389~exp=1731639989~hmac=f7145ad4fded5951591d46288534afbd42dd3de9ff7dcd2b96e5fce79097aa6c&w=1380",
];

export default function CatalogPage({ products }: CatalogProps) {
  const [state, send] = useMachine(catalogMachine);

  useEffect(() => {
    send({ type: "SET_PRODUCTS", products: products });
  }, []);

  const productData = state?.context?.products as ProductType[];

  if (!productData) {
    return <>Loading...</>;
  }
  return (
    <div className={styles.catalog}>
      <div className={styles.campaignBox}>
        <h1>SUMMER CLASSIC COLLECTIONS</h1>
        <p>Uncover the beauty of simplicity and grace with our Summer Classic Collection. Thoughtfully designed for effortless style, each piece brings a blend of comfort and elegance, perfect for warm, sunlit days.</p>
      </div>
      <div className={styles.sliderContainer}>
        <ImageSlider images={mockImages} />
      </div>
      <div className={styles.productList}>
        {/** Need do this because limitation of max 10000 chars https://my-json-server.typicode.com/*/}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {productData.map((product, key) => (
          <ProductCard
            key={product.id}
            product={product}
            isSale={key % 2 === 0}
          />
        ))}
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {productData.map((product, key) => (
          <ProductCard
            key={product.id}
            product={product}
            isSale={key % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}
