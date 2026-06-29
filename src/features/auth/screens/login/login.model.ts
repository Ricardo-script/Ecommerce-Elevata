import { useAuthStore } from "@/src/shared/stores/auth.store";
import { saveToken } from "@/src/storage/auth-storage";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import { login } from "../../services/auth.service";

export const useAuth = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
      await saveToken(data.accessToken);
      setUser(data);
      router.navigate("/success");
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
    isError: mutation.isError,
    reset: mutation.reset,
  };
};
