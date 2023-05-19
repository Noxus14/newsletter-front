
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { Link as RouterLink} from 'react-router-dom'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'
import { useAuthStore } from '../../hooks';

export const NavBar = ( { drawerWidth = 240 }) => {

    const { startLogout } = useAuthStore();

    const logout = () => {
        startLogout();
    }

  return (
    <AppBar 
        position='fixed'
        sx={ {
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth}px`}
        } }
        >
            <Toolbar>
                <IconButton
                    color='inherit'
                    edge="start"
                    sx={ { mr: 2, display: {sm: 'none'} }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                    <Typography variant='h6'noWrap component='div'>Newsletter</Typography>

                    <IconButton 
                        onClick={ logout }
                        color='error'  
                        component={ RouterLink }
                        to='/auth/login'
                    >
                        <LogoutOutlined />
                    </IconButton>
                </Grid>


            </Toolbar>

    </AppBar>
  )
}
