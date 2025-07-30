import { IGuest } from "../guest";
 
export interface IGuestState {
    guest: {
        currentGuest: IGuest | null;
    isGuest: boolean;
    }
}
