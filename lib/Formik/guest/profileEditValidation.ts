"use client";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { IGuestState } from "../../../types/slice-states/guestState";

type SubmitFormFn = (
    name: string,
    profilePicture: string,
    mobile: number,
    location: string
) => void;

export const useProfileEditValidation = (submitForm: SubmitFormFn) => {
    const guest = useSelector((state: IGuestState) => state.guest.currentGuest);

    return useFormik({
        initialValues: {
            name: guest?.name ?? "",
            profilePicture: guest?.profilePicture ?? "",
            mobile: guest?.mobile ?? 0,
            location: guest?.location ?? "",
        },

        validate: (values) => {
            const errors: Partial<Record<keyof typeof values, string>> = {};

            if (!values.name) {
                errors.name = "Name required";
            } else if (values.name.length > 20 || values.name.length < 5) {
                errors.name = "Name should be 5 to 20 characters";
            }

            if (!values.mobile) {
                errors.mobile = "Mobile number required";
            } else if (
                values.mobile.toString().length < 9 ||
                values.mobile.toString().length > 10
            ) {
                errors.mobile = "Number should be valid";
            }

            if (!values.location) {
                errors.location = "Location required";
            } else if (values.location.length > 20 || values.location.length < 5) {
                errors.location = "Location need to be valid";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(
                values.name,
                values.profilePicture,
                values.mobile,
                values.location
            );
        },
    });
};
