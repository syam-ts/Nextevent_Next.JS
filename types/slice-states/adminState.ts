import { IAdmin } from "../admin";
import { IOrganizer } from "../organizer";

export interface IAdminState {
  admin: {
    currentAdmin: IAdmin | null;
    isAdmin: boolean;
    organizers: IOrganizer[];
  };
}
