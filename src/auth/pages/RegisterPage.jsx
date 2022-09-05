import {Link as RouterLink} from 'react-router-dom';
import { Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import {Google} from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {
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
                name="name"
                autoComplete="name"
                autoFocus
                placeholder='Adri'
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
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Crear cuenta
              </Button>
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
