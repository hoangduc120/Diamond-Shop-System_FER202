import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

// Định nghĩa theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#d32f2f", // màu chính (màu đỏ)
    },
    secondary: {
      main: "#888888", // màu phụ (màu xám)
    },
    text: {
      primary: "#000000", // màu chữ chính (đen)
      secondary: "#888888", // màu chữ phụ (xám)
    },
  },
});

export default function PaymentFailed() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p={4}
          sx={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            margin: "auto",
            textAlign: "center",
            maxWidth: "400px",
          }}
        >
          <CancelIcon sx={{ fontSize: 50, color: "primary.main" }} />
          <Typography
            variant="h5"
            fontWeight="bold"
            color="primary"
            gutterBottom
          >
            Payment Failed!
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Your payment could not be processed
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
            sx={{ borderTop: "1px solid #eee", pt: 2, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Ref Number
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1" fontWeight="bold">
                  28082004
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Payment Time
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1" fontWeight="bold">
                  28-08-2004, 3:00:00
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Payment Method
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Bank Transfer
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Name
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  Nguyen Thanh Mai
                </Typography>
              </Grid>
            </Grid>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
            sx={{ borderTop: "1px dashed #ddd", pt: 2, width: "100%" }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ textAlign: "left" }}
                >
                  Amount
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: "right" }}>
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  100,000 VND
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
