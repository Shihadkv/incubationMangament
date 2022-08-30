import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { red } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { serverURL } from '../../Constants/constants'


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
            console.log("hiiii");
            axios.post(`${serverURL}/login`, details).then((response) => {
                 console.log('login successs');
                console.log(response);
                localStorage.setItem("userToken", JSON.stringify(response.data.usertoken))

                navigate('/home')
            }).catch((error) => {
                console.log(error);
                if (error.response.data) {
                    console.log(error.response.data.err);
                    setError(error.response.data.err)
                }
            })
        }
    }
    useEffect(() => {
        const token = localStorage.getItem('userToken')
        if (token) {
            navigate('/home')
        } else {
            navigate('/')
        }
    }, [])

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
                        <InsertEmoticonIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        PLEASE LOGIN
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
                            sx={{ mt: 3, mb: 2 , bgcolor: '#1de9b6'}}
                            onClick={signin}
                        >
                            Sign In
                        </Button>
                        <Grid container>

                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

            </Container>
        </ThemeProvider>
    )
}

export default Login