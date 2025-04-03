import React from 'react'
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
  Popover,
  Avatar,
} from '@mui/material'
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined'
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined'
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined'
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined'

interface ProfilePopupProps {
  anchorEl: HTMLElement | null
  open: boolean
  handleClose: () => void
}

interface MenuItem {
  label: string
  id: string
  icon: React.ReactNode
}

const ProfilePopup: React.FC<ProfilePopupProps> = ({
  anchorEl,
  open,
  handleClose,
}) => {
  const menuItems: MenuItem[] = [
    {
      label: 'Settings',
      id: 'settings',
      icon: <SettingsOutlinedIcon fontSize="small" />,
    },
    {
      label: 'Project',
      id: 'project',
      icon: <FolderOutlinedIcon fontSize="small" />,
    },
    {
      label: 'Logout',
      id: 'logout',
      icon: <LogoutOutlinedIcon fontSize="small" />,
    },
  ]

  const adminItems: MenuItem[] = [
    {
      label: 'Manage Users',
      id: 'manage-users',
      icon: <PeopleAltOutlinedIcon fontSize="small" />,
    },
    {
      label: 'Sign Up user',
      id: 'sign-up-user',
      icon: <PersonAddOutlinedIcon fontSize="small" />,
    },
    {
      label: 'Feature',
      id: 'feature',
      icon: <ExtensionOutlinedIcon fontSize="small" />,
    },
  ]

  const handleMenuClick = (id: string): void => {
    // Handle navigation or action based on menu item
    console.log(`Clicked on ${id}`)
    handleClose()
  }

  return (
    <Popover
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{
        elevation: 4,
        sx: {
          mt: 0.5,
          overflow: 'visible',
          width: 230,
          borderRadius: 1,
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
    >
      {/* User profile header */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #f0f0f0',
          bgcolor: '#f9f9f9',
        }}
      >
        <Avatar sx={{ bgcolor: '#1976d2', width: 40, height: 40, mr: 1.5 }}>
          D
        </Avatar>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Deve Loper
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Administrator
          </Typography>
        </Box>
      </Box>

      <List disablePadding sx={{ pt: 1, pb: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick(item.id)}
              sx={{
                py: 1,
                px: 2,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: '#666' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Divider />

      <Box sx={{ p: 1.5, px: 2, bgcolor: '#f9f9f9' }}>
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 700, color: '#555', fontSize: '0.75rem' }}
        >
          ADMIN
        </Typography>
      </Box>

      <List disablePadding sx={{ pt: 1, pb: 1 }}>
        {adminItems.map((item) => (
          <ListItem key={item.id} disablePadding>
            <ListItemButton
              onClick={() => handleMenuClick(item.id)}
              sx={{
                py: 1,
                px: 2,
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 36, color: '#666' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ fontWeight: 500 }}>
                    {item.label}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Popover>
  )
}

export default ProfilePopup
