"use client"
import { useFormik } from "formik";
import { useSelector } from "react-redux";

export const profileEditValidation = (submitForm: any) => {

      const guest = useSelector((state: any) => state.guest.currentGuest);

    return useFormik({
        initialValues: {
            name: guest.name,
            mobile: guest.mobile,
            age: guest.age,
        },

        validate: (values) => {
            const errors: any = {};

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

            if (!values.age) {
                errors.age = "Age required";
            } else if (values.age < 20 || values.age > 50) {
                errors.age = "Age should be between 20 and 50";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(values.name, values.mobile, values.age);
        },
    });
};
