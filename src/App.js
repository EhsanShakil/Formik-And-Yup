import React from "react";
import "./App.css";
import Formik from "./Formik";
import YupForm from "./YupForm";

function App() {
  return (
    <div className="App">
      <h1>Formik Form</h1>
      <Formik />
      <h1>Formik with Yup Form</h1>
      <YupForm />
    </div>
  );
}

export default App;
