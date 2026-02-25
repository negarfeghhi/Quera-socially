import axiosInstance from "./axios";

export const login = (email: string, password: string) => {
  return axiosInstance.post("/authentication/login", { email, password });
};