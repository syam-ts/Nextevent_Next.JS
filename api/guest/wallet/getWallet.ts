 import { axiosInstanseGuest } from "../../../lib/axios/guest/axiosInstance";
import { IWallet } from "../../../types/wallet";

type GetWalletResponse = {
    wallet: IWallet;
}

export const GetWallet = async (): Promise<GetWalletResponse> => {
    const { data } = await axiosInstanseGuest.get("/guest/wallet");
    return data;
};
