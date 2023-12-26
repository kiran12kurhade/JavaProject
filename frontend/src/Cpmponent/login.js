
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Input } from '@mui/material';
import Button from '@mui/material/Button';
import LoginIcon from '@mui/icons-material/Login';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import SignUp from './signup' // Corrected the import path for SignUp

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Paper elevation={3} style={{ padding: "20px" }}>
        {checked ? (
          <Chip icon={<FaceIcon />} label="Sign up" color="primary" variant="outlined" />
        ) : (
          <Chip icon={<LockIcon />} label="Login" color="primary" variant="outlined" />
        )}

        <br />

        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <br />
        {checked ? <SignUp /> : <LoginForm />}
      </Paper>

      <p>
        <TextField id="standard-basic" label="Username" variant="standard" fullWidth size="small" />
      </p>

      {/* <p>
        <TextField id="standard-basic" label="Email" variant="standard" fullWidth size="small" />
      </p> */}

      <p>
        <FormControl sx={{ width: "100%" }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </p>
      <p>
        <Button variant="contained" fullWidth startIcon={<LoginIcon />}>
          Login
        </Button>
      </p>
    </div>
  );
}
