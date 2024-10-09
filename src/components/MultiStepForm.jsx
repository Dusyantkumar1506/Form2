import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import ProfileStep from "./ProfileStep";
import BusinessStep from "./BusinessStep";
import AdditionalUserStep from "./AdditionalUserStep";

export default function MultiStepForm({
  activeTab,
  setActiveTab,
  formValues,
  handleChange,
  handleCheckboxChange,
}) {
  const steps = [
    { label: "Your Profile", stepNumber: 1 },
    { label: "Business Information", stepNumber: 2 },
    { label: "Additional Users", stepNumber: 3 },
  ];

  return (
    <Paper elevation={3} style={{ padding: "1rem", maxWidth: 600 }}>
      <Box display="flex" justifyContent="center" alignItems="center" mb={4}>
        {steps.map((step, index) => (
          <Box
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: "10px 20px",
              margin: "0 10px",
              cursor: "pointer",
              borderRadius: "4px",
              backgroundColor: activeTab === index ? "skyblue" : "transparent",
              color: activeTab === index ? "white" : "black",
              fontWeight: activeTab === index ? "bold" : "normal",
              transition: "background-color 0.3s",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                color: activeTab === index ? "#86b5f6" : "black",
              }}
            >
              <Typography
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: activeTab === index ? "white" : "gray",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: activeTab === index ? "#86b5f6" : "white",
                }}
              >
                {step.stepNumber}
              </Typography>
              <Typography
                variant="caption"
                style={{
                  color: activeTab === index ? "white" : "gray",
                  fontSize: "14px",
                }}
              >
                {step.label}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box my={4}>
        {activeTab === 0 && (
          <ProfileStep formValues={formValues} handleChange={handleChange} />
        )}
        {activeTab === 1 && (
          <BusinessStep
            formValues={formValues}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        )}
        {activeTab === 2 && (
          <AdditionalUserStep
            formValues={formValues}
            handleChange={handleChange}
          />
        )}
      </Box>
    </Paper>
  );
}
