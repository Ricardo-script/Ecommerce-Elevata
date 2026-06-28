import { Text, View } from "react-native";
import { useAnimatedDots } from "../hooks/useAnimatedDots";

export const TextDots = () => {
  const dots = useAnimatedDots();
  return (
    <View className="w-full items-center">
      <Text className="font-inter_medium text-color_blue border w-full text-center">
        Redirecionando{dots.padEnd(3, "  ")}
      </Text>
    </View>
  );
};
