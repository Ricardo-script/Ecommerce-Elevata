import { CustomTabBar } from "@/src/shared/components/navigation";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen name="home" options={{ title: "Início" }} />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoritos",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Perfil",
        }}
      />
    </Tabs>
  );
}
