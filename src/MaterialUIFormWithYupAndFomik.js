import React from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextField from "@material-ui/core/TextField";

const MaterialUIFormWithYupAndFomik = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .required("First Name field is required")
          .max(20, "No more than 20 characters"),
        lastName: Yup.string()
          .required("First Name field is required")
          .max(20, "No more than 20 characters"),
      })}
    >
      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              as={TextField}
              label="First Name"
              id="firstName"
              name="firstName"
              variant="outlined"
            />
            <ErrorMessage name="firstName" />
          </div>
          <br />
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              as={TextField}
              label="Last Name"
              id="lastName"
              name="lastName"
              variant="outlined"
            />
            <ErrorMessage name="lastName" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default MaterialUIFormWithYupAndFomik;
