import React, { useEffect, useState } from 'react';
import {
  Box, Container, Grid, TextField, Typography, Button, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Card, CardContent, CardMedia, Avatar, Snackbar
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { db } from '../../config/firebase'; 
import { doc, getDoc } from 'firebase/firestore'; 

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  province: Yup.string().required('Province/Territory is required'),
  country: Yup.string().required('Country/Region is required'),
  phone: Yup.string().required('Shipping Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  paymentMethod: Yup.string().required('Payment Method is required'),
  consent: Yup.boolean().oneOf([true], 'Consent is required'),
});

const Checkout = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [userData, setUserData] = useState({});
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    const storedOrderDetails = JSON.parse(localStorage.getItem('orderDetails'));
    if (storedOrderDetails) {
      setOrderDetails(storedOrderDetails);
    }

    const userId = localStorage.getItem('user_id');
    if (userId) {
      fetchUserData(userId);
    }
  }, []);

  const fetchUserData = async (userId) => {
    const userDoc = await getDoc(doc(db, "users", userId));
    if (userDoc.exists()) {
      setUserData(userDoc.data());
    }
  };

  const handleSubmit = (values) => {
    const userId = localStorage.getItem('user_id'); // Lấy user_id từ localStorage
    const paymentData = {
      user_id: userId,
      diamonds: orderDetails.cartItems.map(item => ({
        diamond_id: item.id,
        quantity: item.quantity
      })),
      totalAmount: orderDetails.totalAmount,
      fullname: values.firstName + ' ' + values.lastName,
      address: values.addressLine1,
      city: values.province, // Assuming city is stored in province field
      phone: values.phone,
      email: values.email,
      paymentMethod: values.paymentMethod,
    };

    axios.post('/api/payments', paymentData)
      .then(response => {
        // Cập nhật diamond_status nếu quantity bằng 0
        const updatePromises = orderDetails.cartItems.map(item => {
          if (item.quantity === 0) {
            return axios.put(`/diamonds/${item.id}`, { ...item, diamond_status: 'inactive' });
          }
          return Promise.resolve();
        });

        Promise.all(updatePromises)
          .then(() => {
            window.location.href = response.data.payUrl; // Chuyển hướng tới cổng thanh toán MoMo
          })
          .catch(error => {
            console.error('Error updating product status:', error);
            setSnackbarMessage(`Error processing payment: ${error.response ? error.response.data.message : error.message}`);
            setSnackbarOpen(true);
          });
      })
      .catch(error => {
        setSnackbarMessage(`Error processing payment: ${error.response ? error.response.data.message : error.message}`);
        setSnackbarOpen(true);
      });
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {orderDetails && orderDetails.cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: '20px' }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                  />
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">Carat: {item.carat}</Typography>
                  <Typography variant="body2">Color: {item.color}</Typography>
                  <Box mt={2}>
                    <Typography variant="body2">Unit Price: {item.price}đ</Typography>
                    <Typography variant="body2">Quantity: {item.quantity}</Typography>
                    <Typography variant="body2">Subtotal: {item.price * item.quantity}đ</Typography>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Grid>
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{
                firstName: userData.fullname ? userData.fullname.split(' ')[0] : '',
                lastName: userData.fullname ? userData.fullname.split(' ')[1] : '',
                addressLine1: userData.address_shipping || '',
                province: '',
                country: '',
                phone: userData.phone || '',
                email: userData.email || '',
                paymentMethod: 'momo',
                consent: false,
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              enableReinitialize // Thêm dòng này để formik khởi tạo lại giá trị khi userData thay đổi
            >
              {({ errors, touched, values, handleChange }) => (
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="First Name"
                        fullWidth
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        error={touched.firstName && Boolean(errors.firstName)}
                        helperText={touched.firstName && errors.firstName}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Last Name"
                        fullWidth
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        error={touched.lastName && Boolean(errors.lastName)}
                        helperText={touched.lastName && errors.lastName}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        label="Address Line 1"
                        fullWidth
                        name="addressLine1"
                        value={values.addressLine1}
                        onChange={handleChange}
                        error={touched.addressLine1 && Boolean(errors.addressLine1)}
                        helperText={touched.addressLine1 && errors.addressLine1}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Province/Territory"
                        fullWidth
                        name="province"
                        value={values.province}
                        onChange={handleChange}
                        error={touched.province && Boolean(errors.province)}
                        helperText={touched.province && errors.province}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Country/Region"
                        fullWidth
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Shipping Phone"
                        fullWidth
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        error={touched.phone && Boolean(errors.phone)}
                        helperText={touched.phone && errors.phone}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Email"
                        fullWidth
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControl fullWidth required error={touched.paymentMethod && Boolean(errors.paymentMethod)}>
                        <InputLabel>Payment Method</InputLabel>
                        <Select
                          name="paymentMethod"
                          value={values.paymentMethod}
                          onChange={handleChange}
                        >
                          <MenuItem value="momo">
                            <Avatar src="https://static.ybox.vn/2023/5/2/1683614751843-pham108n6v2au-avatar.png" style={{ marginRight: 8 }} />
                            MoMo
                          </MenuItem>
                        </Select>
                        {touched.paymentMethod && errors.paymentMethod && (
                          <Typography color="error" variant="caption">
                            {errors.paymentMethod}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            required
                            name="consent"
                            checked={values.consent}
                            onChange={handleChange}
                          />
                        }
                        label={
                          <Typography variant="body2">
                            I have read and consent to jewellery.com processing my information in accordance with the
                            <a href="#">Privacy statement</a>.
                          </Typography>
                        }
                      />
                      {touched.consent && errors.consent && (
                        <Typography color="error" variant="caption">
                          {errors.consent}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={12}>
                      <Button type="submit" variant="contained" color="primary" fullWidth>
                        Complete with MoMo
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Container>
  );
};

export default Checkout;