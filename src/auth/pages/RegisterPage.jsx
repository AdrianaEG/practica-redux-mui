import {Link as RouterLink} from 'react-router-dom';
import { Alert, Box, Button, CircularProgress, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import {Google} from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunk';
import { CheckingAuth } from '../../ui/components/CheckingAuth';

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value)=>value.includes('@'), 'El correo debe tener una @'],
  password: [(value)=>value.length>=6, 'El password debe tener más de 6 letras'],
  displayName: [(value)=>value.length>=1, 'El nombre es obligatorio']
}

export const RegisterPage = () => {
  const dispatch = useDispatch();
  
  const {formState, displayName, email, password, onInputChange, isFormValid, emailValid, passwordValid, displayNameValid} = useForm(formData, formValidations);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {status, errorMessage} = useSelector(state=>state.auth);
  const isCheckingAuthentication = useMemo(()=>status==='checking', [status]);

  const onSubmit = (e)=>{
    e.preventDefault();
    setFormSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword(formState));
    if(!isFormValid) return;
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AuthLayout title="Registro">
        <Box component="form" onSubmit={()=>{console.log('')}} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Nombre"
                name="displayName"
                autoComplete="name"
                autoFocus
                placeholder='Adri'
                value={displayName}
                onChange={onInputChange}
                error={!!displayNameValid && formSubmitted}
                helperText={displayNameValid}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                placeholder='email@gmail.com'
                value={email}
                onChange={onInputChange}
                error={!!emailValid && formSubmitted}
                helperText={emailValid}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={onInputChange}
                error={!!passwordValid && formSubmitted}
                helperText={passwordValid}
              />
              {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                disabled={!isFormValid || isCheckingAuthentication}
                onClick={onSubmit}
              >
                Crear cuenta
              </Button>
              {isCheckingAuthentication && <CheckingAuth/>}
              <Grid container>
                <Grid item>
                    <Link component={RouterLink} to="/auth/login">
                    {"Ya tengo una cuenta"}
                    </Link>
                </Grid>
              </Grid>
          </Box>
      </AuthLayout>
    </Container>
  )
}
