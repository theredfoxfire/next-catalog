import ProductDetail from "@/src/components/ProductDetail";
import { type ProductType } from "@/src/entities/product";
import { productMachine } from "@/src/machines/productMachine";
import { useMachine } from "@xstate/react";
import { type GetServerSidePropsContext } from "next";
import { type ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

export async function getServerSideProps({
  params,
}: GetServerSidePropsContext<Params>) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${params?.id}`
  );
  const product = await res.json();
  return { props: { product } };
}

export type ProductPageProps = {
  product: ProductType;
};

export default function ProductPage({ product }: ProductPageProps) {
  const [state, send] = useMachine(productMachine);

  return (
      <ProductDetail product={product} state={state} send={send} />
  );
}