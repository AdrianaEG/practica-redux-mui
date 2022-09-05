import { Button, Drawer, Grid, TextField, Typography } from "@mui/material"
import {DeleteOutline, SaveOutlined, UploadOutlined} from '@mui/icons-material';
import { ImagesGallery } from "../components/ImagesGallery";

export const MenuSelected = () => {
  return (
    <Grid container padding="10px 60px">
        <Grid container direction="row" justifyContent="space-between" alignItems="center" mb="10px">
            <Grid item> 
                <TextField
                    type="text"
                    variant="standard"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{border: 'none', mb:1}}
                    name='title'
                />
            </Grid>
            <Grid item>
                <Button color="primary" variant="outlined"><SaveOutlined sx={{fontSize: 15, mr:1}}/>Guardar</Button>
            </Grid>

        </Grid>
        <Grid container width="100%">
            <Grid item width="100%">
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué vas a comer en el dia de hoy?"
                    minRows={5}
                    name='body'
                />
            </Grid>
            <Drawer/>
            <Grid container direction="row" width="100%" justifyContent="space-between">
                <Grid item mt="10px" width="49%">
                    <TextField
                        type="text"
                        label="Ingredientes"
                        variant="filled"
                        fullWidth
                        multiline
                        placeholder="Ingredientes"
                        minRows={5}
                        name='ingredients'
                    />
                </Grid>
                <Grid item mt="10px" width="49%">
                    <TextField
                        type="text"
                        label="Receta"
                        variant="filled"
                        fullWidth
                        multiline
                        placeholder="Receta"
                        minRows={5}
                        name='recipe'
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid width="100%">
            <ImagesGallery/>
        </Grid>
    </Grid>
  )
}
