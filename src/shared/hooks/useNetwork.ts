import { useNetworkContext } from "@/src/providers/NetworkProvider";

export function useNetwork() {
  return useNetworkContext();
}

// uso:  const { isOnline } = useNetwork();
/* 
 // Login.model.ts

import { useNetwork } from "../../hooks/useNetwork";

export function useLoginModel() {
  const { isOnline } = useNetwork();

  async function login(email: string, password: string) {
    if (!isOnline) {
      throw new Error("Sem conexão com a internet");
    }

    // chamada API
  }

  return {
    login,
  };
}
 
 */
