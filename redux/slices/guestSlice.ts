import { createSlice } from "@reduxjs/toolkit";

interface GuestState {
    currentGuest: any | null;
    isGuest: boolean;
}

const initialState: GuestState = {
    currentGuest: null,
    isGuest: false,
};

const currentGuestSlice = createSlice({
    name: "guest",
    initialState,
    reducers: {
        signInGuest: (state, action: any) => {
            (state.currentGuest = action.payload), (state.isGuest = true);
        },
        signOutGuest: (state) => {
            (state.currentGuest = null), (state.isGuest = false);
        },
    },
});

export default currentGuestSlice.reducer;
export const { signInGuest, signOutGuest } = currentGuestSlice.actions;
