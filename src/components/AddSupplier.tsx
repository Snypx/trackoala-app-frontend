import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const AddSupplier: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Add Supplier
      </Typography>
      <Box component="form" noValidate>
        <TextField
          fullWidth
          label="Supplier Name"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Supplier ID"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Contact Number"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Address"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Representative"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField fullWidth label="Email" variant="outlined" sx={{ mb: 2 }} />
        <TextField
          fullWidth
          label="Speciality"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Add Supplier
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddSupplier;
