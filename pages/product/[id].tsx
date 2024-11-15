import dynamic from "next/dynamic";
import { type GetServerSidePropsContext } from "next";
import { type ParsedUrlQuery } from "querystring";
import { type ProductType } from "@/src/entities/product";
import { productMachine } from "@/src/machines/productMachine";
import { useMachine } from "@xstate/react";
import { useEffect } from "react";
import { getProductDetailService } from "@/src/services/catalogService";

// lazzy loading component
const ProductDetail = dynamic(() => import('@/src/components/product/ProductDetail'), {
    ssr: false, 
  });

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<Params>) {
  const res = await getProductDetailService(params?.id);
  const product = await res.json();
  return { props: { product } };
}

export type ProductPageProps = {
  product: ProductType;
};

export default function ProductPage({ product }: ProductPageProps) {
  const [state, send] = useMachine(productMachine);

  useEffect(() => {
    send({type: 'SET_PRODUCT', product: product});
  }, []);

  if (!state.context.product) {
    return <>Loading...</>
  }

  return (
      <ProductDetail product={state.context.product || {} as ProductType} />
  );
}
