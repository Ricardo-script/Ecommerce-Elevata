import { api } from "@/src/services/api";
import { LoginResponse } from "@/src/shared/types/authUser";
import { LoginRequest } from "../types/types";

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  return response.data;
};
