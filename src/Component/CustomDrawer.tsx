// TemporaryDrawer.tsx

import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function TemporaryDrawer() {
  const [showDropdown1, setShowDropdown1] = useState(false);
  const [showDropdown2, setShowDropdown2] = useState(false);
  const [showDropdown3, setShowDropdown3] = useState(false);
  const [showDropdown4, setShowDropdown4] = useState(false);


  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={"home"}  >
          <Link to="/">
            <button
              style={{
                fontSize: '1.5rem', // Adjust size as needed
                backgroundColor: 'transparent', // Set background color to transparent
                borderColor: 'transparent',
                color: showDropdown1 ? "#b2b2f8" : "black",
                fontWeight: '400',
                marginRight: "30px"
              }}
              onMouseEnter={() => setShowDropdown1(true)} // Show dropdown on mouse enter
              onMouseLeave={() => setShowDropdown1(false)}
              color="inherit"
            >
              Home
            </button>
          </Link>
        </ListItem>
        <ListItem key={"about"}  >
          <Link to="/about">
            <button
              style={{
                fontSize: '1.5rem', // Adjust size as needed
                backgroundColor: 'transparent', // Set background color to transparent
                borderColor: 'transparent',
                color: showDropdown2 ? "#b2b2f8" : "black",
                fontWeight: '400',
                marginRight: "30px"
              }}
              onMouseEnter={() => setShowDropdown2(true)} // Show dropdown on mouse enter
              onMouseLeave={() => setShowDropdown2(false)}
              color="inherit"
            >
              About Us
            </button></Link>
        </ListItem>
        <ListItem key={"services"} >
          <Link to="/services">
            <button
              style={{
                fontSize: '1.5rem', // Adjust size as needed
                backgroundColor: 'transparent', // Set background color to transparent
                borderColor: 'transparent',
                color: showDropdown3 ? "#b2b2f8" : "black",
                fontWeight: '400',
                marginRight: "30px"
              }}
              onMouseEnter={() => setShowDropdown3(true)} // Show dropdown on mouse enter
              onMouseLeave={() => setShowDropdown3(false)}
              color="inherit"
            >
              Services
            </button></Link>
        </ListItem>
        <ListItem key={"client"}  >
          <Link to="/ourclient">
            <button
              style={{
                fontSize: '1.5rem', // Adjust size as needed
                backgroundColor: 'transparent', // Set background color to transparent
                borderColor: 'transparent',
                color: showDropdown2 ? "#b2b2f8" : "black",
                fontWeight: '400',
                marginRight: "30px"
              }}
              onMouseEnter={() => setShowDropdown2(true)} // Show dropdown on mouse enter
              onMouseLeave={() => setShowDropdown2(false)}
              color="inherit"
            >
              Our Clients
            </button></Link>
        </ListItem>
        <ListItem key={"contactus"} >
          <Link to="/contact">
            <button
              style={{
                fontSize: '1.5rem', // Adjust size as needed
                backgroundColor: 'transparent', // Set background color to transparent
                borderColor: 'transparent',
                color: showDropdown4 ? "#b2b2f8" : "black",
                fontWeight: '400',
                marginRight: "30px"
              }}
              onMouseEnter={() => setShowDropdown4(true)} // Show dropdown on mouse enter
              onMouseLeave={() => setShowDropdown4(false)}
              color="inherit"
            >
              Contact Us
            </button></Link>
        </ListItem>

        {/* <ListItem key={"Pages"} >
            <ListItemButton href='/page'>
              
            <button
                  style={{
                    fontSize: '1.5rem', // Adjust size as needed
                    backgroundColor: 'transparent', // Set background color to transparent
                    borderColor: 'transparent',
                    color: showDropdown ? "#b2b2f8" : "black",
                    fontWeight: '400',
                    marginRight: "30px"
                  }}
                  onMouseEnter={() => setShowDropdown(true)} // Show dropdown on mouse enter
                  onMouseLeave={() => setShowDropdown(false)}
                  color="inherit"
                >
                  Pages
                </button>
            </ListItemButton>
        </ListItem> */}
      </List>

    </Box>
  );

  return (
    <div>
      <IconButton sx={{ fontSize: "1.5em", color: "white" }} onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}

export default TemporaryDrawer;
