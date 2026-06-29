import { api } from "@/src/services/api";
import { ProductResponse } from "../types/product";

export const searchProducts = async (
  search: string,
): Promise<ProductResponse> => {
  const response = await api.get(`/products/search`, {
    params: {
      q: search,
    },
  });

  return response.data;
};
