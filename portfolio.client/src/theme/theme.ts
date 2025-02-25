import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
    cssVariables: true,
    palette: {
        mode: 'dark',
        primary: {
            main: '#526f80',
        },
        secondary: {
            main: '#528079',
        },
        warning: {
            main: '#8f3a20',
        },
        info: {
            main: '#528079',
        },
        error: {
            main: '#530101',
        },
        success: {
            main: '#015301',
        },
    },
});

export default theme;