import { IOrganizer } from "../organizer";
 
export interface IOrganizerState {
   organizer: {
     currentOrganizer: IOrganizer | null;
    isOrganizer: boolean;
   }
}