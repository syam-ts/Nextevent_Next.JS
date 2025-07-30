import axios from "axios";
import { config } from "../../../utils/config";
import { logoutHelperFunction } from "../../../helper/methods/logoutHelper";
import store from "../../../redux/store";

const backend_url: string = config.backend_url;

export const axiosInstanseOrganizer = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

const refreshInstance = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

axiosInstanseOrganizer.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstanseOrganizer.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original_request = error.config;

        if (error.response.status === 401 && !original_request._retry) {
            original_request._retry = true;
            try {
                const res = await refreshInstance.get("/organizer/refresh-token", {
                    withCredentials: true,
                });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem("accessToken", newAccessToken);

                original_request.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstanseOrganizer(original_request);
            } catch (err) {
                logoutHelperFunction("organizer", store.dispatch);
                return Promise.reject(error);
            }
        }
        console.log("LAST");
        return Promise.reject(error);
    }
);
