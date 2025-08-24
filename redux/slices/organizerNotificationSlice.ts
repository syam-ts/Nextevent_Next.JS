import { createSlice } from "@reduxjs/toolkit";
import { INotification } from "../../types/notification";
import { PayloadAction } from "@reduxjs/toolkit";

type Payload = Omit<INotification, "role">;

const initialState = {
  notifications: [],
};

const OrganizerNotificationSlice = createSlice({
  name: "orgnotification",
  initialState,
  reducers: {
    loadNotifications: (state: any, action: PayloadAction<Payload[]>) => {
      state.notifications = action.payload;
    },

    newNotifications: (state: any, action: PayloadAction<Payload[]>) => {
      state.notifications.push(action.payload);
    },
  },
});

export default OrganizerNotificationSlice.reducer;
export const { loadNotifications, newNotifications } =
  OrganizerNotificationSlice.actions;
