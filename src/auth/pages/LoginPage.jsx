import {Link as RouterLink} from 'react-router-dom';
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import {Google} from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import { useDispatch } from 'react-redux';
import { checkingAuthentication, startGoogleSignIn } from '../../store';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const camposForm = {
    email: 'adriana@algo.com',
    password: '123ABC'
  }
  const onSubmit = (e)=>{
    dispatch(checkingAuthentication());
    e.preventDefault();
  }

  const onGoogleSignIn = ()=>{
   dispatch(startGoogleSignIn())
  }

  const {email, password, onInputChange} = useForm(camposForm)
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <AuthLayout title="Login">
        <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
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
              />
              <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              >
              Login
              </Button>
              <Button
              fullWidth
              variant="outlined"
              sx={{ mt: 0, mb: 2 }}
              onClick={onGoogleSignIn}
              >
              <Google/>
              <Typography
                  sx={{
                  ml: 1
                  }}
              >Google</Typography>
              </Button>
              <Grid container>
              <Grid item>
                  <Link component={RouterLink} to="/auth/register">
                  {"Crear una cuenta"}
                  </Link>
              </Grid>
              </Grid>
          </Box>
      </AuthLayout>
    </Container>
  )
}
