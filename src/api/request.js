import { axiosInstance } from "./config";

export const getBannerRequest =
    () => axiosInstance.get('./banners')//Banners模块
export const getNavbarsRequest =
    () => axiosInstance.get('./navbars')
export const getBestsellersRequest =
    () => axiosInstance.get('./bestsellers')
export const getRecommendRequest =
    () => axiosInstance.get('./recommend')
export const getMoreRequest =
    () => axiosInstance.get('./more')
export const getHistoryRequest =
    () => axiosInstance.get('./history')
export const getFoundRequest =
    () => axiosInstance.get('./found')
export const getBookshelfRequest =
    () => axiosInstance.get('./bookshelf')
export const getHotRequest =
    () => axiosInstance.get('./hotlist')
export const getPopularRequest =
    () => axiosInstance.get('./popularlist')
