import { useFormik } from "formik"; 

export const newEventValidation = (submitForm: any) => {
    return useFormik({
        initialValues: {
            eventName: "",
            eventImage: "",
            location: "",
            date: "",
            startTime: "",
            endTime: "",
            ticketPrice: 0,
            totalSeats: 0,
            isPaid: false,
            details: "",
        },

        validate: (values) => {
            const errors: any = {};

            if (!values.eventName) {
                errors.eventName = "Event Name required";
            } else if (values.eventName.length > 30 || values.eventName.length < 10) {
                errors.eventName = "Event name should be b/w 10 to 30 characters";
            }

            if (!values.eventImage) {
                errors.eventImage = "Event Image required";
            }

            if (!values.location) {
                errors.location = "Location required";
            } else if (values.location.length > 20 || values.location.length < 5) {
                errors.location = "Location need to be valid";
            }

            if (!values.date) {
                errors.date = "Date required";
            } else if (Number(values.date) < Date.now()) {
                errors.date = "cannot add past date";
            }

            if (!values.startTime) {
                errors.startTime = "Start time required";
            }

            if (!values.endTime) {
                errors.endTime = "End time required";
            }

            if (!values.ticketPrice) {
                errors.ticketPrice = "Ticket Price required";
            } else if (values.ticketPrice > 2000 || values.ticketPrice < 100) {
                errors.ticketPrice = "Ticket Price should be 100₹ to 2000₹";
            }

            if (!values.totalSeats) {
                errors.totalSeats = "Total seats required";
            } else if (values.totalSeats > 3000 || values.totalSeats < 100) {
                errors.totalSeats = "Total seats should be 100 to 3000";
            }

            if (!values.isPaid) {
                errors.isPaid = "This field need to be selected";
            }

            if (!values.details) {
                errors.details = "Details required";
            } else if (values.details.length > 300 || values.details.length < 30) {
                errors.details = "Details should have atleast 30 to 300 characters";
            }

            return errors;
        },

        onSubmit: (values) => {
            console.log(values);
            submitForm(
                values.eventName,
                values.eventImage,
                values.location,
                values.date,
                values.startTime,
                values.endTime,
                values.ticketPrice,
                values.totalSeats,
                values.isPaid,
                values.details
            );
        },
    });
};
