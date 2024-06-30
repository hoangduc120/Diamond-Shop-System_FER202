// PaymentError.js
import React from 'react';
import { Box, Typography, Button, IconButton, Grid, Paper } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@mui/icons-material/Phone';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const PaymentError = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: '20px',
        maxWidth: '400px',
        margin: '20px auto',
        borderRadius: '10px',
        border: '1px solid #ddd',
      }}
    >
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Ref Number
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              000085752257
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Payment Time
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              25-02-2023, 13:22:16
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Payment Method
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              Bank Transfer
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Sender Name
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              Antonio Roberto
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Amount
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              IDR 1,000,000
            </Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">
              Admin Fee
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2">
              IDR 193.00
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
};

export default PaymentError;
