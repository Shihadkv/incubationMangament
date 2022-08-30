import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { adminServer } from '../../Constants/constants'


function Login() {
    const theme = createTheme();
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const details = {
        email,
        password
    }
    const signin = (e) => {
        e.preventDefault()
        if (!email || !password) {
            setError('Enter All Details')
        } else {
          
            axios.post(`${adminServer}/login`, details).then((response) => {
                console.log(response);
               
                
                localStorage.setItem("adminToken", JSON.stringify(response.data.adminToken))
                navigate('/admin/applicationList')
            }).catch((error) => {
                console.log(error,"errorr");
                if (error.response.data.err) {
                    console.log(error.response.data.err);
                    setError(error.response.data.err)
                }
            })
        }

    }
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: '#00e676' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        ADMIN LOGIN
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 1 }}>
                        {error && <h5 style={{ color: 'red' }}>{error}</h5>}
                        <TextField
                            color="success"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                        <TextField
                         color="success"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 ,bgcolor: '#1de9b6'}}
                            onClick={signin}
                        >
                            Sign In
                        </Button>
                        <Grid container>


                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    )
}

export default Login