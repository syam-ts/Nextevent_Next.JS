import { useFormik } from "formik";

type SubmitFormFn = (email: string, password: string) => void;

export const useLoginValidation = (submitForm: SubmitFormFn) => {
    return useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validate: (values) => {
            const errors: Partial<Record<keyof typeof values, string>> = {};

            if (!values.email) {
                errors.email = "Email is required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invalid email address";
            }

            if (!values.password) {
                errors.password = "Password is required";
            } else if (values.password.length <= 8) {
                errors.password = "Must be at least 8 characters";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(values.email, values.password);
        },
    });
};
