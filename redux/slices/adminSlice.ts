import { IAdmin } from "../../types/admin";
import { IOrganizer } from "../../types/organizer";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AdminState {
  currentAdmin: IAdmin | null;
  isAdmin: boolean;
  organizers: IOrganizer[];
}

const initialState: AdminState = {
  currentAdmin: null,
  isAdmin: false,
  organizers: [],
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
    addOrganizers: (state, action: PayloadAction<IOrganizer[]>) => {
      state.organizers = action.payload;
    },
    blockOrganizer: (state, action: PayloadAction<string>) => { 
      const index = state.organizers.findIndex(
        (org: IOrganizer) => org._id === action.payload
      );
      if (index !== -1) state.organizers[index].isBlocked = true;
    },

    unBlockOrganizer: (state, action: PayloadAction<string>) => {
      const index = state.organizers.findIndex(
        (org: IOrganizer) => org._id === action.payload
      );

      if (index !== -1) state.organizers[index].isBlocked = false;
    },
  },
});

export default currentAdminSlice.reducer;
export const {
  signInAdmin,
  signOutAdmin,
  addOrganizers,
  blockOrganizer,
  unBlockOrganizer,
} = currentAdminSlice.actions;
