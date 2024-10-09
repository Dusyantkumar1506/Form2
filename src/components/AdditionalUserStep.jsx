import React from "react";
import { Box, TextField, Button, Typography, Grid } from "@mui/material";

export default function AdditionalUserStep({ handleChange }) {
  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "gray" }}
        >
          Step 3
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Additional Users
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Please enter Additional Users.
        </Typography>
      </Box>

      <Grid item xs={12} sm={6}>
        <Typography variant="subtitle1" gutterBottom>
          Additional Users (Optional)<span style={{ color: "skyblue" }}>*</span>
        </Typography>
        <TextField
          label="Additional User's Email"
          name="additionalUserEmail"
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
      </Grid>
      <Button variant="outlined" style={{ marginTop: 20 }}>
        Add Another User
      </Button>
    </Box>
  );
}
