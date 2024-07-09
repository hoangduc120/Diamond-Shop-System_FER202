import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid
} from '@mui/material';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const query = useQuery();
  const searchTerm = query.get('query');
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm) {
      fetchSearchResults();
    }
  }, [searchTerm]);

  const fetchSearchResults = () => {
    axios.get('/api/diamonds')
      .then(response => {
        const filtered = response.data.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(filtered);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Container maxWidth="lg" style={{ padding: '40px 0' }}>
      <Typography variant="h4" gutterBottom>
        Search Results for "{searchTerm}"
      </Typography>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product.diamond_id} xs={12} sm={6} md={3}>
            <Card
              onClick={() => handleProductClick(product.diamond_id)}
              style={{ cursor: 'pointer' }}
            >
              <CardMedia
                component="img"
                alt={product.name}
                height="200"
                image={product.image}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.price}đ
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Carat: {product.carat}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Color: {product.color.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SearchResults;
