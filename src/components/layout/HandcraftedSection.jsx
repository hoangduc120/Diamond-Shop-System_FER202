import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import img3 from '../../assets/images/img3.jpg'; 

const HandcraftedSection = () => {
  return (
    <Box style={{ display: 'flex', alignItems: 'center', padding: '40px 0' }}>
      <Container maxWidth="lg" style={{ display: 'flex', alignItems: 'center' }}>
        <Box style={{ flex: 1, paddingRight: '20px' }}>
          <Typography variant="h4" gutterBottom style={{ fontWeight: 'bold', color: '#2c3e50', fontFamily: 'serif' }}>
            Handcrafted In New York
          </Typography>
          <Typography variant="body1" gutterBottom style={{ color: '#2c3e50', fontFamily: 'serif' }}>
            Our highly skilled artisans exceed industry standards with sparkling GIA-graded natural diamonds,
            the finest-quality materials and outstanding engagement ring design at an amazing value.
          </Typography>
          <Button variant="contained" style={{ backgroundColor: '#2c3e50', color: 'white', fontFamily: 'serif' }}>
            ABOUT Diamond Jewelry
          </Button>
        </Box>
        <Box style={{ flex: 1 }}>
          <img src={img3} alt="Handcrafted In New York" style={{ width: '710px', height: '568px', borderRadius: '15px' }} />
        </Box>
      </Container>
    </Box>
  );
};

export default HandcraftedSection;
