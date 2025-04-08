import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Grid,
  FormControl,
  InputLabel,
  Select,
  Container,
  SelectChangeEvent,
  Autocomplete,
  TextareaAutosize,
} from "@mui/material";

interface InventoryFormData {
  category: string;
  supplierId: string;
  inventoryId: string;
  itemType: string;
  name: string;
  thickness: string;
  length: string;
  width: string;
  referenceCode: string;
  quantity: string;
  finish: string;
  grain: string;
  leadTime: string;
  note: string;
}

const AddInventory: React.FC = () => {
  const [formData, setFormData] = useState<InventoryFormData>({
    category: "",
    supplierId: "",
    inventoryId: "",
    itemType: "",
    name: "",
    thickness: "",
    length: "",
    width: "",
    referenceCode: "",
    quantity: "",
    finish: "",
    grain: "None",
    leadTime: "",
    note: "",
  });

  const suppliers = [
    "acme corp (SUPP-D-001)",
    "premium textiles (SUPP-D-004)",
    "modern gadgets (SUPP-D-005)",
    "green solutions (SUPP-D-006)",
    "auto parts suppliers (SUPP-D-007)",
    "luxury furniture (SUPP-D-008)",
  ];

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e: SelectChangeEvent) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAutocompleteChange = (name: string, value: string | null) => {
    setFormData({
      ...formData,
      [name]: value || "",
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add API call to save inventory data
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Add Inventory
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Inventory Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="inventory-category-label">
                Choose Inventory Type
              </InputLabel>
              <Select
                labelId="inventory-category-label"
                id="inventory-category"
                name="category"
                value={formData.category}
                onChange={handleSelectChange}
                label="Choose Inventory Type">
                <MenuItem value="hardware">Hardware</MenuItem>
                <MenuItem value="material">Material / Primary Stock</MenuItem>
                <MenuItem value="special">Special Material</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Autocomplete
              id="supplierId"
              freeSolo
              options={suppliers}
              value={formData.supplierId}
              onChange={(_, newValue) =>
                handleAutocompleteChange("supplierId", newValue)
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="supplierId"
                  placeholder="Supplier ID"
                  variant="outlined"
                  label="Supplier ID"
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="inventoryId"
              name="inventoryId"
              placeholder="MAT-ID"
              variant="outlined"
              label="Inventory ID"
              value={formData.inventoryId}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="itemType"
              name="itemType"
              placeholder="Material"
              variant="outlined"
              label="Item Type"
              value={formData.itemType}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              placeholder="Inventory Name"
              variant="outlined"
              label="Name"
              value={formData.name}
              onChange={handleTextInputChange}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
          Dimensions
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="thickness"
              name="thickness"
              placeholder="Thickness"
              variant="outlined"
              label="Thickness (mm)"
              value={formData.thickness}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="length"
              name="length"
              placeholder="Length"
              variant="outlined"
              label="Length (mm)"
              value={formData.length}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              id="width"
              name="width"
              placeholder="Width"
              variant="outlined"
              label="Width (mm)"
              value={formData.width}
              onChange={handleTextInputChange}
            />
          </Grid>
        </Grid>

        <Typography variant="h6" sx={{ mt: 5, mb: 3 }}>
          Additional Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="referenceCode"
              name="referenceCode"
              placeholder="REF-ID"
              variant="outlined"
              label="Reference Code"
              value={formData.referenceCode}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="quantity"
              name="quantity"
              placeholder="Quantity"
              variant="outlined"
              label="Quantity"
              type="number"
              inputProps={{ min: 0 }}
              value={formData.quantity}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              id="finish"
              name="finish"
              placeholder="Finish"
              variant="outlined"
              label="Finish"
              value={formData.finish}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth variant="outlined">
              <InputLabel id="grain-label">Grain</InputLabel>
              <Select
                id="grain"
                name="grain"
                value={formData.grain}
                onChange={handleSelectChange}
                label="Grain">
                <MenuItem value="None">None</MenuItem>
                <MenuItem value="Length">Length</MenuItem>
                <MenuItem value="Width">Width</MenuItem>
                <MenuItem value="Custom">Custom</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              id="leadTime"
              name="leadTime"
              placeholder="Time"
              variant="outlined"
              label="Lead Time"
              value={formData.leadTime}
              onChange={handleTextInputChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextareaAutosize
              aria-label="note"
              minRows={4}
              name="note"
              placeholder="Add notes here"
              style={{
                width: "96.5%",
                padding: "20px 15px",
                height: "2%",
                borderRadius: "4px",
                borderColor: "#c4c4c4",
                fontFamily: "Roboto, Arial, sans-serif",
                fontSize: "16px",
              }}
              value={formData.note}
              onChange={handleTextareaChange}
            />
          </Grid>
        </Grid>

        <Box sx={{ mt: 5, textAlign: "center" }}>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "#009688",
              "&:hover": { backgroundColor: "#00796b" },
            }}>
            Add Inventory
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default AddInventory;
