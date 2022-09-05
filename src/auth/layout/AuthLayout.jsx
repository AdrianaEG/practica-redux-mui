import { Avatar, Box, Container, CssBaseline, Typography } from '@mui/material';
export const AuthLayout = ({title, children}) => {
  return (
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                
            </Avatar>
            <Typography component="h1" variant="h5">
                {title}
            </Typography>
            {children}
        </Box>
    </Container>
  )
}
