"use client";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { IOrganizerState } from "../../../types/slice-states/organizerState";

type SubmitFormFn = (
    name: string,
    mobile: number,
    organizationName: string
) => void;

export const useProfileEditValidation = (submitForm: SubmitFormFn) => {
    const organizer = useSelector(
        (state: IOrganizerState) => state.organizer.currentOrganizer
    );

    return useFormik({
        initialValues: {
            name: organizer?.name ?? "",
            mobile: organizer?.mobile ?? 0,
            organizationName: organizer?.organizationName ?? "",
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

            if (!values.organizationName) {
                errors.organizationName = "Organization Name is required";
            } else if (
                values.organizationName.length > 20 ||
                values.organizationName.length < 5
            ) {
                errors.organizationName =
                    "Organization name should be b/w 5 to 20 characters";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(values.name, values.mobile, values.organizationName);
        },
    });
};
