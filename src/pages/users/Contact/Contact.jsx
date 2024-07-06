import React from "react";
import {
  Box,
  Container,
  Grid,
  Link,
  ThemeProvider,
  Typography,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import GoogleMapsComponent from "./Map"; // Import the GoogleMapsComponent
import ContactForm from "./ContactForm";
import { theme } from "./ContactTheme";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";

export default function Contact() {
  return (
    <Box sx={{mb: 5}}>
      <Box
        sx={{
          backgroundImage: `url('https://www.webfx.com/wp-content/uploads/2023/08/032431_40_Best_Contact_Us_Page_Designs.png')`,
          backgroundSize: "cover",
          backgroundPosition: "0 30%",
          backgroundRepeat: "no-repeat",
          height: "40vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Typography
          textAlign="center"
          variant="h2"
          gutterBottom
          sx={{ mt: 2, fontFamily: "Times New Roman", color: "white" }}
        >
          Contact Us
        </Typography>
      </Box>
      <Container sx={{ mt: 5 }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <GoogleMapsComponent /> 
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      Our Showroom
                    </Typography>
                    <Box display="flex">
                      <PlaceIcon sx={{ mr: 1 }} />
                      <Typography variant="body1" gutterBottom>
                        Vinhomes Grand Park
                      </Typography>
                    </Box>
                    <Box display="flex">
                      <PhoneIcon sx={{ mr: 1 }} />
                      <Typography variant="body1">+84 794442282</Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      Quick Help
                    </Typography>
                    <Typography variant="body1">
                      You can ask anything you want to know about our products
                    </Typography>
                    <Typography variant="body1">
                      <Link
                        href="mailto:help@diamondjewelry.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        help@diamondjewelry.com
                      </Link>
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      <Link
                        href="mailto:refund@diamondjewelry.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        refund@diamondjewelry.com
                      </Link>
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h5" fontWeight="bold" gutterBottom>
                  Send a Message
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </Box>
  );
}
