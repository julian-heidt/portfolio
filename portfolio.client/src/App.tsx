import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './components/proTip';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme'

function Copyright() {
    return (
        <Typography
            variant="body2"
            align="center"
            sx={{
                color: 'text.secondary',
            }}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ width: '100%', display: 'flex', textAlign: 'center !important' }}>
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" component="h1" sx={{ mb: 2, color: 'text.primary' }}>
                        Material UI Create React App example in TypeScript
                    </Typography>
                    <ProTip />
                    <Copyright />
                </Box>
            </Container>
        </ThemeProvider>
    );
}