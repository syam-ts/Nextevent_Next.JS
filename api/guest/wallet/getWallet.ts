import { axiosInstanse } from "../../../lib/axios/axiosInstance";
import { IWallet } from "../../../types/wallet";

interface GetWalletResponse {
    wallet: IWallet;
}

export const GetWallet = async (): Promise<GetWalletResponse> => {
    const { data } = await axiosInstanse.get("/guest/wallet");
    return data;
};
