import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Container, Box } from '@mui/material';
import { ShoppingCart, Person, Search } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#ffffff', color: '#000000', boxShadow: 'none', borderBottom: '1px solid #e0e0e0' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography component={Link} to="/" variant="h4" fontWeight="bold" style={{ color: '#004080', textDecoration: 'none' }}>
            Diamond Jewelry
          </Typography>
          <Box style={{ display: 'flex', alignItems: 'center', flexGrow: 1, justifyContent: 'space-around' }}>
            <Button component={Link} to="/diamonds" color="inherit">Diamonds</Button>
            <Button component={Link} to="/engagementRings" color="inherit">Engagement Rings</Button>
            <Button component={Link} to="/weddingRings" color="inherit">Wedding Rings</Button>
            <Button component={Link} to="/jewelry" color="inherit">Jewelry</Button>
            <Button component={Link} to="/gemstones" color="inherit">Gemstones</Button>
            <Button component={Link} to="/education" color="inherit">Education</Button>
          </Box>
          <IconButton color="inherit" component={Link} to="/dashboard">
            <Person />
          </IconButton>
          <IconButton color="inherit">
            <Search />
          </IconButton>
          <IconButton color="inherit" component={Link} to="/cart">
            <ShoppingCart />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
