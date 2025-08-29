import { IWallet } from "./wallet";

export interface IAdmin {
    _id: string;
    userName: string;
    password: string;
    isAuthurized: boolean;
    wallet: IWallet
    createdAt: Date
}