import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IGuest {
     _id: string
    name: string
    email: string
    password: string
    mobile: number
    age: number
    numberOfEventsAttended: number,
    wallet: any
    // events: IEvent,
    createdAt: string 
}

interface GuestState {
    currentGuest: IGuest | null;
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
