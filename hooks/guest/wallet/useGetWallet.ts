import { useQuery } from "@tanstack/react-query";
import { GetWallet } from "../../../api/guest/wallet/getWallet";

export const useGetWallet = () => {
    return useQuery({
        queryKey: ["wallet"],
        queryFn: () => GetWallet(),
    });
};
