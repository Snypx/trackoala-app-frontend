import { Avatar, Box, IconButton, Typography } from '@mui/material'
import logo from '/Trackola.svg'
import NotificationsIcon from '@mui/icons-material/Notifications'

const Header = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        height: '70px',
        borderBottom: '1px solid #e0e0e0',
        // bgcolor: '#f0f0f0',
      }}
    >
      <Box
        sx={{
          width: '90dvw',
          padding: '0 24px',
          m: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Trackoala" style={{ height: '60px' }} />
        </Box>

        {/* IconButton */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '1.5vw' }}>
          <IconButton sx={{ height: 32, width: 32 }}>
            <NotificationsIcon sx={{ fontSize: 28 }} />
          </IconButton>

          <IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Avatar
                sx={{
                  bgcolor: '#1976d2',
                  width: 32,
                  height: 32,
                }}
              >
                D
              </Avatar>
              <Typography variant="h6">Deve</Typography>
            </Box>
          </IconButton>
        </Box>
      </Box>
    </Box>
  )
}

export default Header
