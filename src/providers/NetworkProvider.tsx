import NetInfo from "@react-native-community/netinfo";
import React, { createContext, useContext, useEffect, useState } from "react";

type NetworkContextData = {
  isOnline: boolean;
};

const NetworkContext = createContext<NetworkContextData>(
  {} as NetworkContextData,
);

export function NetworkProvider({ children }: { children: React.ReactNode }) {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const online = !!state.isConnected && !!state.isInternetReachable;

      setIsOnline(online);
    });

    return unsubscribe;
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline }}>
      {children}
    </NetworkContext.Provider>
  );
}

export function useNetworkContext(): NetworkContextData {
  return useContext(NetworkContext);
}
