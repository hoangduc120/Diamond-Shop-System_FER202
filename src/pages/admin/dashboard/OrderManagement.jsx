
import { useEffect, useState } from 'react';
import {
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  Box,
  Grid,
  IconButton,
  Snackbar,
  Alert,
  TablePagination,
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { RingLoader } from 'react-spinners';

const StyledTableCell = styled(TableCell)({
  fontWeight: 'bold',
});

const OrderManagement = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const [users, setUsers] = useState([]);
  const [diamonds, setDiamonds] = useState([]);
  const [combinedData, setCombinedData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [confirmClose, setConfirmClose] = useState(false);

  useEffect(() => {
    const requestUser = axios.get("/users");
    const requestOrder = axios.get("/api/payments");
    const requestDiamond = axios.get('/diamonds');
  
    Promise.all([requestUser, requestOrder, requestDiamond])
      .then(([usersResponse, ordersResponse, diamondsResponse]) => {
        const usersData = Array.isArray(usersResponse.data) ? usersResponse.data : [];
        const ordersData = Array.isArray(ordersResponse.data) ? ordersResponse.data : [];
        const diamondsData = Array.isArray(diamondsResponse.data) ? diamondsResponse.data : [];
  
        setUsers(usersData);
        setOrders(ordersData);
        setDiamonds(diamondsData);
  
        // Kết hợp dữ liệu ngay sau khi nhận được phản hồi API
        const combinedData = ordersData.map(order => {
          const user = usersData.find(u => u.user_id === order.user_id);
          const diamond = diamondsData.find(d => d.diamond_id === order.diamonds[0]?.diamond_id); // Đảm bảo rằng order.diamonds tồn tại và không phải là mảng rỗng
  
          return {
            ...order,
            ...(user || {}), // Chỉ thêm user nếu tìm thấy
            ...(diamond || {}), // Chỉ thêm diamond nếu tìm thấy
          };
        });
  
        setCombinedData(combinedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); // Chỉ chạy một lần khi component được mount

  const handleClickOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setConfirmClose(true);
  };

  const handleConfirmClose = (confirm) => {
    if (confirm) {
      setOpen(false);
    }
    setConfirmClose(false);
  };

  const handleSave = () => {
    // Handle save action here
    setSnackbarOpen(true);
    setOpen(false);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <RingLoader color="#B19567" size={80} />
      </Box>
    );
  }

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h4" gutterBottom style={{ fontFamily: 'Times New Roman' }}>
        Order Management
      </Typography>
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: "20px", marginBottom: "50px" }}>
        <TableContainer style={{ maxHeight: "60vh", overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead style={{ backgroundColor: '#f5f5f5' }}>
              <TableRow>
                <StyledTableCell>OrderID</StyledTableCell>
                <StyledTableCell>Customer</StyledTableCell>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Address</StyledTableCell>
                <StyledTableCell>Phone</StyledTableCell>
                <StyledTableCell>Method</StyledTableCell>
                <StyledTableCell>Price</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell>Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {combinedData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index) => (
                <TableRow key={index} hover >
                  <TableCell>{item.user_id}</TableCell>
                  <TableCell>{item.fullname}</TableCell>
                  <TableCell>{item.date}</TableCell>
                  <TableCell>{item.address_shipping}</TableCell>
                  <TableCell>{item.phone}</TableCell>
                  <TableCell>{item.partnerCode}</TableCell>
                  <TableCell>{item.totalAmount}</TableCell>
                  <TableCell>
                    {item.status ? "True" : "False"}
                  </TableCell>
                  <TableCell>
                    <Button variant="contained" color="primary" onClick={() => handleClickOpen(item)}>
                      View Details
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={combinedData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      {selectedOrder && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" >
          <DialogTitle>
            Order Details
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <strong>Order ID:</strong> {selectedOrder.user_id}
            </DialogContentText>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  label="Customer"
                  type="text"
                  fullWidth
                  value={selectedOrder.fullname}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  label="Date"
                  type="text"
                  fullWidth
                  value={selectedOrder.date}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  label="Method"
                  type="text"
                  fullWidth
                  value={selectedOrder.partnerCode}
                  disabled
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  label="Address"
                  type="text"
                  fullWidth
                  value={selectedOrder.address_shipping}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  margin="dense"
                  label="Phone"
                  type="text"
                  fullWidth
                  value={selectedOrder.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom style={{ marginTop: '10px' }}>
                  Products:
                </Typography>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Name</TableCell>
                      <TableCell>Quantity</TableCell>
                      <TableCell>Price</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow >
                      <TableCell>{selectedOrder.name}</TableCell>
                      <TableCell>{selectedOrder.quantity}</TableCell>
                      <TableCell>{selectedOrder.price}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2}>Total</TableCell>
                      <TableCell>
                        {selectedOrder.totalAmount}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="dense"
                  label="Note"
                  type="text"
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
            </Grid>
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
      <Dialog

        open={confirmClose}
        onClose={() => handleConfirmClose(false)}
      >
        <DialogTitle>Confirmation</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure to close this tab?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleConfirmClose(false)} color="primary">
            No
          </Button>
          <Button onClick={() => handleConfirmClose(true)} color="primary">
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
          Save Successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default OrderManagement;