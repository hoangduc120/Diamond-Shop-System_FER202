import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008000", // màu chính (màu xanh)
    },
    secondary: {
      main: "#888888", // màu phụ (màu xám)
    },
    text: {
      primary: "black", // Đổi màu mặc định cho Typography
      secondary: "grey",
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: "#008000", // Màu sắc cho icon
        },
      },
    },
  },
});

export default function PaymentSuccess() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        sx={{
          border: "1px solid #ddd",
          borderRadius: "10px",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 50 }} />
        <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
          Payment Success!
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          Your payment has been successfully done
        </Typography>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          mb={2}
          sx={{ borderTop: "1px solid #eee", pt: 2, width: "100%" }}
        >
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Total Payment
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: "bold" }} gutterBottom>
            100,000 VND
          </Typography>
        </Box>
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
              <Typography variant="body1" color="text.secondary">
                Ref Number
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                28082004
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="text.secondary">
                Payment Time
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                28-08-2004, 3:00:00
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="text.secondary">
                Payment Method
              </Typography>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: "right" }}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Bank Transfer
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" color="text.secondary">
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
              <Typography variant="body1" color="text.secondary">
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
    </ThemeProvider>
  );
}
