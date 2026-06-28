import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

type Props = {
  label: string;
  icon: keyof typeof Ionicons.glyphMap;
  focused: boolean;
  onPress: () => void;
};

export default function TabButton({ label, icon, focused, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className="flex-1 items-center justify-center py-2"
    >
      <View
        className={`items-center justify-center w-[80%] h-16 rounded-2xl ${
          focused ? "bg-color_blue border-color_blue" : "bg-white"
        }`}
      >
        <Ionicons name={icon} size={22} color={focused ? "#FFF" : "#6B7280"} />
        <Text
          className={`mt-1 text-xs ${
            focused ? "text-white font-semibold" : "text-gray-500"
          }`}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
