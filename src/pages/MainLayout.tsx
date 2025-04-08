import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Box } from "@mui/material";
import SideDrawer from "../components/SideDrawer";
import AddInventory from "../components/AddInventory";
import Header from "../components/Header";
import Settings from "../components/Settings";
import AddSupplier from "../components/AddSupplier";
import AddProject from "../components/AddProject";
import Estimation from "../components/Esitimation";
import SignUp from "../components/SignUp";

const MainLayout: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    // Default expanded state for Inventory section
    Inventory: true,
  });
  const [activePath, setActivePath] = useState<string>("/dashboard");

  // Toggle drawer open/close
  const toggleDrawer = () => {
    setOpen(!open);
    setExpandedItems({ Inventory: false }); // Reset expanded items when drawer is toggled
  };

  // Toggle submenu expand/collapse
  const toggleSubMenu = (itemText: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  // Handle navigation when items are clicked
  const handleItemClick = (
    path: string,
    itemText: string,
    hasSubItems: boolean
  ) => {
    if (!open) {
      // If drawer is closed, open it
      setOpen(true);
    } else if (hasSubItems) {
      // Toggle submenu if drawer is open and item has subitems
      toggleSubMenu(itemText);
    } else {
      // Navigate to the path if item has no subitems
      setActivePath(path);
      setOpen(false);
    }
  };

  // Handle submenu item click
  const handleSubItemClick = (path: string) => {
    setActivePath(path);
    setOpen(false);
  };

  // Calculate the drawer width based on open state
  const drawerWidth = 65;

  return (
    <BrowserRouter>
      <Header setDrawerOpen={setOpen} />
      <Box
        sx={{
          display: "flex",
        }}>
        <SideDrawer
          open={open}
          expandedItems={expandedItems}
          toggleDrawer={toggleDrawer}
          handleItemClick={handleItemClick}
          handleSubItemClick={handleSubItemClick}
          activePath={activePath}
        />
        <Box
          component="main"
          sx={{
            overflowY: "auto",
            height: "calc(100vh - 71px)",
            flexGrow: 1,
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: `${drawerWidth}px`,
            transition: (theme) =>
              theme.transitions.create(["margin", "width"], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
              }),
          }}>
          <Routes>
            <Route path="/inventory/add" element={<AddInventory />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/supplier/add" element={<AddSupplier />} />
            <Route path="/project/add" element={<AddProject />} />
            <Route path="/estimation/new" element={<Estimation />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default MainLayout;
