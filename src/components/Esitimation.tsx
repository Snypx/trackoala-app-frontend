import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

interface RowData {
  invId: string;
  quantity: number;
  unitCost: number;
  profitPercent: number;
  totalCost: number;
  quotePrice: number;
}

interface TimeRowData {
  drawingTime: string;
  productionTime: string;
  deliveryTime: string;
  installTime: string;
}

const Estimation: React.FC = () => {
  const [rows, setRows] = useState<RowData[]>([
    {
      invId: "",
      quantity: 0,
      unitCost: 0,
      profitPercent: 0,
      totalCost: 0,
      quotePrice: 0,
    },
  ]);

  const [timeRows, setTimeRows] = useState<TimeRowData[]>([
    { drawingTime: "", productionTime: "", deliveryTime: "", installTime: "" },
  ]);

  // Add a new row to the table
  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        invId: "",
        quantity: 0,
        unitCost: 0,
        profitPercent: 0,
        totalCost: 0,
        quotePrice: 0,
      },
    ]);
  };

  // Delete a row from the table
  const handleDeleteRow = (index: number) => {
    const updatedRows = rows.filter((_, i) => i !== index);
    setRows(updatedRows);
  };

  // Add a new time row
  const handleAddTimeRow = () => {
    setTimeRows([
      ...timeRows,
      {
        drawingTime: "",
        productionTime: "",
        deliveryTime: "",
        installTime: "",
      },
    ]);
  };

  // Delete a time row
  const handleDeleteTimeRow = (index: number) => {
    const updatedTimeRows = timeRows.filter((_, i) => i !== index);
    setTimeRows(updatedTimeRows);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Estimation
      </Typography>
      <Box component="form" noValidate>
        {/* Project and Client Details */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Project Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Project ID" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Project Address" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Name" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Contact" variant="outlined" />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Client Type" variant="outlined" />
          </Grid>
        </Grid>

        {/* Table for Inventory */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Inventory Details
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>No</TableCell>
                  <TableCell>Inv ID</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Unit Cost</TableCell>
                  <TableCell>Profit %</TableCell>
                  <TableCell>Total Cost</TableCell>
                  <TableCell>Quote Price</TableCell>
                  <TableCell>Add</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.invId}
                        onChange={(e) =>
                          setRows(
                            rows.map((r, i) =>
                              i === index ? { ...r, invId: e.target.value } : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        type="number"
                        value={row.quantity}
                        onChange={(e) =>
                          setRows(
                            rows.map((r, i) =>
                              i === index
                                ? { ...r, quantity: +e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        type="number"
                        value={row.unitCost}
                        onChange={(e) =>
                          setRows(
                            rows.map((r, i) =>
                              i === index
                                ? { ...r, unitCost: +e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        type="number"
                        value={row.profitPercent}
                        onChange={(e) =>
                          setRows(
                            rows.map((r, i) =>
                              i === index
                                ? { ...r, profitPercent: +e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>{row.quantity * row.unitCost}</TableCell>
                    <TableCell>
                      {row.quantity *
                        row.unitCost *
                        (1 + row.profitPercent / 100)}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#009688",
                          "&:hover": { backgroundColor: "#00796b" },
                        }}>
                        Add
                      </Button>
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteRow(index)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleAddRow}
              sx={{
                backgroundColor: "#009688",
                "&:hover": { backgroundColor: "#00796b" },
              }}>
              Add New
            </Button>
          </Box>
        </Box>

        {/* Add Time Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Add Time
          </Typography>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Drawing Time</TableCell>
                  <TableCell>Production Time</TableCell>
                  <TableCell>Delivery Time</TableCell>
                  <TableCell>Install Time</TableCell>
                  <TableCell>Delete</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {timeRows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.drawingTime}
                        onChange={(e) =>
                          setTimeRows(
                            timeRows.map((r, i) =>
                              i === index
                                ? { ...r, drawingTime: e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.productionTime}
                        onChange={(e) =>
                          setTimeRows(
                            timeRows.map((r, i) =>
                              i === index
                                ? { ...r, productionTime: e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.deliveryTime}
                        onChange={(e) =>
                          setTimeRows(
                            timeRows.map((r, i) =>
                              i === index
                                ? { ...r, deliveryTime: e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        fullWidth
                        value={row.installTime}
                        onChange={(e) =>
                          setTimeRows(
                            timeRows.map((r, i) =>
                              i === index
                                ? { ...r, installTime: e.target.value }
                                : r
                            )
                          )
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleDeleteTimeRow(index)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box sx={{ mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleAddTimeRow}
              sx={{
                backgroundColor: "#009688",
                "&:hover": { backgroundColor: "#00796b" },
              }}>
              Add Time
            </Button>
          </Box>
        </Box>

        {/* Final Buttons */}
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Save Estimation
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ ml: 2, "&:hover": { backgroundColor: "#d32f2f" } }}>
            Reset Page
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Estimation;
