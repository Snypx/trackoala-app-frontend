import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const SignUp: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        New Sign Up
      </Typography>
      <Box component="form" noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField fullWidth label="Employee Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Employee ID" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="employee-type-label">Employee Type</InputLabel>
              <Select labelId="employee-type-label" label="Employee Type">
                <MenuItem value="full-time">Full-Time</MenuItem>
                <MenuItem value="part-time">Part-Time</MenuItem>
                <MenuItem value="contract">Contract</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Employee DOB"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel id="role-label">Role</InputLabel>
              <Select labelId="role-label" label="Role">
                <MenuItem value="admin">Admin</MenuItem>
                <MenuItem value="user">User</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" sx={{ mb: 1 }}>
              Allow Access To:
            </Typography>
            <Box>
              {[
                "Inventory",
                "Supplier",
                "Project",
                "Drawing",
                "Fabrication",
                "Delivery",
                "Estimation",
              ].map((access) => (
                <FormControlLabel
                  key={access}
                  control={<Checkbox />}
                  label={access}
                />
              ))}
            </Box>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Department" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Joining Date"
              type="date"
              InputLabelProps={{ shrink: true }}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password"
              type="password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Password Confirm"
              type="password"
              variant="outlined"
            />
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Sign Up Employee
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
