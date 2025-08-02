import axios from "axios";
import { logoutHelperFunction } from "../../../helper/methods/logoutHelper";
import store from "../../../redux/store";
import { getConfig } from "../../../utils/config";

const { backend_url } = getConfig();

export const axiosInstanseGuest = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

const refreshInstance = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

axiosInstanseGuest.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstanseGuest.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original_request = error.config;

        if (error.response.status === 401 && !original_request._retry) {
            original_request._retry = true;

            try {
                const res = await refreshInstance.get("/guest/refresh-token", {
                    withCredentials: true,
                });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem("accessToken", newAccessToken);

                original_request.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstanseGuest(original_request);
            } catch (err) {
                logoutHelperFunction("guest", store.dispatch);
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);
