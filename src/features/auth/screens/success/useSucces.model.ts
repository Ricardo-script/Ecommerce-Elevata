import { useAuthStore } from "@/src/shared/stores/auth.store";
import { router } from "expo-router";
import { useEffect } from "react";

export const useSuccess = () => {
  const user = useAuthStore((state) => state.user);
  const name = user?.firstName;

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(tabs)/home");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return { name };
};
