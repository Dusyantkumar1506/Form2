import React from "react";
import { Box, TextField, Typography, Grid } from "@mui/material";

export default function ProfileStep({ formValues, handleChange }) {
  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "gray" }}
        >
          Step 1
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Your Profile
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Enter the login information for your account. You will be able to
          create additional users after registering.
        </Typography>
      </Box>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            First Name<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="firstName"
            value={formValues?.firstName || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Firstname"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Last Name<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="lastName"
            value={formValues?.lastName || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Lastname"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Email<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="email"
            value={formValues?.email || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Email"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Phone Number<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="phoneNumber"
            value={formValues?.phoneNumber || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Phone Number"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Password<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="password"
            type="password"
            value={formValues?.password || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Password"
            margin="normal"
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Confirm Password<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            name="confirmPassword"
            type="password"
            value={formValues?.confirmPassword || ""}
            onChange={handleChange}
            fullWidth
            placeholder="Input Your Confirm Password"
            margin="normal"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
