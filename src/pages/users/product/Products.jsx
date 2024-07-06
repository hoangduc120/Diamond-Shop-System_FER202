import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('/api/diamonds')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    marginLeft: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container maxWidth="lg" style={{ padding: '40px 0' }}>
      <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '40px' }}>
      Best Selling Products.
      </Typography>
      <Slider {...settings}>
        {products.length > 0 ? (
          products.map((product) => (
            <Box key={product.diamond_id} padding={2}>
              <Card onClick={() => handleProductClick(product.diamond_id)} style={{ cursor: 'pointer', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', marginLeft: '2em' }}>
                <CardMedia
                  component="img"
                  height="auto"
                  image={product.image} 
                  alt={product.name}
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <CardContent>
                  <Typography variant="h7" gutterBottom fontWeight="bold">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#FFD700', fontWeight: 'bold' }}>
                    {product.price}đ
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Carat: {product.carat}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" style={{ textAlign: 'center', marginTop: '20px' }}>
            No products found
          </Typography>
        )}
      </Slider>
    </Container>
  );
};

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
};

export default Products;
