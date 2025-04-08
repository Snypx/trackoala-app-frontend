import React, { useState } from "react";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import logo from "/Trackola.svg";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ProfilePopup from "./ProfilePopup"; // Import the ProfilePopup component

interface HeaderProps {
  setDrawerOpen: (open: boolean) => void; // Add prop type for controlling the drawer
}

const Header: React.FC<HeaderProps> = ({ setDrawerOpen }) => {
  // State for managing the profile popup
  const [profileAnchorEl, setProfileAnchorEl] = useState<HTMLElement | null>(
    null
  );
  const profilePopupOpen = Boolean(profileAnchorEl);

  const handleProfileClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    setProfileAnchorEl(event.currentTarget);
  };

  const handleProfileClose = (): void => {
    setProfileAnchorEl(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        height: "70px",
        borderBottom: "1px solid #e0e0e0",
        // bgcolor: '#f0f0f0',
      }}>
      <Box
        sx={{
          width: "95dvw",
          padding: "0 24px",
          m: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Trackoala" style={{ height: "60px" }} />
        </Box>

        {/* IconButton */}
        <Box sx={{ display: "flex", alignItems: "center", gap: "1.5vw" }}>
          <IconButton sx={{ height: 32, width: 32 }}>
            <NotificationsIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <IconButton onClick={handleProfileClick}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Avatar
                sx={{
                  bgcolor: "#1976d2",
                  width: 32,
                  height: 32,
                }}>
                D
              </Avatar>
              <Typography variant="h6">Deve</Typography>
            </Box>
          </IconButton>

          {/* Profile Popup */}
          <ProfilePopup
            anchorEl={profileAnchorEl}
            open={profilePopupOpen}
            handleClose={handleProfileClose}
            setDrawerOpen={setDrawerOpen}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
