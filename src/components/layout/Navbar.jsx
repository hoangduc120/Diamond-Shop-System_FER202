import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Container,
  Box,

} from "@mui/material";
import { ShoppingCart, Person, Search } from "@mui/icons-material";
import { Link } from "react-router-dom";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useState } from "react";

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
