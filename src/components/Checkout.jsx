import React from 'react';
import {
  Box, Container, Grid, TextField, Typography, Button, FormControlLabel, Checkbox, Select, MenuItem, InputLabel, FormControl, Card, CardContent, CardActions, CardMedia, Avatar
} from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  postalCode: Yup.string().required('Postal Code is required'),
  municipality: Yup.string().required('Municipality is required'),
  addressLine1: Yup.string().required('Address Line 1 is required'),
  province: Yup.string().required('Province/Territory is required'),
  country: Yup.string().required('Country/Region is required'),
  phone: Yup.string().required('Shipping Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  paymentMethod: Yup.string().required('Payment Method is required'),
  consent: Yup.boolean().oneOf([true], 'Consent is required'),
  cardNumber: Yup.string().when('paymentMethod', {
    is: 'card',
    then: Yup.string().required('Card Number is required'),
  }),
  expiryDate: Yup.string().when('paymentMethod', {
    is: 'card',
    then: Yup.string().required('Expiry Date is required'),
  }),
  cvv: Yup.string().when('paymentMethod', {
    is: 'card',
    then: Yup.string().required('CVV/CVC is required'),
  }),
});

const Checkout = () => {
  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://cdn.caratlane.com/media/catalog/product/J/R/JR07854-1YP600_1_lar.jpg" // replace with the correct path to your image
                  alt="Rivka Gold Ring"
                />
                <Typography variant="h6">Rivka Gold Ring</Typography>
                <Typography variant="body2">Product Code: 0014XYZ</Typography>
                <Typography variant="body2">Country of Origin: India</Typography>
                <Typography variant="body2">Dimension: Height: 6.5mm</Typography>
                <Box mt={2}>
                  <Typography variant="body2">Subtotal: $789.99</Typography>
                  <Typography variant="body2">Shipping & Handling: FREE</Typography>
                  <Typography variant="body2">Taxes: $30</Typography>
                  <Typography variant="body2">Total: $819.99</Typography>
                </Box>
                <Box mt={2}>
                  <Typography variant="body2">
                    SHIPPING & DELIVERY: Orders are delivered on business days (Monday-Friday) excluding public holidays.
                  </Typography>
                  <Button size="small">See details</Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                postalCode: '',
                municipality: '',
                addressLine1: '',
                addressLine2: '',
                province: '',
                country: '',
                phone: '',
                email: '',
                paymentMethod: '',
                cardNumber: '',
                expiryDate: '',
                cvv: '',
                saveCard: false,
                consent: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log('Form data', values);
              }}
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
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Postal Code"
                        fullWidth
                        name="postalCode"
                        value={values.postalCode}
                        onChange={handleChange}
                        error={touched.postalCode && Boolean(errors.postalCode)}
                        helperText={touched.postalCode && errors.postalCode}
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        label="Municipality"
                        fullWidth
                        name="municipality"
                        value={values.municipality}
                        onChange={handleChange}
                        error={touched.municipality && Boolean(errors.municipality)}
                        helperText={touched.municipality && errors.municipality}
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
                    <Grid item xs={12}>
                      <TextField
                        label="Address Line 2"
                        fullWidth
                        name="addressLine2"
                        value={values.addressLine2}
                        onChange={handleChange}
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
                        <InputLabel>Payment Methods</InputLabel>
                        <Select
                          name="paymentMethod"
                          value={values.paymentMethod}
                          onChange={handleChange}
                        >
                          <MenuItem value="cod">
                            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqjl2TLDhXPpVwVuD8BBo-zDJffpVSTw5EQ&s" style={{ marginRight: 8 }} />
                            Cash On Delivery
                          </MenuItem>
                          <MenuItem value="paypal">
                            <Avatar src="data:image/png;base64,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" style={{ marginRight: 8 }} />
                            PayPal
                          </MenuItem>
                          <MenuItem value="card">
                            <Avatar src="https://www.usatoday.com/money/blueprint/images/uploads/2023/04/01055507/credit-card-vs-debit-card-e1690883737753.jpg" style={{ marginRight: 8 }} />
                            Debit/Credit Card
                          </MenuItem>
                        </Select>
                        {touched.paymentMethod && errors.paymentMethod && (
                          <Typography color="error" variant="caption">
                            {errors.paymentMethod}
                          </Typography>
                        )}
                      </FormControl>
                    </Grid>
                    {values.paymentMethod === 'card' && (
                      <>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            label="Card Number"
                            fullWidth
                            name="cardNumber"
                            value={values.cardNumber}
                            onChange={handleChange}
                            error={touched.cardNumber && Boolean(errors.cardNumber)}
                            helperText={touched.cardNumber && errors.cardNumber}
                          />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                          <TextField
                            label="Expiry Date"
                            placeholder="MM/YY"
                            fullWidth
                            name="expiryDate"
                            value={values.expiryDate}
                            onChange={handleChange}
                            error={touched.expiryDate && Boolean(errors.expiryDate)}
                            helperText={touched.expiryDate && errors.expiryDate}
                          />
                        </Grid>
                        <Grid item xs={6} sm={2}>
                          <TextField
                            label="CVV/CVC"
                            fullWidth
                            name="cvv"
                            value={values.cvv}
                            onChange={handleChange}
                            error={touched.cvv && Boolean(errors.cvv)}
                            helperText={touched.cvv && errors.cvv}
                          />
                        </Grid>
                      </>
                    )}
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={
                          <Checkbox
                            name="saveCard"
                            checked={values.saveCard}
                            onChange={handleChange}
                          />
                        }
                        label="Save Card Details for future payments."
                      />
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
                        Complete Order
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Checkout;
