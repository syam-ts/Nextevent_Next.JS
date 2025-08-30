import { signOutAdmin } from "../../redux/slices/adminSlice";
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
    } else if (role === "admin") {
       dispatch(signOutAdmin());
        window.location.href = "/admin/login";
    } else {
        throw new Error("Invalid Role");
    }
};
