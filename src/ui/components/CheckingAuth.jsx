import {CircularProgress, Grid } from "@mui/material"

export const CheckingAuth = () => {
  return (
    <Grid container justifyContent="center">
        <Grid item>
            <CircularProgress sx={{display:"flex", margin:"10px auto"}} />
        </Grid>
    </Grid>
  )
}
