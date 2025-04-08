import React from "react";
import { Box, Button, TextField, Typography, Container } from "@mui/material";

const Settings: React.FC = () => {
  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Your account settings
      </Typography>
      <Box sx={{ mb: 4 }}>
        <TextField
          fullWidth
          label="Name"
          defaultValue="Deve Loper"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009688",
            "&:hover": { backgroundColor: "#00796b" },
          }}>
          Save settings
        </Button>
      </Box>

      <Typography variant="h5" sx={{ mb: 3 }}>
        Password change
      </Typography>
      <Box>
        <TextField
          fullWidth
          label="Current password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="New password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Confirm password"
          type="password"
          variant="outlined"
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#009688",
            "&:hover": { backgroundColor: "#00796b" },
          }}>
          Save password
        </Button>
      </Box>
    </Container>
  );
};

export default Settings;
