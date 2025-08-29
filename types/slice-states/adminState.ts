import { IAdmin } from "../admin";

export interface IAdminState {
  admin: {
    currentAdmin: IAdmin | null;
    isAdmin: boolean;
  };
}
