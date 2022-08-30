
import React, { useState, useEffect } from 'react'
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


function UserHeader() {

    
    const navigate = useNavigate()

    const [logout, setlogout] = useState()

    const loggingout = () => {
        localStorage.removeItem("userToken")
        setlogout(true)
    }

    useEffect(() => {
        let user = localStorage.getItem("userToken")
        if (!user) {
            navigate('/')
        }
    }, [logout])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='heading' style={{ backgroundColor: '#79955a' }} position="static">
                <Toolbar >
                   
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                      <Link to='/UserStatus' >status </Link>
                      
                    </Typography>
                    <Button color="inherit" onClick={loggingout}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    )


}

export default UserHeader