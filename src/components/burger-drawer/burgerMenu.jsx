import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import burgerMenu from "../../assets/burger-menu.png";
import ButtonMe from '../reusable-btn/button';

import "./burgerMenu.scss"

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
          <ListItem disablePadding>
            {/* <ListItemButton> */}
                <div className="burger-list">
                  <a href="#main">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' paddin g="20px" primary="Asosiy" />
                      </ListItemButton>
                  </a>
                  <a href="#aboutUs">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary="Biz Xaqimizda" />
                      </ListItemButton>
                  </a>
                  <a href="#service">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary="Xizmatlar" />
                      </ListItemButton>
                  </a>
                 <a href="#faq">
                      <ListItemButton>
                            <ListItemText className='burger-list_item' padding="20px" primary="Faq" />
                      </ListItemButton>
                 </a>
                  
                  
                </div>
            {/* </ListItemButton> */}
          </ListItem>
      </List>
      <Divider />
      <List>
        <div className="drawer_btn">
          <a href="#connect"><ButtonMe/></a>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}><img width={60} src={burgerMenu} alt="" /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}