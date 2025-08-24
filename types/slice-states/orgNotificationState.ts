import { INotification } from "../notification";

export interface IOrgNotification {
  orgnotification: {
    notifications: INotification[];
  };
}
