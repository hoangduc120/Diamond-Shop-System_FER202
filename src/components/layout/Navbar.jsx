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

const Navbar = () => {
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
              component={Link}
              to="/measureguide"
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
              Measure guide
            </Button>
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
              FAQs
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