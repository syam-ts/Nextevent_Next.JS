import { useFormik } from "formik";

type SubmitFormFn = (email: string, password: string) => void;

export const useLoginValidation = (submitForm: SubmitFormFn) => {
  return useFormik({
    initialValues: {
      userName: "",
      password: "",
    },

    validate: (values) => {
      const errors: Partial<Record<keyof typeof values, string>> = {};

      if (!values.userName) {
        errors.userName = "user name required";
      } else if (values.userName.length > 20 || values.userName.length < 5) {
        errors.userName = "user name should be 5 to 20 characters";
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
      submitForm(values.userName, values.password);
    },
  });
};
