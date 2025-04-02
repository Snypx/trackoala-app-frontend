import React, { useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from '@mui/material'
import {
  Email,
  Lock,
  Visibility,
  VisibilityOff,
  Person,
  CalendarToday,
} from '@mui/icons-material'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`auth-tabpanel-${index}`}
      aria-labelledby={`auth-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 1 }}>{children}</Box>}
    </div>
  )
}

const Login: React.FC = () => {
  const [tabValue, setTabValue] = useState(0)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [birthDate, setBirthDate] = useState<string>('')

  // Form state for validation
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  })

  const [formErrors, setFormErrors] = useState({
    email: false,
    password: false,
    name: false,
    confirmPassword: false,
    birthDate: false,
  })

  // Fix the type declaration for newValue parameter
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue)
    // Reset form when switching tabs
    setFormValues({
      email: '',
      password: '',
      name: '',
      confirmPassword: '',
    })
    setFormErrors({
      email: false,
      password: false,
      name: false,
      confirmPassword: false,
      birthDate: false,
    })
    setBirthDate('')
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword)
  }

  const handleInputChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormValues({
        ...formValues,
        [field]: event.target.value,
      })

      // Clear error when typing
      if (formErrors[field as keyof typeof formErrors]) {
        setFormErrors({
          ...formErrors,
          [field]: false,
        })
      }
    }

  const handleBirthDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBirthDate(event.target.value)

    if (formErrors.birthDate) {
      setFormErrors({
        ...formErrors,
        birthDate: false,
      })
    }
  }

  const validateSignupForm = () => {
    const errors = {
      email: !formValues.email || !/\S+@\S+\.\S+/.test(formValues.email),
      password: !formValues.password || formValues.password.length < 8,
      name: !formValues.name,
      confirmPassword: formValues.password !== formValues.confirmPassword,
      birthDate: !birthDate,
    }

    setFormErrors(errors)
    return !Object.values(errors).some((error) => error)
  }

  const validateLoginForm = () => {
    const errors = {
      email: !formValues.email || !/\S+@\S+\.\S+/.test(formValues.email),
      password: !formValues.password,
      name: false,
      confirmPassword: false,
      birthDate: false,
    }

    setFormErrors(errors)
    return !errors.email && !errors.password
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()

    if (tabValue === 0) {
      // Login validation
      if (validateLoginForm()) {
        console.log('Login submitted:', {
          email: formValues.email,
          password: formValues.password,
        })
        // Add login logic here
      }
    } else {
      // Signup validation
      if (validateSignupForm()) {
        console.log('Signup submitted:', {
          name: formValues.name,
          email: formValues.email,
          password: formValues.password,
          birthDate,
        })
        // Add signup logic here
      }
    }
  }

  // Common input field styling
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#00A896',
      },
      '&.Mui-error fieldset': {
        borderColor: '#ff3d00',
      },
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#00A896',
    },
  }

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          maxWidth: 450,
          mx: 'auto',
          boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          borderRadius: '12px',
          overflow: 'visible',
        }}
      >
        <CardContent sx={{ py: 2, px: 4 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <img src="/Trackola.svg" alt="Trackoala" height={65} />
          </Box>

          <Typography
            variant="h5"
            component="h1"
            align="center"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: '#00A896',
            }}
          >
            {tabValue === 0 ? 'Welcome back!' : 'Create your account'}
          </Typography>

          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant="fullWidth"
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#FF5A33',
                height: 3,
              },
              '& .Mui-selected': {
                color: '#FF5A33 !important',
                fontWeight: 600,
              },

              borderBottom: '2px solid #f0f0f0',
            }}
          >
            <Tab
              label="Login"
              sx={{ textTransform: 'none', fontSize: '1rem', fontWeight: 600 }}
            />
            <Tab
              label="Sign Up"
              sx={{ textTransform: 'none', fontSize: '1rem', fontWeight: 600 }}
            />
          </Tabs>

          <form onSubmit={handleSubmit}>
            <TabPanel value={tabValue} index={0}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={formValues.email}
                onChange={handleInputChange('email')}
                error={formErrors.email}
                helperText={
                  formErrors.email ? 'Please enter a valid email' : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                margin="normal"
                value={formValues.password}
                onChange={handleInputChange('password')}
                error={formErrors.password}
                helperText={formErrors.password ? 'Password is required' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  mt: 1,
                  mb: 3,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    color: '#00A896',
                    cursor: 'pointer',
                    fontWeight: 500,
                    '&:hover': {
                      textDecoration: 'underline',
                    },
                  }}
                >
                  Forgot password?
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  backgroundColor: '#FF5A33',
                  '&:hover': {
                    backgroundColor: '#E54A29',
                  },
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(255,90,51,0.3)',
                  borderRadius: '8px',
                }}
              >
                Log In
              </Button>
            </TabPanel>

            <TabPanel value={tabValue} index={1}>
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                margin="normal"
                value={formValues.name}
                onChange={handleInputChange('name')}
                error={formErrors.name}
                helperText={formErrors.name ? 'Name is required' : ''}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={formValues.email}
                onChange={handleInputChange('email')}
                error={formErrors.email}
                helperText={
                  formErrors.email ? 'Please enter a valid email' : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              {/* Replace DatePicker with a simple TextField for date */}
              <TextField
                fullWidth
                label="Date of Birth"
                type="date"
                variant="outlined"
                margin="normal"
                value={birthDate}
                onChange={handleBirthDateChange}
                error={formErrors.birthDate}
                helperText={
                  formErrors.birthDate ? 'Date of birth is required' : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CalendarToday sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                sx={inputSx}
              />

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? 'text' : 'password'}
                variant="outlined"
                margin="normal"
                value={formValues.password}
                onChange={handleInputChange('password')}
                error={formErrors.password}
                helperText={
                  formErrors.password
                    ? 'Password must be at least 8 characters'
                    : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              <TextField
                fullWidth
                label="Confirm Password"
                type={showConfirmPassword ? 'text' : 'password'}
                variant="outlined"
                margin="normal"
                value={formValues.confirmPassword}
                onChange={handleInputChange('confirmPassword')}
                error={formErrors.confirmPassword}
                helperText={
                  formErrors.confirmPassword ? "Passwords don't match" : ''
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock sx={{ color: 'text.secondary' }} />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                sx={inputSx}
              />

              <Box sx={{ mt: 2, mb: 3 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  sx={{ fontSize: '0.85rem' }}
                >
                  By signing up, you agree to our{' '}
                  <Typography
                    component="span"
                    sx={{
                      color: '#00A896',
                      cursor: 'pointer',
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Terms of Service
                  </Typography>{' '}
                  and{' '}
                  <Typography
                    component="span"
                    sx={{
                      color: '#00A896',
                      cursor: 'pointer',
                      fontWeight: 500,
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Privacy Policy
                  </Typography>
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                size="large"
                type="submit"
                sx={{
                  backgroundColor: '#FF5A33',
                  '&:hover': {
                    backgroundColor: '#E54A29',
                  },
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: '0 4px 10px rgba(255,90,51,0.3)',
                  borderRadius: '8px',
                }}
              >
                Create Account
              </Button>
            </TabPanel>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default Login
