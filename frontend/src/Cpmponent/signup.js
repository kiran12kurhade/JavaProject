import React from 'react'
// import SignUp from './signup';

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
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
import Alert from '@mui/material/Alert';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import FaceIcon from '@mui/icons-material/Face';
import LockIcon from '@mui/icons-material/Lock';
import Switch from '@mui/material/Switch';
import LoginForm from './login';
const isEmail = (email) =>
  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(false);
  //Inputs
  const[usernameInput,setUsernameInput]=React.useState();
  const[firstnameInput,setFirstNameInput]=React.useState();
  const[lastnameInput,setLastNameInput]=React.useState();
  const[emailInput,setEmailInput]=React.useState();
  const[passwordInput,setPasswordInput]=React.useState();
  const [checked, setChecked] = React.useState(true);

  //Validation onBlur
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

 const handleUsername=()=>{
  if(!usernameInput || usernameInput.length<5 ||
     usernameInput.length>16){
      setUsernameError(true);
      return;
    }

    setUsernameError(false);
 }

 
 //Validation For onBlur Firstname
 const handleFirstname=()=>{
  if(!firstnameInput || firstnameInput.length<3 || firstnameInput.length>8){
setFirstNameError(true);
return;
  }
  setFirstNameError(false);
 }

 //validation for onBlur LastName:
 const handleLastName=()=>{
  if(!lastnameInput || lastnameInput.length<3 || lastnameInput.length>8){
    setLastNameError(true);
    return;
    
  }
  setLastNameError(false)

 }

 //validation for onBlur email

 const handleEmail=()=>{
  if(!isEmail (emailInput)){
  setEmailError(true);
  return;
  }
  setEmailError(false)
 }

 //validation for onBlur password
 const handlePassword=()=>{
  if(!passwordInput || passwordInput.length<8 || passwordInput.length>20){
    setPasswordError(true);
    return;
  }
  setPasswordError(false);
 }


  //Input Errors
  const [usernameError,setUsernameError]=React.useState(false);
  const [firstnameError,setFirstNameError]=React.useState(false);
  const [lastnameError,setLastNameError]=React.useState(false);
  const [emailError,setEmailError]=React.useState(false);
  const [passwordError,setPasswordError]=React.useState(false);
  
  //form validity
  const[formValid,setFormValid]=React.useState();

  const handleSubmit =(e) =>{
    e.preventDefault();

  if(usernameError || !usernameInput){
    setFormValid("Username is Between 5-15 charachters long. Please Re-Enter");
    return;
  }
  if(firstnameError || !firstnameInput){
    setFormValid("First Name is Between 3-8 charachters long. Please Re-Enter");
    return;
  }
  if(lastnameError || !lastnameInput){
    setFormValid("Last Name is Between 3-8 charachters long. Please Re-Enter");
    return;
  }

 if(emailError || !emailInput){
  setFormValid("Email is inValid Please Re-enter");
  return;
 }
 if(passwordError || !passwordInput){
  setFormValid("Password is set to 8-20 charachter long.Please Re-Enter ");
  return;
 }
 setFormValid(null);
 
   

    console.log(usernameInput);
    console.log(firstnameInput);
    console.log(lastnameInput);
    console.log(emailInput);
    console.log(passwordInput);
    console.log(selectedType);
  };


  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();

  };

  const [selectedType, setSelectedType] = React.useState('Barrower'); // Default value set to Borrower (value: 10)
  
  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
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
    <TextField id="standard-basic" 
    error ={usernameError}
    label="Username"
    value={usernameInput}
    onChange={ (event) => setUsernameInput (event.target.value) }
    onBlur={handleUsername}
    variant="standard" 
    fullWidth
    size="small" />
    </p> 

    <p>
    <TextField id="standard-basic" 
    error={firstnameError}
    label="First Name"
    value={firstnameInput}
    onChange={ (event) => setFirstNameInput (event.target.value) }
    onBlur={handleFirstname}
    variant="standard" 
    fullWidth
    size="small" />
    </p> 

    
    <p>
    <TextField id="standard-basic" 
    error={lastnameError}
    label="Last Name"
    value={lastnameInput}
    onChange={ (event) => setLastNameInput (event.target.value) }
    onBlur={handleLastName}
    variant="standard" 
    fullWidth
    size="small" />
    </p> 

     <p>
    <TextField id="standard-basic" 
    error={emailError}
    label="Email"
    value={emailInput}
    onChange={ (event) => setEmailInput (event.target.value) }
    onBlur={handleEmail}
    variant="standard" 
    fullWidth
    size="small" />
    </p>

   
<p>
    <FormControl sx={{width: "100%" }} variant="standard">
          <InputLabel error={passwordError} htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            error={passwordError}
            id="standard-adornment-password"
            fullWidth
            type={showPassword ? 'text' : 'password'}
            value={passwordInput}
            onChange={ (event) => setPasswordInput (event.target.value) }
            onBlur={handlePassword}
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
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel  variant="standard" htmlFor="uncontrolled-native">
          Type
        </InputLabel>
        <NativeSelect
          value={selectedType}
          onChange={handleTypeChange}
          inputProps={{
            name: 'Type',
            id: 'uncontrolled-native',
          }}
        >
          <option value="Borrower">Borrower</option>
          <option value="Supplier">Supplier</option>
          <option value="Investor">Investor</option>
        </NativeSelect>
      </FormControl>
      {/* Additional rendering based on selectedType */}
      {selectedType === 'Borrower' && <p>You've selected Borrower.</p>}
      {selectedType === 'Supplier' && <p>You've selected Supplier.</p>}
      {selectedType === 'Investor' && <p>You've selected Investor.</p>}
    </Box>

    </p>  
    <p>
    <Button onClick={handleSubmit} variant="contained" fullWidth  startIcon={<LoginIcon />}>
    SignUp
      </Button>
    </p>
    <p>{formValid && (  <Alert severity="error">{formValid}</Alert>)}</p>

  
   
    </div>
  )
}
