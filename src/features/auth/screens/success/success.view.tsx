import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import background from "../../assets/images/background_success.png";
import { useSuccess } from "./success.model";

export default function Success() {
  const { name } = useSuccess();
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1" edges={["left", "right"]}>
        <ImageBackground
          source={background}
          resizeMode="cover"
          className="flex-1 p-8"
        >
          <View className="items-center flex-1">
            <Text className="font-inter_bold text-2xl text-color_blue text-center flex-1 pt-8">
              ELEVATE
            </Text>
            <View className="flex-1 items-center justify-center gap-6">
              <View className="w-28 h-28 bg-[#2E7D32] items-center justify-center rounded-full">
                <FontAwesome5 name="check" size={50} color="white" />
              </View>
              <Text className="text-color_black font-inter_bold text-[28px]">{`Bem-vinda, ${name}!`}</Text>
              <Text className="text-color_gray font-inter_medium text-base text-center">
                Login realizado com sucesso. Estamos preparando sua experiência
                premium.
              </Text>
              <Text className="font-inter_semibold text-color_blue">
                Redirecionando...
              </Text>
            </View>
            <View className="flex-1 justify-end pb-6">
              <Text className="font-inter_medium text-[#737687] text-xs text-center">
                ©2026 ELEVATE E-commerce
              </Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
