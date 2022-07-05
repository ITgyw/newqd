import { axiosInstance } from "./config";

export const getBannerRequest =
    () => axiosInstance.get('./banners')//Banners模块
