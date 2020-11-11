import React from "react";
import "./App.css";
import Formik from "./Formik";
import YupForm from "./YupForm";
import MaterialUIFormWithYupAndFomik from "./MaterialUIFormWithYupAndFomik";
function App() {
  return (
    <div className="App">
      <h1>Formik Form</h1>
      <Formik />
      <h1>Formik with Yup Form</h1>
      <YupForm />
      <h1>MaterialUI Form With Yup & Fomik</h1>
      <MaterialUIFormWithYupAndFomik />
    </div>
  );
}

export default App;
