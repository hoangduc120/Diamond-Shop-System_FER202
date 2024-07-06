import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { ShoppingCart, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import React, { useState } from "react";

const Navbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuEl, setSubmenuEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSubmenuEl(null);
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuEl(null);
  };

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box style={{ display: "flex", alignItems: "center" }}>
            <Button
              component={Link}
              to="/"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/diamonds"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              Diamonds
            </Button>
            <Button
              color="inherit"
              size="small"
              disableRipple
              onMouseOver={handleMenuOpen}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{ margin: '0 8px', textTransform: 'none', '&:hover': { color: '#B19567', backgroundColor: 'transparent' } }}
            >
              Blog
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              MenuListProps={{
                onMouseLeave: handleMenuClose,
                onMouseEnter: () => setAnchorEl(anchorEl)
              }}
              sx={{ '& .MuiMenuItem-root': { display: 'flex', alignItems: 'center' } }}
            >
              <MenuItem
                onMouseOver={handleSubmenuOpen}
                onMouseLeave={handleMenuClose}
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                Knowledge
                <KeyboardArrowRightIcon sx={{ marginLeft: 'auto' }} />
                <Menu
                  anchorEl={submenuEl}
                  open={Boolean(submenuEl)}
                  onClose={handleSubmenuClose}
                  MenuListProps={{
                    onMouseLeave: handleSubmenuClose,
                    onMouseEnter: () => setSubmenuEl(submenuEl)
                  }}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                >
                  <MenuItem onClick={handleMenuClose}>Diamond</MenuItem>
                  <MenuItem onClick={handleMenuClose}>Jewelry</MenuItem>
                </Menu>
              </MenuItem>
              <MenuItem
                onMouseOver={handleSubmenuClose}
                onClick={handleMenuClose}
                sx={{ '&:hover': { backgroundColor: 'transparent' } }}
              >
                Measure Guide
              </MenuItem>
            </Menu>
            <Button
              component={Link}
              to="/saleoff"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              Sale Off
            </Button>
            <Button
              component={Link}
              to="/faqs"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              Pages
            </Button>
            <Button
              component={Link}
              to="/aboutus"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              About Us
            </Button>
            <Button
              component={Link}
              to="/contact"
              color="inherit"
              size="small"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                  backgroundColor: "transparent",
                },
              }}
            >
              Contact
            </Button>
          </Box>
          <Box
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              alignItems: "center",
            }}
          >
            <IconButton component={Link} to="/" disableRipple>
              <DiamondOutlinedIcon fontSize="large" sx={{ color: "#B19567" }} />
            </IconButton>
            <Typography
              component={Link}
              to="/"
              variant="h4"
              fontWeight="bold"
              style={{ color: "#B19567", textDecoration: "none" }}
            >
              Diamond Jewelry
            </Typography>
          </Box>
          <Box style={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                },
              }}
            >
              <Search />
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              to="/cart"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                },
              }}
            >
              <ShoppingCart />
            </IconButton>
            <IconButton
              color="inherit"
              component={Link}
              to="/dashboard"
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                },
              }}
            >
              <Person />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
