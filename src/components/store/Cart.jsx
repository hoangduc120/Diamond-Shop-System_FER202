import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart, updateQuantity } from './cartSlice';
import { Box, Typography, Button, IconButton, Grid, Paper, Divider } from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const formatCurrency = (value) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
  };

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity > 0 && newQuantity <= item.availableQuantity) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    cartItems.forEach(item => {
      const updatedQuantity = item.availableQuantity - item.quantity;
      axios.put(`/diamonds/${item.id}`, { ...item, quantity: updatedQuantity })
        .then(() => {
          dispatch(clearCart());
          navigate('/thank-you');
        })
        .catch(error => {
          console.error('Error updating quantities:', error);
        });
    });
  };

  if (cartItems.length === 0) {
    return (
      <Box p={3}>
        <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
        <Typography variant="body1">Your cart is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>Shopping Cart</Typography>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Grid container spacing={2}>
          <Grid item xs={1}>No.</Grid>
          <Grid item xs={4}>Product</Grid>
          <Grid item xs={2}>Quantity</Grid>
          <Grid item xs={2}>Unit Price</Grid>
          <Grid item xs={2}>Total Price</Grid>
          <Grid item xs={1}></Grid>
        </Grid>
        <Divider style={{ margin: '10px 0' }} />
        {cartItems.map((item, index) => (
          <Grid container spacing={2} key={item.id} alignItems="center">
            <Grid item xs={1}>{index + 1}</Grid>
            <Grid item xs={4}>
              <Box display="flex" alignItems="center">
                <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />
                <Typography>{item.name}</Typography>
              </Box>
            </Grid>
            <Grid item xs={2}>
              <Box display="flex" alignItems="center">
                <Button 
                  onClick={() => handleQuantityChange(item, item.quantity - 1)} 
                  disabled={item.quantity <= 1}
                >-</Button>
                <Typography>{item.quantity}</Typography>
                <Button 
                  onClick={() => handleQuantityChange(item, item.quantity + 1)} 
                  disabled={item.quantity >= item.availableQuantity}
                >+</Button>
              </Box>
            </Grid>
            <Grid item xs={2}>{formatCurrency(item.price)}</Grid>
            <Grid item xs={2}>{formatCurrency(item.price * item.quantity)}</Grid>
            <Grid item xs={1}>
              <IconButton onClick={() => handleRemove(item.id)} color="secondary">
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        ))}
        <Divider style={{ margin: '10px 0' }} />
        <Box mt={3} textAlign="right">
          <Typography variant="h6" style={{ marginRight: '20px' }}>
            Total (estimated): {formatCurrency(calculateTotal())}
          </Typography>
          <Button variant="contained" color="primary" onClick={handleCheckout} style={{ marginRight: '10px' }}>
            Checkout
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default Cart;
