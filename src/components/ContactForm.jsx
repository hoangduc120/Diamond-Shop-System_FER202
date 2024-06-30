import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import {
  Alert,
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      phone: "",
      product: 0,
      request: 0,
      location: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      lastName: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),
      phone: Yup.string()
      .required("Required.")
      .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
      product: Yup.number().integer().typeError("Please select a product."),
      request: Yup.number().integer().typeError("Please select a request."),
      location: Yup.number().integer().typeError("Please select a location."),
    }),
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id="outlined-firstName" // Thêm ID cho TextField
            label="First Name"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <Alert severity="error">{formik.errors.firstName}</Alert>
          ) : null}
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            fullWidth
            id="outlined-lastName" // Thêm ID cho TextField
            label="Last Name"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <Alert severity="error">{formik.errors.lastName}</Alert>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-phone" // Thêm ID cho TextField
            label="Phone"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <Alert severity="error">{formik.errors.phone}</Alert>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="product-label">Product</InputLabel>
            <Select
              labelId="product-label"
              id="outlined-product" // Thêm ID cho Select
              label="Product"
              name="product"
              value={formik.values.product}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.product && Boolean(formik.errors.product)}
            >
              <MenuItem value={0}>Please select</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            {formik.touched.product && formik.errors.product ? (
              <Alert severity="error">{formik.errors.product}</Alert>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="request-label">Request</InputLabel>
            <Select
              labelId="request-label"
              id="outlined-request" // Thêm ID cho Select
              label="Request"
              name="request"
              value={formik.values.request}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.request && Boolean(formik.errors.request)}
            >
              <MenuItem value={0}>Please select</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            {formik.touched.request && formik.errors.request ? (
              <Alert severity="error">{formik.errors.request}</Alert>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel id="location-label">Provine/City</InputLabel>
            <Select
              labelId="location-label"
              id="outlined-location" // Thêm ID cho Select
              label="Provine/City"
              name="location"
              value={formik.values.location}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.location && Boolean(formik.errors.location)}
            >
              <MenuItem value={0}>Please select</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
            {formik.touched.location && formik.errors.location ? (
              <Alert severity="error">{formik.errors.location}</Alert>
            ) : null}
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
