import React from "react";
import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

const YupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("First Name field is required")
        .max(20, "No more than 20 characters"),
      lastName: Yup.string()
        .required("First Name field is required")
        .max(20, "No more than 20 characters"),
    }),
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
          <p style={{ color: "red" }}>{formik.errors.firstName}</p>
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
          <p style={{ color: "red" }}>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};
export default YupForm;
