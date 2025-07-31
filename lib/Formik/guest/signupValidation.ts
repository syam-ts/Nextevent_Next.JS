import { useFormik } from "formik";

export const useSignupValidation = (submitForm: Function) => {
    return useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            mobile: 0,
            location: "",
        },

        validate: (values) => {
            const errors = {
                name: "",
                email: "",
                password: "",
                mobile: 0 || "",
                location: "",
            };

            if (!values.name) {
                errors.name = "Name required";
            } else if (values.name.length > 20 || values.name.length < 5) {
                errors.name = "Name should be 5 to 20 characters";
            }

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
                values.email,
                values.password,
                values.mobile,
                values.location
            );
        },
    });
};
