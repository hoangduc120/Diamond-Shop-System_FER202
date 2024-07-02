
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box, Typography, Card, CardContent, Grid } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    h3: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          padding: '20px',
          maxWidth: '800px',
          textAlign: 'center',
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    },
  },
});

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box>
        <Container>
          <Card>
            <Grid container>
              <Grid item xs={12}>
                <Box
                  component="img"
                  src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/lepz/2015_02_11/spider.jpg.webp"
                  alt="About Connected Nation"
                  sx={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <CardContent>
                  <Typography variant="h1" gutterBottom>
                    Diamond Shop
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Connected Nation is a national nonprofit, based in Bowling Green, Kentucky, that's worked in the broadband and related technology space for more than 20 years.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We believe everyone should have the opportunity to use technology to improve their lives, families, and communities — no matter who they are, where they live, or how they begin.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    We work at the community, state, and federal levels and with both public and private partners to work toward the common and important goal of expanding access, adoption, and use of broadband and related technology.
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AboutUs;