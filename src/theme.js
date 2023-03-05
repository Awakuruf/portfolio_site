import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary:{
            main: "#2A28FF",
        },
        secondary: {
            main: "#31D2A5", 
        },
        otherColor: {
            main: "#fff"
        }
    },
})

// Breakpoints setting
//  breakpoints: {
//         values: {
//             sm: 480,
//             md:768,
//             lg: 1280,
//         }
//     }