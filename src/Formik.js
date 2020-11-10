import React from "react";
import "./App.css";
import { useFormik } from "formik";

const Formik = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const error = {};
      if (!values.firstName) {
        error.firstName = "field is required";
      } else if (values.firstName.length > 20) {
        error.firstName = "no more than 20 characters";
      }
      if (!values.lastName) {
        error.lastName = "field is required";
      } else if (values.lastName.length > 20) {
        error.lastName = "no more than 20 characters";
      }
      return error;
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p style={{ color: "red" }}>{formik.errors.firstName} </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p style={{ color: "red" }}>{formik.errors.lastName} </p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default Formik;
