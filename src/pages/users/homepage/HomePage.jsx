import { Box, Typography, Button, Container } from "@mui/material";
import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import Products from "../product/Products";
import HandcraftedSection from "../../../components/layout/HandcraftedSection";

const HomePage = () => {
  return (
    <Box>
      <Box
        style={{
          position: "relative",
          textAlign: "left",
          color: "black",
          width: "100%",
        }}
      >
        <img src={img1} alt="Hero" style={{ width: "100%", height: "auto" }} />
        <Container
          maxWidth="lg"
          style={{
            position: "absolute",
            top: "30%",
            left: "10%",
            color: "black",
            textAlign: "left",
          }}
        >
          <Typography variant="h6" gutterBottom style={{ color: "#6d6d6d" }}>
            UP TO 30% OFF
          </Typography>
          <Typography
            variant="h3"
            gutterBottom
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            To Love and Cherish
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{ marginBottom: "20px", fontFamily: "serif" }}
          >
            Weddings are brilliant moments in time. Make it unforgettable
            <br />
            with pieces that 'll always be adored (and save up to 30%).
          </Typography>
          <Box>
            <Button
              variant="contained"
              style={{
                marginRight: 10,
                backgroundColor: "#2c3e50",
                color: "white",
                fontFamily: "serif",
              }}
            >
              SHOP SALE JEWELRY
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2c3e50",
                color: "white",
                fontFamily: "serif",
              }}
            >
              SHOP ENGAGEMENT
            </Button>
          </Box>
        </Container>
      </Box>

      <Products />

      <Box
        style={{
          position: "relative",
          textAlign: "left",
          color: "black",
          width: "100%",
        }}
      >
        <img
          src={img2}
          alt="Design Your Own Engagement Ring"
          style={{ width: "100%", height: "auto" }}
        />
        <Container
          maxWidth="lg"
          style={{
            position: "absolute",
            top: "50%",
            left: "10%",
            color: "white",
            textAlign: "left",
            transform: "translateY(-50%)",
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            style={{ fontWeight: "bold", fontFamily: "serif" }}
          >
            Design Your Own Engagement Ring
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            style={{
              marginBottom: "20px",
              maxWidth: "500px",
              fontFamily: "serif",
            }}
          >
            Bring your love to life with a handcrafted design that perfectly
            suits your relationship, budget and style. Our expert artists will
            pour their passion into every detail of your beautiful custom
            engagement ring.
          </Typography>
          <Box>
            <Button
              variant="contained"
              style={{
                marginRight: 10,
                backgroundColor: "#2c3e50",
                color: "white",
                fontFamily: "serif",
              }}
            >
              SHOP SETTINGS
            </Button>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#2c3e50",
                color: "white",
                fontFamily: "serif",
              }}
            >
              SHOP DIAMONDS
            </Button>
          </Box>
        </Container>
      </Box>

      <HandcraftedSection />
    </Box>
  );
};

export default HomePage;
