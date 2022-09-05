import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const pinkTheme = createTheme({
    palette:{
        primary:{
            main: '#cb9ca1'
        },
        secondary:{
            main: '#ffcdd2'
        },
        error:{
            main: red.A400
        }
    }
})