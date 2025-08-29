import { createSlice, PayloadAction } from "@reduxjs/toolkit"; 
import { IAdmin } from "../../types/admin";

interface AdminState {
  currentAdmin: IAdmin | null;
  isAdmin: boolean;
}

const initialState: AdminState = {
  currentAdmin: null,
  isAdmin: false,
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
  },
});

export default currentAdminSlice.reducer;
export const { signInAdmin, signOutAdmin } = currentAdminSlice.actions;
