import { ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <ActivityIndicator className="flex-1 bg-blue-600 items-center justify-center" />
  );
}
