import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Typography,
  Tooltip,
  Collapse,
} from "@mui/material";
import {
  Inventory,
  LocalShipping,
  Business,
  Assignment,
  Calculate,
  Construction,
  Create,
  ShoppingCart,
  History,
  Menu,
  // KeyboardArrowDown,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

interface NavItem {
  text: string;
  icon: React.ReactNode;
  path: string;
  admin?: boolean;
  premium?: boolean;
  subItems?: { text: string; path: string; premium?: boolean }[];
}

const SideDrawer: React.FC = () => {
  const [open, setOpen] = useState(true);
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>(
    {}
  );
  const theme = useTheme();

  const navItems: NavItem[] = [
    {
      text: "Inventory",
      icon: <Inventory />,
      path: "/inventory",
      subItems: [
        { text: "Add Inventory", path: "/inventory/add" },
        { text: "Inventory List", path: "/inventory/list" },
      ],
    },
    {
      text: "Supplier",
      icon: <Business />,
      path: "/supplier",
      subItems: [
        { text: "Add Supplier", path: "/supplier/add" },
        { text: "Supplier List", path: "/supplier/list" },
      ],
    },
    {
      text: "Project",
      icon: <Assignment />,
      path: "/project",
      subItems: [
        { text: "Add Project", path: "/project/add" },
        { text: "Project List", path: "/project/list" },
      ],
    },
    {
      text: "Estimation",
      icon: <Calculate />,
      path: "/estimation",
      premium: true,
      subItems: [
        { text: "Assessment", path: "/estimation/new" },
        { text: "View Estimation", path: "/estimation/list" },
      ],
    },
    {
      text: "Delivery",
      icon: <LocalShipping />,
      path: "/delivery",
      premium: true,
    },
    {
      text: "Fabrication",
      icon: <Construction />,
      path: "/fabrication",
      premium: true,
    },
    { text: "Drawings", icon: <Create />, path: "/drawings", premium: true },
    { text: "Order", icon: <ShoppingCart />, path: "/order", premium: true },
    { text: "Activity", icon: <History />, path: "/activity" },
  ];

  // Effect to close all submenus when drawer is closed
  useEffect(() => {
    if (!open) {
      setExpandedItems({});
    }
  }, [open]);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleSubMenu = (itemText: string) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemText]: !prev[itemText],
    }));
  };

  const handleItemClick = (item: NavItem) => {
    if (!open) {
      // If drawer is closed, just open it without toggling submenu
      setOpen(true);
    } else {
      // Only toggle submenu if drawer is already open
      if (item.subItems && item.subItems.length > 0) {
        toggleSubMenu(item.text);
      }
    }
    // Don't close drawer when clicking menu items
  };

  const drawerWidth = open ? 240 : 65;

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            alignSelf: "end",
            bottom: 0,
            height: "calc(100vh - 70px)",
            boxSizing: "border-box",
            backgroundColor: "#009688",
            color: "white",
            transition: theme.transitions.create("width", {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflowX: "hidden",
            // Hide scrollbar
            scrollbarWidth: "none", // Firefox
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, and Opera
            },
            "-ms-overflow-style": "none", // Internet Explorer and Edge
          },
        }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 1,
          }}>
          <IconButton color="inherit" onClick={toggleDrawer}>
            <Menu />
          </IconButton>
        </Box>

        <List>
          {navItems.map((item) => (
            <React.Fragment key={item.text}>
              <Tooltip title={!open ? item.text : ""} placement="right" arrow>
                <ListItem
                  disablePadding
                  sx={{
                    display: "block",
                  }}>
                  <ListItemButton
                    onClick={() => handleItemClick(item)}
                    sx={{
                      py: 1.5,
                      minHeight: 48,
                      justifyContent: "flex-start",
                      px: 2.5,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                      },
                    }}>
                    <ListItemIcon
                      sx={{
                        minWidth: 36,
                        color: "white",
                      }}>
                      {item.icon}
                    </ListItemIcon>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",

                        width: "100%",
                        opacity: open ? 1 : 0,
                        visibility: open ? "visible" : "hidden",
                        transition: theme.transitions.create(
                          ["opacity", "visibility"],
                          {
                            duration: theme.transitions.duration.standard,
                          }
                        ),
                      }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                        }}>
                        <ListItemText primary={item.text} />
                        {item.premium && (
                          // <Box
                          //   component="span"
                          //   sx={{
                          //     backgroundColor: "#FFD700",
                          //     width: 16,
                          //     height: 16,
                          //     borderRadius: "2px",
                          //     display: "flex",
                          //     justifyContent: "center",
                          //     alignItems: "center",
                          //   }}>

                          //   <Typography
                          //     variant="caption"
                          //     sx={{
                          //       color: "#009688",
                          //       fontWeight: "bold",
                          //       fontSize: "0.6rem",
                          //     }}>
                          //     P
                          //   </Typography>
                          // </Box>
                          <Box
                            component="span"
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}>
                            <Typography
                              variant="caption"
                              sx={{
                                fontSize: "1rem",
                              }}>
                              👑
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      {/* {item.subItems && item.subItems.length > 0 && (
                        <Box ml="auto">
                          {expandedItems[item.text] ? (
                            <KeyboardArrowDown />
                          ) : (
                            <KeyboardArrowRight />
                          )}
                        </Box>
                      )} */}
                    </Box>
                    {!open && item.premium && (
                      // <Box
                      //   component="span"
                      //   sx={{
                      //     position: "absolute",
                      //     right: 5,
                      //     top: 5,
                      //     backgroundColor: "#FFD700",
                      //     width: 14,
                      //     height: 14,
                      //     borderRadius: "2px",
                      //     display: "flex",
                      //     justifyContent: "center",
                      //     alignItems: "center",
                      //   }}>
                      //   <Typography
                      //     variant="caption"
                      //     sx={{
                      //       color: "#009688",
                      //       fontWeight: "bold",
                      //       fontSize: "0.5rem",
                      //     }}>
                      //     P
                      //   </Typography>
                      // </Box>
                      <Box
                        component="span"
                        sx={{
                          position: "absolute",
                          right: 5,
                          top: 5,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}>
                        <Typography
                          variant="caption"
                          sx={{
                            fontSize: "0.8rem",
                          }}>
                          👑
                        </Typography>
                      </Box>
                    )}
                  </ListItemButton>
                </ListItem>
              </Tooltip>
              {open && item.subItems && item.subItems.length > 0 && (
                <Collapse
                  in={expandedItems[item.text]}
                  timeout="auto"
                  unmountOnExit>
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItemButton
                        key={subItem.text}
                        sx={{
                          pl: 5,
                          py: 1,
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                        // Don't close drawer when clicking submenu items
                        onClick={() => {}}>
                        <ListItemIcon
                          sx={{
                            minWidth: 36,
                            color: "white",
                          }}>
                          <KeyboardArrowRight fontSize="small" />
                        </ListItemIcon>
                        <Box display="flex" alignItems="center" width="100%">
                          <ListItemText
                            primary={subItem.text}
                            primaryTypographyProps={{ fontSize: "0.9rem" }}
                          />
                          {/* {subItem.premium && (
                            <Box
                              component="span"
                              sx={{
                                ml: 1,
                                backgroundColor: "#FFD700",
                                width: 14,
                                height: 14,
                                borderRadius: "2px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                              }}>
                              <Typography
                                variant="caption"
                                sx={{
                                  color: "#009688",
                                  fontWeight: "bold",
                                  fontSize: "0.5rem",
                                }}>
                                P
                              </Typography>
                            </Box>
                          )} */}
                        </Box>
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default SideDrawer;
