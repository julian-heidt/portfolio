import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './components/proTip';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme'
import { Card } from '@mui/material';
import NavBar from './components/NavBar';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ height: '10dvh'} }>
                <NavBar />
            </Container>
            <Container sx={{ display: 'flex', textAlign: 'left', justifyContent: 'flex-start' }}>      
                <Box sx={{ mb: 4, flex: '1 1 100%' }}>
                    <Card sx={{ backgroundColor: 'primary.main' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 2, color: 'text.primary' }}>
                            Julian Heidt
                        </Typography>
                        <Typography variant='h4' component='h1'>
                            Azure Developer
                        </Typography>
                    </Card>
                    <Card>
                        <Typography variant="h4" component="h1" sx={{ mb: 2, color: 'text.primary' }}>
                            More info about me
                        </Typography>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}