import { Button, Drawer, Grid, Icon, Typography } from "@mui/material"
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import ShuffleIcon from '@mui/icons-material/Shuffle';
export const NothingSelected = () => {
  return (
    <Grid 
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
            backgroundColor: 'secondary.main',
            height: "calc(100vh - 120px)"
        }}
    >
      <Grid item mb="15px">
        <Typography variant="h5" component="h5" textAlign="center" mb="5px">Organiza las comidas de tu semana!</Typography>
        <Drawer></Drawer>
        <Typography textAlign="center" sx={{maxWidth:"630px"}}>Edita tus entradas en el menú o haz click en el botón que se encuentra en la esquina inferior para agregar una entrada!</Typography>
      </Grid>
      <Grid item>
        <Icon sx={{ fontSize: 60 }}>
          <RamenDiningIcon sx={{ fontSize: 60 }} />
        </Icon>
      </Grid>
      <Grid item mt="15px">
        <Button fullWidth sx={{backgroundColor: 'primary.main', color:"#000", padding: " 5px 15px"}}>Necesito una idea <ShuffleIcon/></Button>
      </Grid>
    </Grid>
  )
}
