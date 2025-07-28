import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IOrganizer {
    _id: string;
    name: string;
    email: string;
    mobile: number;
    password: string;
    role: string;
    organizationName: string;
    createdEvents: [];
    createdAt: Date;
}

interface OrganizerState {
    currentOrganizer: IOrganizer | null;
    isOrganizer: boolean;
}

const initialState: OrganizerState = {
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
