import React, { useState ,useEffect } from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import GroupsIcon from '@mui/icons-material/Groups';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import LogoutIcon from '@mui/icons-material/Logout';
import './SideBar.css'
import {useNavigate} from 'react-router-dom'

const sidenav = ['admin/applicationlist','admin/recordtrack','admin/bookingslots','logout']


function Siderbar() {

    const [logout,setlogout] = useState()
    const navigate = useNavigate();

    const loggingout = () =>{
        localStorage.removeItem("adminToken")
        setlogout(true)
    }


    useEffect(() => {
        let admin  = localStorage.getItem("adminToken")
        if (!admin) {
            navigate('/admin')
        }
      }, [logout])


    return (
        <Box className='sidebar' >
            <List>
                {['List of Applicants', 'Track Records', 'Booking Slots',  'Logout'].map((text, index) => (
                    <ListItemButton
                        key={text}
                        sx={{
                            minHeight: 48,
                            px: 2.5,
                        }} 
                        onClick={()=>{
                            text == 'Logout' ? loggingout() :
                            navigate(`/${sidenav[index]}`)
                        }}
                    >
                        <ListItemIcon
                            sx={{
                                minWidth: 0,
                                mr: 'auto',
                                justifyContent: 'center',
                            }}
                        >
                            {index  === 0 && <GroupsIcon sx={{color:'white'}} />}
                            {index  === 1 && <AnalyticsIcon sx={{color:'white'}} />}
                            {index  === 2 && <BookOnlineIcon sx={{color:'white'}} />}
                            {index  === 3 && <LogoutIcon sx={{color:'white'}} />}
                        </ListItemIcon>
                        <ListItemText className='sidebartext' primary={text} />
                    </ListItemButton>
                ))}
            </List>
        </Box>
    )
}

export default Siderbar