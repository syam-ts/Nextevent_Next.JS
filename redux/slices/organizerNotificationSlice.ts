import { createSlice } from "@reduxjs/toolkit";
import { INotification } from "../../types/notification";
import { PayloadAction } from "@reduxjs/toolkit";

type Notification = Omit<INotification, "role">;

const initialState = {
  notifications: [],
};

const OrganizerNotificationSlice = createSlice({
  name: "orgnotification",
  initialState,
  reducers: {
    loadNotifications: (state: any, action: PayloadAction<Notification[]>) => {
      state.notifications = action.payload;
    },

    newNotifications: (state: any, action: PayloadAction<Notification[]>) => {
      state.notifications.push(action.payload);
    },

    markAsReadNotification: (
      state: { notifications: INotification[] },
      action: PayloadAction<Notification>
    ) => {
      const index = state.notifications.findIndex(
        (not: Notification) => not._id === action.payload._id
      );

      if (index) state.notifications[index].markAsRead = true;
    },
  },
});

export default OrganizerNotificationSlice.reducer;
export const { loadNotifications, newNotifications, markAsReadNotification } =
  OrganizerNotificationSlice.actions;
