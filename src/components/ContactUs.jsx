import React from "react";
import { Box, Typography } from "@mui/material";

export default function ContactUs() {
  return (
    <Box sx={{ padding: "2rem", textAlign: "center", color: "white" }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography>
        For any inquiries, please email us at contact@example.com
      </Typography>
    </Box>
  );
}
