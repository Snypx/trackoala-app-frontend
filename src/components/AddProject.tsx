import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const AddProject: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Add Project
      </Typography>
      <Box component="form" noValidate>
        {/* Project Details Section */}
        <Typography variant="h6" sx={{ mb: 3 }}>
          Project Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Project Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Project ID" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Project Manager ID"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth label="Site Manager ID" variant="outlined" />
          </Grid>
        </Grid>

        {/* Client Details Section */}
        <Typography variant="h6" sx={{ mt: 4, mb: 3 }}>
          Client Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Number" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Type" variant="outlined" />
          </Grid>
        </Grid>

        {/* Job Section */}
        <Typography variant="h6" sx={{ mt: 4, mb: 3 }}>
          Job
        </Typography>
        <Box
          sx={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            p: 3,
            mb: 4,
          }}>
          <Typography variant="subtitle1" sx={{ mb: 2 }}>
            Job Detail
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Job Name" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <TextField fullWidth label="Job ID" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControl fullWidth>
                <InputLabel id="job-status-label">Job Status</InputLabel>
                <Select labelId="job-status-label" label="Job Status">
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="in-progress">In Progress</MenuItem>
                  <MenuItem value="completed">Completed</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Job Start Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Job End Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Job Estimation" variant="outlined" />
            </Grid>
          </Grid>

          <Typography variant="subtitle1" sx={{ mt: 4, mb: 2 }}>
            Assign To
          </Typography>
          <TextField fullWidth label="Employee ID" variant="outlined" />

          <Typography variant="subtitle1" sx={{ mt: 4, mb: 2 }}>
            Inventory For Job
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField fullWidth label="Inventory ID" variant="outlined" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Inventory Quantity"
                variant="outlined"
              />
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#009688",
                "&:hover": { backgroundColor: "#00796b" },
              }}>
              Add Inventory
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{
                "&:hover": { backgroundColor: "#d32f2f" },
              }}>
              Delete Inventory
            </Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Add Job
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{
              "&:hover": { backgroundColor: "#d32f2f" },
            }}>
            Delete Job
          </Button>
        </Box>

        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Add Project
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddProject;
