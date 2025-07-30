import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGuestState } from "../../types/slice-states/guestState";
import { IGuest } from "../../types/guest";



const initialState: IGuestState = {
    currentGuest: null,
    isGuest: false,
};

const currentGuestSlice = createSlice({
    name: "guest",
    initialState,
    reducers: {
        signInGuest: (state, action: PayloadAction<IGuest>) => {
            (state.currentGuest = action.payload), (state.isGuest = true);
        },
        signOutGuest: (state) => {
            (state.currentGuest = null), (state.isGuest = false);
        },
    },
});

export default currentGuestSlice.reducer;
export const { signInGuest, signOutGuest } = currentGuestSlice.actions;
