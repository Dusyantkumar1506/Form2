import React from "react";
import {
  Box,
  TextField,
  MenuItem,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Grid,
  Button,
} from "@mui/material";

export default function BusinessStep({
  formValues,
  handleChange,
  handleCheckboxChange,
  
}) {
  return (
    <Box>
      <Box mb={4}>
        <Typography
          variant="body1"
          align="center"
          gutterBottom
          sx={{ color: "gray" }}
        >
          Step 2
        </Typography>
        <Typography variant="h5" align="center" gutterBottom>
          Business Information
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Please enter information about your company.
        </Typography>
      </Box>
      <Typography variant="h6" gutterBottom sx={{ color: "skyblue" }}>
        GENERAL INFORMATION
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Brand Name<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="Brand Name"
            name="brandName"
            value={formValues.brandName}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Brand Type<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="Brand Type"
            name="brandType"
            value={formValues.brandType}
            onChange={handleChange}
            select
            fullWidth
            margin="normal"
          >
            <MenuItem value="Local">Local</MenuItem>
            <MenuItem value="National">National</MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Street Address<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="Street Address"
            name="streetAddress"
            value={formValues.streetAddress}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            City<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="City"
            name="city"
            value={formValues.city}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Zip Code<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="Zip Code"
            name="zipCode"
            value={formValues.zipCode}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="subtitle1" gutterBottom>
            Tax ID Number<span style={{ color: "skyblue" }}>*</span>
          </Typography>
          <TextField
            label="Tax ID"
            name="taxId"
            value={formValues.taxId}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </Grid>
      </Grid>

      {/* Document Upload Section */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom sx={{ color: "skyblue" }}>
          DOCUMENTS
        </Typography>
        <Typography variant="body2" gutterBottom>
          Once the following documents are signed, you'll be ready to get
          started.
        </Typography>

        {/* Electronically sign agreement checkbox */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.electronicallySigned}
                onChange={(e) =>
                  handleCheckboxChange(e, "electronicallySigned")
                }
              />
            }
            label="Electronically sign the agreement(s)"
          />
        </FormGroup>

        {/* Non-Adult Beverage Waiver checkbox */}
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.nonAdultBeverageWaiver}
                onChange={(e) =>
                  handleCheckboxChange(e, "nonAdultBeverageWaiver")
                }
              />
            }
            label="Non-adult beverage Kroger market supplier waiver and release"
          />
        </FormGroup>
      </Box>

      {/* COI PDF Upload */}
      <Box mt={4}>
        <Typography variant="h6" gutterBottom sx={{ color: "skyblue" }}>
          COI PDF UPLOAD
        </Typography>
        <Typography variant="body2" gutterBottom>
          Please upload your Certificate of Insurance (COI) document.
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={formValues.coiUploaded} 
                onChange={
                  (e) => handleCheckboxChange(e, "coiUploaded") 
                }
              />
            }
            label="I have uploaded the COI document"
          />
        </FormGroup>
      </Box>
    </Box>
  );
}
