import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

export const MiniCart = () => {
  return (
    <TouchableOpacity className="w-10 h-10 items-center justify-center">
      <View className="w-5 h-5 absolute bg-color_blue items-center justify-center -top-0 -right-1 z-10 rounded-full">
        <Text className="text-white leading-none font-inter_bold text-[10px]">
          3
        </Text>
      </View>
      <Ionicons name="cart-outline" size={27} color="#191C1D" />
    </TouchableOpacity>
  );
};
