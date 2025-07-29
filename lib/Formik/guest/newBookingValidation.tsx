import { useFormik } from "formik"; 

export const newBookingValidation = (submitForm: any, eventName: string) => {
    return useFormik({
        initialValues: { 
            street: "",
            city: "",
            zipcode: 0,
            numberOfSeats: 1,
            total: 0,
        },

        validate: (values) => { 
            const errors: any = {};

            if (!values.street) {
                errors.street = "Street Address required";
            } else if (values.street.length > 50 || values.street.length < 20) {
                errors.street = "Street Address should be b/w 20 to 50 characters";
            }

            if (!values.city) {
                errors.city = "City name required";
            } else if (values.city.length > 15 || values.city.length < 5) {
                errors.city = "City name should to be b/w 5 to 15 characters";
            }

            if (!values.zipcode) {
                errors.zipcode = "Zipcode required";
            } else if (
                values.zipcode.toString().length < 5 ||
                values.zipcode.toString().length > 7
            ) {
                errors.zipcode = "Zipcode should be valid";
            }

            if (!values.numberOfSeats) {
                errors.numberOfSeats = "Number Of Seats required";
            } else if (values.numberOfSeats < 1 || values.numberOfSeats > 10) {
                errors.numberOfSeats = "numberOfSeats should be between 1 and 10";
            }

            if (!values.total) {
                errors.total = "Total Missing";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(
                eventName,
                values.street,
                values.city,
                values.zipcode,
                values.numberOfSeats,
                values.total
            );
        },
    });
};
