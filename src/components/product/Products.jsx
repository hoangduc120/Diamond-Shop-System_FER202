import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../assets/products/img1.jpg'; // Import hình ảnh

const products = [
    {
      id: 1,
      name: 'Round Diamond Ring',
      image: img1,
      price: '15.515.000đ',
      rating: 5,
      reviews: '2000+ đã bán',
    },
    {
      id: 2,
      name: 'Princess Cut Diamond Ring',
      image: img1,
      price: '9.047.000đ',
      rating: 5,
      reviews: '21 đã bán',
    },
    {
      id: 3,
      name: 'Emerald Cut Diamond Ring',
      image: img1,
      price: '4.279.000đ',
      rating: 5,
      reviews: '15 đã bán',
    },
    {
      id: 4,
      name: 'Oval Diamond Ring',
      image: img1,
      price: '5.047.000đ',
      rating: 5,
      reviews: '3 đã bán',
    },
    // Thêm nhiều sản phẩm khác nếu cần
  ];
  
  const Products = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
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
      // Chuyển hướng tới trang chi tiết sản phẩm, ví dụ:
      // window.location.href = `/product/${productId}`;
      console.log('Product ID:', productId);
    };
  
    return (
      <Container maxWidth="lg" style={{ padding: '40px 0' }}>
        <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '40px' }}>
          Sản phẩm bán chạy
        </Typography>
        <Slider {...settings}>
          {products.map((product) => (
            <Box key={product.id} padding={2}>
              <Card onClick={() => handleProductClick(product.id)} style={{ cursor: 'pointer', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                  style={{ borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography variant="body2" style={{ color: '#FFD700', fontWeight: 'bold' }}>
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.reviews}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          ))}
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
  }
  
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "#000", borderRadius: "50%" }}
        onClick={onClick}
      />
    );
  }
  
  export default Products;