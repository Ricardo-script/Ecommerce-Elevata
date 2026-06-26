import * as SecureStore from "expo-secure-store";

const TOKEN_KEY = "app_token";

const isSecureStoreAvailable = typeof SecureStore?.setItemAsync === "function";

export async function saveToken(token: string) {
  if (isSecureStoreAvailable) {
    return SecureStore.setItemAsync(TOKEN_KEY, token);
  }
}

export async function getToken() {
  if (isSecureStoreAvailable) {
    return SecureStore.getItemAsync(TOKEN_KEY);
  }
  return null;
}

export async function removeToken() {
  if (isSecureStoreAvailable) {
    return SecureStore.deleteItemAsync(TOKEN_KEY);
  }
}
