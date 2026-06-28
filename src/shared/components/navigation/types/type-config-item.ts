import { Ionicons } from "@expo/vector-icons";

export type TabConfigItem = {
  label: string;
  activeIcon: keyof typeof Ionicons.glyphMap;
  inactiveIcon: keyof typeof Ionicons.glyphMap;
};

export type TabConfig = Record<string, TabConfigItem>;
