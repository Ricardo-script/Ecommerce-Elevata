import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { TAB_CONFIG } from "../../constants/tab-config";
import TabButton from "./tab-button";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
  const insets = useSafeAreaInsets();
  const TAB_BAR_BOTTOM_OFFSET = 12;

  return (
    <View
      className="absolute bottom-6 left-5 right-5"
      style={{ bottom: insets.bottom + TAB_BAR_BOTTOM_OFFSET }}
    >
      <View className="flex-row rounded-3xl bg-white px-2 py-2 shadow-lg">
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const config = TAB_CONFIG[route.name];
          if (!config) return null;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TabButton
              key={route.key}
              label={config.label}
              icon={isFocused ? config.activeIcon : config.inactiveIcon}
              focused={isFocused}
              onPress={onPress}
            />
          );
        })}
      </View>
    </View>
  );
}
