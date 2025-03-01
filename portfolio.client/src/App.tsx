import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@emotion/react';
import theme from './theme/theme'
import { Card, Divider } from '@mui/material';
import NavBar from './components/NavBar';

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Container sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100vw !important' }}>
                <Box sx={ {my: 10} }>
                    <NavBar />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', mb: 4 }}>
                    <Card sx={{ backgroundColor: 'primary.main', width: '30vw', textAlign: 'left', alignContent: 'center' }}>
                        <Typography variant="h1" component="h1" sx={{ mx: 4, my: 4, color: 'text.primary' }}>
                            Julian Heidt
                        </Typography>
                        <Typography variant='h4' component='h1' sx={ {mx: 4, mb: 4} }>
                            Azure Developer
                        </Typography>
                    </Card>
                    <Card sx={{ width: '70vw', textAlign: 'left', alignContent: 'center' }}>
                        <Typography variant="h4" component="h1" sx={{ m: 4, color: 'text.primary' }}>
                            Driven Software Engineer with 3 years of experience in Azure, C#, .NET and Web development 
                        </Typography>
                    </Card>
                </Box>
                <Divider/>
                <Box sx={{ my: 4, flex: '1 1'}}>
                    <Card sx={{ backgroundColor: 'primary.main' }}>
                        <Typography variant="h1" component="h1" sx={{ mb: 2, color: 'text.primary', textAlign: 'left', alignContent: 'center' }}>
                            Projects or About?
                        </Typography>
                    </Card>
                </Box>
            </Container>
        </ThemeProvider>
    );
}