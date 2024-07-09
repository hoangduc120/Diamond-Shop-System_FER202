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
  Avatar,
  Divider,
  ListItemIcon,
  Badge,
  TextField,
  InputAdornment
} from "@mui/material";
import {
  ShoppingCart,
  Search,
  Logout,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import DiamondOutlinedIcon from "@mui/icons-material/DiamondOutlined";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../components/config/firebase";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [submenuEl, setSubmenuEl] = useState(null);
  const [accountEl, setAccountEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const cartItemCount = useSelector((state) => state.cart.items.length);

  const handleClose = () => {
    setAnchorEl(null);
    setSubmenuEl(null);
  };

  const handleLogout = () => {
    logout();
    navigate("/login"); // Điều hướng về trang đăng nhập sau khi đăng xuất
  };

  const handleSubmenuOpen = (event) => {
    setSubmenuEl(event.currentTarget);
  };

  const handleSubmenuClose = () => {
    setSubmenuEl(null);
  };

  const handleAccountMenuOpen = (event) => {
    setAccountEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountEl(null);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery.trim()}`);
    }
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
              onMouseOver={(event) => setAnchorEl(event.currentTarget)}
              endIcon={<KeyboardArrowDownIcon />}
              sx={{
                margin: "0 8px",
                textTransform: "none",
                "&:hover": { color: "#B19567", backgroundColor: "transparent" },
              }}
            >
              Blog
            </Button>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              MenuListProps={{
                onMouseLeave: handleClose,
                onMouseEnter: () => setAnchorEl(anchorEl),
              }}
              sx={{
                "& .MuiMenuItem-root": {
                  display: "flex",
                  alignItems: "center",
                },
              }}
            >
              <MenuItem
                onMouseOver={handleSubmenuOpen}
                onMouseLeave={handleClose}
                sx={{ display: "flex", alignItems: "center" }}
              >
                Knowledge
                <KeyboardArrowRightIcon sx={{ marginLeft: "auto" }} />
                <Menu
                  anchorEl={submenuEl}
                  open={Boolean(submenuEl)}
                  onClose={handleSubmenuClose}
                  MenuListProps={{
                    onMouseLeave: handleSubmenuClose,
                    onMouseEnter: () => setSubmenuEl(submenuEl),
                  }}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "left" }}
                >
                  <MenuItem onClick={handleClose}>Diamond</MenuItem>
                  <MenuItem onClick={handleClose}>Jewelry</MenuItem>
                </Menu>
              </MenuItem>
              <MenuItem
                onMouseOver={handleSubmenuClose}
                onClick={handleClose}
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
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
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSearchSubmit();
                }
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleSearchSubmit}>
                      <Search />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{ marginRight: "10px" }}
            />
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
              <Badge badgeContent={cartItemCount} color="primary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            <IconButton
              color="inherit"
              onClick={handleAccountMenuOpen}
              disableRipple
              sx={{
                "&:hover": {
                  color: "#B19567",
                },
              }}
            >
              <Avatar />
            </IconButton>
            <Menu
              anchorEl={accountEl}
              id="account-menu"
              open={Boolean(accountEl)}
              onClose={handleAccountMenuClose}
              onClick={handleAccountMenuClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={() => navigate("/profile")}>
                <Avatar />
                Proile
              </MenuItem>
              <MenuItem onClick={() => navigate("/account")}>
                <Avatar />
                My account
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => navigate("/dashboard")}>
                <Avatar />
                Dashboard
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                  Đăng xuất
                </ListItemIcon>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
