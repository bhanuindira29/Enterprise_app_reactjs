import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { siderBarPrimaryItems, siderBarSecondaryItems } from '../../Constants/Siderbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Container, useTheme } from '@mui/material';

const drawerWidth = 240;

export default function Layout() {

  // const theme = useTheme();
  // console.log('theme : ',theme)

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    console.log('path : ',path)
    navigate(path)
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ backgroundColor: 'primary.dark',zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Enterprise Application
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { 
            width: drawerWidth, 
            boxSizing: 'border-box',
            backgroundColor: 'primary.main',
            // color: 'primary.contrastText' 
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {siderBarPrimaryItems.map((text, index) => (
              <ListItem key={text.id} disablePadding>
                <ListItemButton onClick={()=>handleNavigate(text.route)}>
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          {/* <List>
            {siderBarSecondaryItems.map((text, index) => (
              <ListItem key={text.id} disablePadding>
                <ListItemButton onClick={()=>handleNavigate(text.route)}>
                  <ListItemIcon>
                    {text.icon}
                  </ListItemIcon>
                  <ListItemText primary={text.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List> */}
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt:12, border: '1px solid black' }}>
        <Container>
        <Outlet/>
        </Container>
      </Box>
    </Box>
  );
}