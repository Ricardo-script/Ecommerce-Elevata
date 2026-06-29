import { useMutation } from "@tanstack/react-query";
import { searchProducts } from "../../services/search.services";

export const useHomeModel = () => {
  const mutation = useMutation({
    mutationFn: searchProducts,
    onSuccess: async (data) => {
      console.log({ total_de_produtos: data.total, produtos: data.products });
    },
    onError: (error) => {
      console.log({ error: true, message: error.message });
    },
  });

  const handleSearchProducts = (search: string) => {
    mutation.mutate(search);
  };

  return {
    searchProducts: handleSearchProducts,
    isLoading: mutation.isPending,
  };
};
