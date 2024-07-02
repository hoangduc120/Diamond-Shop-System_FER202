import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box, Typography, Container } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "20px",
          maxWidth: "800px",
          textAlign: "center",
        },
      },
    },
    MuiBox: {
      styleOverrides: {
        root: {
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },
      },
    },
  },
});

export default function AboutUs() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: `url('https://instoremag.com/wp-content/uploads/2022/08/Zadok.jpg')`,
          backgroundSize: "cover", // Đảm bảo hình ảnh bao phủ toàn bộ phần tử
          backgroundPosition: "10% 60%", // Đặt hình ảnh ở giữa
          backgroundRepeat: "no-repeat", // Không lặp lại hình ảnh
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      ></Box>

      <Box display="flex" alignItems="center" justifyContent="center">
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography
            variant="h4"
            display="flex"
            justifyContent="center"
            gutterBottom
          >
            Welcome to Diamond Shop
          </Typography>
          <Typography variant="body1" gutterBottom>
            At Diamond Shop, we believe that every gem tells a story, and every
            piece of jewelry is a reflection of timeless elegance and beauty.
            Established with a passion for excellence, we have been dedicated to
            providing our customers with the highest quality diamonds and
            jewelry for over a decade.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            display="flex"
            justifyContent="center"
          >
            Our Story
          </Typography>
          <Typography variant="body1" gutterBottom>
            Founded in 2010, Diamond Shop began as a small boutique with a big
            dream: to bring exquisite and ethically sourced diamonds to
            discerning customers. Over the years, our commitment to quality,
            integrity, and customer satisfaction has allowed us to grow into one
            of the leading jewelry retailers in the region.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            display="flex"
            justifyContent="center"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" gutterBottom>
            Our mission is simple yet profound: to celebrate life’s precious
            moments with diamonds that are as unique and beautiful as the
            memories they represent. Whether it’s an engagement, anniversary, or
            just a gesture of love, we aim to make every occasion unforgettable.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            display="flex"
            justifyContent="center"
          >
            Our Values
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Quality:</strong> We offer only the finest diamonds,
            meticulously selected and crafted to perfection. Each piece is a
            testament to our commitment to excellence.
            <br />
            <strong>Integrity:</strong> We are committed to ethical sourcing and
            transparency. Our diamonds are conflict-free, ensuring that you can
            wear our jewelry with pride and peace of mind.
            <br />
            <strong>Customer Satisfaction:</strong> Our customers are at the
            heart of everything we do. From personalized consultations to
            exceptional after-sales service, we strive to exceed your
            expectations at every step.
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            display="flex"
            justifyContent="center"
          >
            Visit Us
          </Typography>
          <Typography variant="body1" gutterBottom>
            We invite you to visit our store and experience the magic of
            diamonds firsthand. Our team of experts is here to help you find the
            perfect piece that speaks to you. Thank you for choosing Diamond
            Shop, where your dreams are set in stone.
          </Typography>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
