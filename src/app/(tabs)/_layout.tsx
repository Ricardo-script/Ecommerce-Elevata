import { CustomTabBar } from "@/src/shared/components/navigation";
import { Header } from "@/src/shared/components/navigation/components/headers/header-profile";
import { HeaderTitle } from "@/src/shared/components/navigation/components/headers/header-title";
import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{ tabBarStyle: { display: "none" } }}
    >
      <Tabs.Screen
        name="home"
        options={{ title: "Início", header: () => <Header /> }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categorias",
          header: () => <HeaderTitle title="Categorias" />,
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
