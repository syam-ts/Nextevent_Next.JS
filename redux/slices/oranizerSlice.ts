import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrganizerState } from "../../types/slice-states/organizerState";
import { IOrganizer } from "../../types/organizer";

 
const initialState: IOrganizerState = {
    currentOrganizer: null,
    isOrganizer: false,
};

const currentOrganizerSlice = createSlice({
    name: "organizer",
    initialState,
    reducers: {
        signInOrganizer: (state, action: PayloadAction<IOrganizer>) => {
            (state.currentOrganizer = action.payload), (state.isOrganizer = true);
        },
        signOutOrganizer: (state) => {
            (state.currentOrganizer = null), (state.isOrganizer = false);
        },
    },
});

export default currentOrganizerSlice.reducer;
export const { signInOrganizer, signOutOrganizer } =
    currentOrganizerSlice.actions;
