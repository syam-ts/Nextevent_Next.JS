import axios from "axios";
import store from "../../../redux/store";
import { getConfig } from "../../../utils/config";
import { logoutHelperFunction } from "../../../helper/methods/logoutHelper";
 
const { backend_url }: {backend_url: string} = getConfig();

export const axiosInstanseAdmin = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

const refreshInstance = axios.create({
    baseURL: backend_url,
    withCredentials: true,
});

axiosInstanseAdmin.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken");

        if (token && config.headers) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstanseAdmin.interceptors.response.use(
    (response) => response,
    async (error) => {
        const original_request = error.config;

        if (error.response.status === 401 && !original_request._retry) {
            original_request._retry = true;

            try {
                const res = await refreshInstance.get("/admin/refresh-token", {
                    withCredentials: true,
                });

                const newAccessToken = res.data.accessToken;
                localStorage.setItem("accessToken", newAccessToken);

                original_request.headers.Authorization = `Bearer ${newAccessToken}`;
                return axiosInstanseAdmin(original_request);
            } catch (err) {
                logoutHelperFunction("admin", store.dispatch);
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
);
