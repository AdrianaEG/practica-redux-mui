import { Button, Drawer, Grid, TextField, Typography } from "@mui/material"
import {DeleteOutline, SaveOutlined, UploadOutlined} from '@mui/icons-material';
import { ImagesGallery } from "../components/ImagesGallery";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { setActiveFood } from "../../store/foods/foodsSlice";
import { useEffect } from "react";
import { startSaveFoods } from "../../store/foods/thunk";
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css'

export const MenuSelected = () => {
    const dispatch = useDispatch();
    const {active, messageSaved, isSaving} = useSelector(state=>state.foods); 
    const {formState, onInputChange, title, body, ingredients, recipe} = useForm(active);

    useEffect(() => {
        dispatch(setActiveFood(formState));
    }, [formState])

    const onClickSave = ()=>{
        dispatch(startSaveFoods())
    }
    useEffect(() => {
        if(messageSaved.length >0){
            Swal.fire('Nota actualizada', messageSaved, 'success')
          }
    }, [messageSaved])
    
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
                    value={title}
                    onChange={onInputChange}
                />
            </Grid>
            <Grid item>
                <Button color="primary" variant="outlined" onClick={onClickSave} disabled={isSaving}><SaveOutlined sx={{fontSize: 15, mr:1}}/>Guardar</Button>
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
                    value={body}
                    onChange={onInputChange}
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
                        value={ingredients}
                        onChange={onInputChange}
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
                        value={recipe}
                        onChange={onInputChange}
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
