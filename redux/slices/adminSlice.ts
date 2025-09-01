import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { IAdmin } from "../../types/admin";
import { IOrganizer } from "../../types/organizer";

interface AdminState {
  currentAdmin: IAdmin | null;
  isAdmin: boolean;
  organizers: IOrganizer[];
}

const initialState: AdminState = {
  currentAdmin: null,
  isAdmin: false,
  organizers: []
};

const currentAdminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    signInAdmin: (state, action: PayloadAction<IAdmin>) => {
      (state.currentAdmin = action.payload), (state.isAdmin = true);
    },
    signOutAdmin: (state) => {
      (state.currentAdmin = null), (state.isAdmin = false);
    },
    blockOrganizer: (state, action: PayloadAction<boolean>) => {
        //find the organizer using id and make the isBlocked to true
  },  
  }
});

export default currentAdminSlice.reducer;
export const { signInAdmin, signOutAdmin, blockOrganizer } = currentAdminSlice.actions;
