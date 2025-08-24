import { signOutGuest } from "../../redux/slices/guestSlice";
import { signOutOrganizer } from "../../redux/slices/oranizerSlice";

export const logoutHelperFunction = (role: string, dispatch: any): void => {
    localStorage.removeItem("accessToken");

    if (role === "guest") {
        dispatch(signOutGuest());
        window.location.href = "/guest/login";
    } else if (role === "organizer") {
        dispatch(signOutOrganizer());
        window.location.href = "/organizer/login";
    } else {
        throw new Error("Invalid Role");
    }
};
