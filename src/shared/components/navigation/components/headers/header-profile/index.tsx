import { useAuthStore } from "@/src/shared/stores/auth.store";
import { Image, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MiniCart } from "./mini-cart";

export const Header = () => {
  const insets = useSafeAreaInsets();
  const HEADER_TOP_OFFSET = 2;
  const user = useAuthStore((state) => state.user);

  return (
    <View
      className="flex-row justify-between items-center px-6 py-4 bg-white"
      style={{
        paddingTop: insets.top + HEADER_TOP_OFFSET,
      }}
    >
      <View className="flex-row items-center, gap-3">
        <Image
          source={{
            uri: "https://i.pravatar.cc/100",
          }}
          className="w-10 h-10 rounded-full"
        />

        <View className="flex-row items-center gap-1">
          <Text className="text-sm text-color_gray">Olá,</Text>
          <Text className="text-base text-color_black font-inter_bold">
            {user?.firstName} 👋
          </Text>
        </View>
      </View>
      <MiniCart />
    </View>
  );
};
