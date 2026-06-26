import { useAuthStore } from "@/src/shared/stores/auth.store";
import { Button, Text, View } from "react-native";
import { useAuth } from "./useAuth.model";

export default function Login() {
  const { login } = useAuth();
  const user = useAuthStore((state) => state.user);

  const handleLogin = () => {
    login({ username: "emilys", password: "emilyspass" });
  };

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text>Tela de Login</Text>
      <Button title="Login" onPress={handleLogin} />
      {user && <Text>Usuário: {user?.firstName + " " + user?.lastName}</Text>}
    </View>
  );
}
