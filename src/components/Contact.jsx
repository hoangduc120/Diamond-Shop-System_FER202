import {
  Box,
  Container,
  Grid,
  Link,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import { theme } from "./ContactTheme";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <Container>
      <Typography textAlign="center" variant="h3" gutterBottom>
        Contact us
      </Typography>
      <br />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              At Diamond Shop, we are committed to providing exceptional customer
              service and ensuring your experience with us is nothing short of
              extraordinary. Whether you have a question about our stunning
              collection, need assistance with a purchase, or want to schedule a
              consultation, our dedicated team is here to help.
            </Typography>
            <br />
            <Box display="flex">
              <PlaceIcon />
              <Typography variant="body1" gutterBottom>
                123 Diamond Street, Jewelry City, JC 45678
              </Typography>
            </Box>
            <Box display="flex">
              <PhoneIcon />
              <Typography gutterBottom> (123) 456-7890</Typography>
            </Box>
            <br />
            <Typography variant="body2" gutterBottom>
              <strong>Email:</strong>{" "}
              <Link href="support@diamondshop.com">
                support@diamondshop.com
              </Link>
              <br />
              <strong>Facebook:</strong>{" "}
              <Link href="@DiamondShop">@DiamondShop</Link>
              <br />
              <strong>Instagram:</strong>{" "}
              <Link href="@DiamondShopOfficial">@DiamondShopOfficial</Link>
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <ContactForm />
          </Grid>
        </Grid>
      </ThemeProvider>
    </Container>
  );
}
