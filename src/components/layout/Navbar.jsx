import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
import { ShoppingCart, Person, Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
        <Typography variant="h4" fontWeight="bold" style={{ color: '#004080' }}>
              Diamond Jewelry
            </Typography>
          <Box style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-around' }}>
            <Button color="inherit">Diamonds</Button>
            <Button color="inherit">Engagement Rings</Button>
            <Button color="inherit">Wedding Rings</Button>
            <Button color="inherit">Jewelry</Button>
            <Button color="inherit">Gemstones</Button>
            <Button color="inherit">Education</Button>
          </Box>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit">
            <Person />
          </IconButton>
          <IconButton color="inherit">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
