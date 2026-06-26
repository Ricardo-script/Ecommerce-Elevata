import { useAuthStore } from "@/src/shared/stores/auth.store";
import { useMutation } from "@tanstack/react-query";
import { saveToken } from "../../../storage/auth-storage";
import { login } from "../services/auth.service";

export const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      await saveToken(data.accessToken);
      setUser(data);
      console.log({ sucesso: true, data });
    },
    onError: (error) => {
      console.log("Login error:", error);
    },
  });

  return {
    login: mutation.mutate,
    isLoading: mutation.isPending,
    data: mutation.data,
    error: mutation.error,
  };
};
