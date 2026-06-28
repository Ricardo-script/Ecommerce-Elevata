import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/(auth)/login" />;
}

/*
  if (isAuthenticated) {
    return <Redirect href="/(tabs)/home" />;
}

return <Redirect href="/(auth)/login" />;
*/
