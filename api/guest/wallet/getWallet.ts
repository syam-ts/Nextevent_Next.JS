 import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";
import { IWallet } from "../../../types/wallet";

interface GetWalletResponse {
    wallet: IWallet;
}

export const GetWallet = async (): Promise<GetWalletResponse> => {
    const { data } = await axiosInstanseGuest.get("/guest/wallet");
    return data;
};
