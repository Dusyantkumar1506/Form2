import React, { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MultiStepForm from "./MultiStepForm";
import { Link } from "react-router-dom";

export default function MainPage() {
  const initialFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    brandName: "",
    brandType: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    taxId: "",
    additionalUserEmail: "",
    electronicallySigned: false,
    nonAdultBeverageWaiver: false,
    coiUploaded: false,
  };

  const [activeTab, setActiveTab] = useState(0);
  const [formValues, setFormValues] = useState(initialFormValues);

  const navigate = useNavigate();

  useEffect(() => {
    const savedData = localStorage.getItem("formValues");
    if (savedData) {
      setFormValues(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
  }, [formValues]);

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleCheckboxChange = (event, checkboxName) => {
    setFormValues({
      ...formValues,
      [checkboxName]: event.target.checked,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem("formValues", JSON.stringify(formValues));
    alert("Form submitted");
  };

  const handleBackToLogin = () => {
    navigate("/");
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="1rem 4rem 1rem 4rem"
        textAlign="center"
        gap="2rem"
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Typography variant="h5" style={{ color: "white" }} gutterBottom>
            Dusyant
          </Typography>
        </Link>
        <Typography variant="h5" style={{ color: "white" }} gutterBottom>
          Create New Account
        </Typography>
        <Typography>
          <Link to="/contact" variant="body1" style={{ color: "white" }}>
            Contact Us
          </Link>
        </Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
        paddingBottom="2rem"
        borderRadius="20px"
      >
        <MultiStepForm
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          formValues={formValues}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
        />

        <Box
          display="flex"
          justifyContent="space-between"
          width="100%"
          maxWidth={600}
          mt={2}
        >
          <Button
            variant="contained"
            style={{ backgroundColor: "#6a5ddc", color: "skyblue" }}
            onClick={handleBackToLogin}
          >
            Back to Login
          </Button>

          <Box display="flex" gap="1rem">
            {activeTab > 0 && (
              <Button
                variant="contained"
                style={{ backgroundColor: "#6a5ddc", color: "white" }}
                onClick={() => setActiveTab((prevTab) => prevTab - 1)}
              >
                Previous
              </Button>
            )}

            <Button
              variant="contained"
              sx={{ backgroundColor: "#6a5ddc", color: "white" }}
              onClick={
                activeTab === 2
                  ? handleSubmit
                  : () => setActiveTab((prevTab) => prevTab + 1)
              }
            >
              {activeTab === 2 ? "Finish" : "Next Step"}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
