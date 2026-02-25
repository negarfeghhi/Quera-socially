import axiosInstance from "./axios";

export const getPosts = () => {
  return axiosInstance.get("/posts");
};