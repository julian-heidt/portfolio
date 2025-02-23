import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppTheme from './theme/AppTheme';
import NavBar from './components/NavBar';
//import MainContent from './components/MainContent';
//import Latest from './components/Latest';
//import Footer from './components/Footer';


export default function App(props: { disableCustomTheme?: boolean }) {
    return (
        <AppTheme {...props}>
            
            <NavBar />
            <Container>
                <CssBaseline />
                <h1>HELLO WORLD</h1>
            </Container>
        </AppTheme>
    );
}