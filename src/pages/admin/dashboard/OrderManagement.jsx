import { useState } from 'react';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Select, MenuItem } from '@mui/material';

const orders = [
  { orderId: '200803', customer: 'taile03', date: '2024-1-2 13:23:44', location: 'Thu Duc', phoneNumber: '0903112345', method: 'VNPAY', price: '250.000', status: 'COMPLETED', products: [{ name: 'Wild', quantity: 5, price: '750.000' }, { name: 'Stylish', quantity: 7, price: '750.000' }] },
  { orderId: '200803', customer: 'taile03', date: '2024-1-2 13:23:44', location: 'Long An', phoneNumber: '0903112345', method: 'COD', price: '750.000', status: 'CANCELLED', products: [{ name: 'Wild', quantity: 5, price: '750.000' }, { name: 'Stylish', quantity: 7, price: '750.000' }] },
  { orderId: '200803', customer: 'taile03', date: '2024-1-2 13:23:44', location: 'Long An', phoneNumber: '0903112345', method: 'VNPAY', price: '750.000', status: 'PENDING', products: [{ name: 'Wild', quantity: 5, price: '750.000' }, { name: 'Stylish', quantity: 7, price: '750.000' }] },
];

const getStatusStyle = (status) => {
  switch (status) {
    case 'COMPLETED':
      return { backgroundColor: 'green', color: 'white', borderRadius: '5px', padding: '5px 10px' };
    case 'CANCELLED':
      return { backgroundColor: 'red', color: 'white', borderRadius: '5px', padding: '5px 10px' };
    case 'PENDING':
      return { backgroundColor: 'orange', color: 'white', borderRadius: '5px', padding: '5px 10px' };
    default:
      return {};
  }
};

const OrderManagement = () => {
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleClickOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Handle save action here
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Order Management
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>OrderID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Method</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.orderId}>
                <TableCell>{order.orderId}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.location}</TableCell>
                <TableCell>{order.phoneNumber}</TableCell>
                <TableCell>{order.method}</TableCell>
                <TableCell>{order.price}</TableCell>
                <TableCell>
                  <span style={getStatusStyle(order.status)}>{order.status}</span>
                </TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" onClick={() => handleClickOpen(order)}>
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedOrder && (
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Details Order</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Order ID: {selectedOrder.orderId}
            </DialogContentText>
            <TextField margin="dense" label="Customer" type="text" fullWidth value={selectedOrder.customer} disabled />
            <TextField margin="dense" label="Date" type="text" fullWidth value={selectedOrder.date} disabled />
            <TextField margin="dense" label="Method" type="text" fullWidth value={selectedOrder.method} disabled />
            <TextField margin="dense" label="Location" type="text" fullWidth value={selectedOrder.location} />
            <TextField margin="dense" label="Phone Number" type="text" fullWidth value={selectedOrder.phoneNumber} />
            <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>Product:</Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Quantity</TableCell>
                  <TableCell>Price</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedOrder.products.map((product, index) => (
                  <TableRow key={index}>
                    <TableCell>{product.name}</TableCell>
                    <TableCell>{product.quantity}</TableCell>
                    <TableCell>{product.price}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={2}>Total</TableCell>
                  <TableCell>{selectedOrder.products.reduce((acc, product) => acc + parseFloat(product.price.replace('.', '')), 0).toLocaleString()}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Select
              margin="dense"
              label="Status"
              fullWidth
              value={selectedOrder.status}
              onChange={(e) => setSelectedOrder({ ...selectedOrder, status: e.target.value })}
            >
              <MenuItem value="COMPLETED">COMPLETED</MenuItem>
              <MenuItem value="CANCELLED">CANCELLED</MenuItem>
              <MenuItem value="PENDING">PENDING</MenuItem>
            </Select>
            <TextField margin="dense" label="Note" type="text" fullWidth multiline rows={4} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
            <Button onClick={handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Container>
  );
};

export default OrderManagement;
