import dynamic from "next/dynamic";
import { ProductType } from "@/src/entities/product";
import { useMachine } from "@xstate/react";
import { catalogMachine } from "@/src/machines/catalogMachine";
import { useEffect } from "react";
import { getProductsService } from "@/src/services/catalogService";

// lazzy loading component
const ProductCatalog = dynamic(
  () => import("@/src/components/product/ProductCatalog"),
  {
    ssr: false,
  }
);

export async function getServerSideProps() {
  const res = await getProductsService();
  const products = await res.json();

  return { props: { products } };
}

export type CatalogProps = {
  products: ProductType[];
};


export default function CatalogPage({ products }: CatalogProps) {
  const [state, send] = useMachine(catalogMachine);

  useEffect(() => {
    send({ type: "SET_PRODUCTS", products: products });
  }, []);

  const productsStateData = state?.context?.products as ProductType[];

  if (!productsStateData) {
    return <>Loading...</>;
  }
  return (
    <ProductCatalog products={productsStateData} />
  );
}
