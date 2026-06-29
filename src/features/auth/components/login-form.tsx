import { Button, Input } from "@/src/shared/components";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Octicons from "@expo/vector-icons/Octicons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Keyboard, View } from "react-native";
import { FormDataTypes, formSchema } from "../schemas/login.schema";
import { useAuth } from "../screens/login/login.model";
import { FeedbackModal } from "./feedback-modal";
import { ForgotPassword } from "./forgot-password";

export const LoginForm = () => {
  const { login, isLoading, isError, reset } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm<FormDataTypes>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = (data: FormDataTypes) => {
    Keyboard.dismiss();
    login(data);
  };

  return (
    <View className="flex-1 gap-4">
      <Input
        name="username"
        control={control}
        placeholder="E-mail ou usuário"
        placeholderTextColor="#737687"
        iconLeft={<FontAwesome name="envelope-o" size={24} color="#737687" />}
      />
      <Input
        name="password"
        control={control}
        secureTextEntry
        placeholder="Sua senha"
        placeholderTextColor="#737687"
        iconLeft={<Octicons name="shield-lock" size={24} color="#737687" />}
      />
      <ForgotPassword />
      <Button
        title="Entrar"
        loading={isLoading}
        textLoading="Autenticando..."
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      />
      <FeedbackModal modalVisible={isError} onCloseModal={reset} />
    </View>
  );
};
