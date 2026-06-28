import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type HeaderTitleProps = {
  title: string;
};

export const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const insets = useSafeAreaInsets();
  const HEADER_TOP_OFFSET = 2;

  const handleGoBack = () => router.back();

  return (
    <View
      className="flex-row justify-between items-center px-4 py-4 bg-white"
      style={{
        paddingTop: insets.top + HEADER_TOP_OFFSET,
      }}
    >
      <TouchableOpacity
        className="w-10 h-10 items-center justify-center"
        onPress={handleGoBack}
      >
        <Ionicons name="arrow-back" size={24} color="#191C1D" />
      </TouchableOpacity>
      <View className="flex-row items-center, gap-3">
        <Text className="text-color_blue font-inter_semibold text-lg">
          {title}
        </Text>
      </View>
      <TouchableOpacity className="w-10 h-10 items-center justify-center">
        <Feather name="shopping-bag" size={24} color="#191C1D" />
      </TouchableOpacity>
    </View>
  );
};
