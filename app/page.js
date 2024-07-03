"use client";
import React from "react";
import { useFormik } from "formik";
import IntegrationPage from "../components/IntegrationPage";

const Home = () => {
  const formik = useFormik({
    initialValues: {
      action: "create", // Example action, change as per your logic
      // action: "create", // Example action, change as per your logic
      map: [
        {
          sourceSheet: "sourceSheet 1",
          target: "target 1",
          enforceEntitlement: true,
          customEntitlement: "customEntitlement 1",
        },
        {
          sourceSheet: "sourceSheet 2",
          target: "target 2",
          enforceEntitlement: false,
          customEntitlement: "customEntitlement 2",
        },
      ], // Dummy map value, change as needed
    },
  });

  return (
    <div>
      <IntegrationPage formik={formik} />
    </div>
  );
};

export default Home;
