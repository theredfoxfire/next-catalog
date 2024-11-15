import { envConfigs } from "../utils/configs";

export const getProductsService = () => {
  return fetch(envConfigs.NEXT_PUBLIC_API_URL + "/products");
};

export const getProductDetailService = (id?: string) => {
  return fetch(`${envConfigs.NEXT_PUBLIC_API_URL}/products/${id}`);
};
