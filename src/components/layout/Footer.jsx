import { Box, Typography, Container, Grid, IconButton } from '@mui/material';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import Banner from "../../assets/images/img4.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  padding: '40px 0',
  color: "white",
};

const FooterLinks = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "About",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
  {
    title: "Blog",
    link: "#",
  },
];

const Footer = () => {
  return (
    <Box style={BannerImg}>
      <Container>
        <Grid container spacing={5}>
          <Grid item xs={12} md={3}>
            <Typography variant="h4" fontWeight="bold" style={{ color: '#004080', marginBottom: '10px' }}>Diamond Jewelry</Typography>
            <Typography variant="body2">
              Kim cương là loại đá quý hiếm với vẻ đẹp rực rỡ và độ bền cao. Chúng thường được sử dụng trong trang sức cao cấp như nhẫn, vòng cổ, và bông tai, tượng trưng cho sự vĩnh cửu và tình yêu chân thành.
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Important Links</Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {FooterLinks.map((link) => (
                <li key={link.title} style={{ marginBottom: '8px' }}>
                  <a href={link.link} style={{ color: '#ccc', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#F0C14B'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="h6" fontWeight="bold" mb={2}>Links</Typography>
            <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
              {FooterLinks.map((link) => (
                <li key={link.title} style={{ marginBottom: '8px' }}>
                  <a href={link.link} style={{ color: '#ccc', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = '#F0C14B'} onMouseLeave={(e) => e.target.style.color = '#ccc'}>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <FaLocationArrow />
              <Typography variant="body2">Tòa S1.01, Vinhomes</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <FaMobileAlt />
              <Typography variant="body2">+84 794442282</Typography>
            </Box>
            <Box display="flex" alignItems="center" gap={1}>
              <a href="https://www.instagram.com/dduong2306/">
                <IconButton aria-label="instagram" style={{ color: 'white' }}>
                  <FaInstagram />
                </IconButton>
              </a>
              <a href="https://www.facebook.com/duong23062002/">
                <IconButton aria-label="facebook" style={{ color: 'white' }}>
                  <FaFacebook />
                </IconButton>
              </a>
              <a href="link-cua-linkedin">
                <IconButton aria-label="linkedin" style={{ color: 'white' }}>
                  <FaLinkedin />
                </IconButton>
              </a>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
