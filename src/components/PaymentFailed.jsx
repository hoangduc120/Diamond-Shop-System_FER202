import React from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  Typography,
  createTheme,
} from '@mui/material';

// Định nghĩa theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#d32f2f', // màu chính (màu đỏ)
    },
    secondary: {
      main: '#888888', // màu phụ (màu xám)
    },
    text: {
      primary: '#000000', // màu chữ chính (đen)
      secondary: '#888888', // màu chữ phụ (xám)
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
            border: '1px solid #ddd',
            borderRadius: '10px',
            margin: 'auto',
            textAlign: 'center',
            maxWidth: "400px",
          }}
        >
          <ErrorIcon sx={{ fontSize: 50, color: 'primary.main' }} />
          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            Payment Failed!
          </Typography>
          <Typography variant="body1" color="text.secondary" gutterBottom>
            Your payment could not be processed at this time
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            mb={2}
            sx={{ borderTop: '1px solid #eee', pt: 2, width: '100%' }}
          >
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.secondary">Transaction ID</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography variant="body1" fontWeight="bold">
                  123456789
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.secondary">Date</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography variant="body1" fontWeight="bold">
                  2024-06-23
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1" color="text.secondary">Amount</Typography>
              </Grid>
              <Grid item xs={6} sx={{ textAlign: 'right' }}>
                <Typography variant="body1" fontWeight="bold">
                  $100.00
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
