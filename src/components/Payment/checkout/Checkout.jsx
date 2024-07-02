import React from "react";
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Avatar,
} from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  postalCode: Yup.string().required("Postal Code is required"),
  municipality: Yup.string().required("Municipality is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  province: Yup.string().required("Province/Territory is required"),
  country: Yup.string().required("Country/Region is required"),
  phone: Yup.string().required("Shipping Phone is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  paymentMethod: Yup.string().required("Payment Method is required"),
  consent: Yup.boolean().oneOf([true], "Consent is required"),
  cardNumber: Yup.string().when("paymentMethod", {
    is: "card",
    then: Yup.string().required("Card Number is required"),
  }),
  expiryDate: Yup.string().when("paymentMethod", {
    is: "card",
    then: Yup.string().required("Expiry Date is required"),
  }),
  cvv: Yup.string().when("paymentMethod", {
    is: "card",
    then: Yup.string().required("CVV/CVC is required"),
  }),
});

const formatCurrency = (value) => {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(value);
};

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || {
    cartItems: [],
    totalAmount: 0,
  };

  return (
    <Container maxWidth="md">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          Order Summary
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            {cartItems.map((item) => (
              <Card key={item.id} style={{ marginBottom: "20px" }}>
                <CardContent>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.image}
                    alt={item.name}
                  />
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2">Carat: {item.carat}</Typography>
                  <Typography variant="body2">
                    Color: {item.color.join(", ")}
                  </Typography>
                  <Typography variant="body2">
                    Price: {formatCurrency(item.price)}
                  </Typography>
                  <Typography variant="body2">
                    Quantity: {item.quantity}
                  </Typography>
                  <Typography variant="body2">
                    Total: {formatCurrency(item.price * item.quantity)}
                  </Typography>
                </CardContent>
              </Card>
            ))}
            <Typography variant="h6">
              Total: {formatCurrency(totalAmount)}
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                postalCode: "",
                municipality: "",
                addressLine1: "",
                addressLine2: "",
                province: "",
                country: "",
                phone: "",
                email: "",
                paymentMethod: "",
                cardNumber: "",
                expiryDate: "",
                cvv: "",
                saveCard: false,
                consent: false,
              }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log("Form data", values);
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
                        error={
                          touched.municipality && Boolean(errors.municipality)
                        }
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
                        error={
                          touched.addressLine1 && Boolean(errors.addressLine1)
                        }
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
                      <FormControl
                        fullWidth
                        required
                        error={
                          touched.paymentMethod && Boolean(errors.paymentMethod)
                        }
                      >
                        <InputLabel>Payment Methods</InputLabel>
                        <Select
                          name="paymentMethod"
                          value={values.paymentMethod}
                          onChange={handleChange}
                        >
                          <MenuItem value="cod">
                            <Avatar
                              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqjl2TLDhXPpVwVuD8BBo-zDJffpVSTw5EQ&s"
                              style={{ marginRight: 8 }}
                            />
                            Cash On Delivery
                          </MenuItem>
                          <MenuItem value="paypal">
                            <Avatar
                              src="https://www.nopcommerce.com/images/thumbs/0014294_paypal-express-payment-plugin.png"
                              style={{ marginRight: 8 }}
                            />
                            PayPal
                          </MenuItem>
                          <MenuItem value="card">
                            <Avatar
                              src="https://www.usatoday.com/money/blueprint/images/uploads/2023/04/01055507/credit-card-vs-debit-card-e1690883737753.jpg"
                              style={{ marginRight: 8 }}
                            />
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
                    {values.paymentMethod === "card" && (
                      <>
                        <Grid item xs={12} sm={8}>
                          <TextField
                            label="Card Number"
                            fullWidth
                            name="cardNumber"
                            value={values.cardNumber}
                            onChange={handleChange}
                            error={
                              touched.cardNumber && Boolean(errors.cardNumber)
                            }
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
                            error={
                              touched.expiryDate && Boolean(errors.expiryDate)
                            }
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
                            I have read and consent to jewellery.com processing
                            my information in accordance with the
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
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                      >
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
