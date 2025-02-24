import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    cssVariables: true,
    palette: {
        primary: {
            main: '#41735f',
        },
        secondary: {
            main: '#734155',
        },
        error: {
            main: red.A400,
        },
        text: {
            primary: '#a9d0ae',
            secondary: '#a2bfc2'
        }
    },
});

export default theme;