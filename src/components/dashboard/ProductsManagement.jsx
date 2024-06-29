import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig'; // Đường dẫn tới axiosConfig
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, FormControlLabel, Switch } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    image: '',
    color: '',
    total_price: 0,
    price: 0,
    diamond_id: '',
    carat: 0,
    origin: '',
    id: '',
    input_date: '',
    diamond_name: '',
    diamond_status: false,
    dimensions: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('/diamonds')
      .then(response => {
        console.log('Fetched products:', response.data);
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleClickOpen = (product) => {
    if (product) {
      setIsEditing(true);
      setCurrentProduct(product);
    } else {
      setIsEditing(false);
      setCurrentProduct({
        image: '',
        color: '',
        total_price: 0,
        price: 0,
        diamond_id: uuidv4(), // Sử dụng uuid để tạo id
        carat: 0,
        origin: '',
        id: '',
        input_date: new Date().toISOString(),
        diamond_name: '',
        diamond_status: false, // Đây là giá trị mặc định khi thêm mới
        dimensions: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Current Product:', currentProduct);

    if (!currentProduct.image || !currentProduct.diamond_name || !currentProduct.color || !currentProduct.carat || !currentProduct.price || !currentProduct.total_price || !currentProduct.origin || !currentProduct.dimensions) {
      alert('Please fill in all required fields.');
      return;
    }

    if (isEditing) {
      axios.put(`/diamonds/${currentProduct.diamond_id}`, currentProduct)
        .then(response => {
          console.log('Product updated:', response.data);
          fetchProducts();
          handleClose();
        })
        .catch(error => {
          console.error('Error updating product:', error.response ? error.response.data : error.message);
        });
    } else {
      axios.post('/diamonds', currentProduct)
        .then(response => {
          console.log('Product added:', response.data);
          fetchProducts();
          handleClose();
        })
        .catch(error => {
          console.error('Error adding product:', error.response ? error.response.data : error.message);
        });
    }
  };

  const handleDelete = (diamond_id) => {
    axios.delete(`/diamonds/${diamond_id}`)
      .then(response => {
        console.log('Product deleted:', response.data);
        fetchProducts();
      })
      .catch(error => {
        console.error('Error deleting product:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Products Management
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen(null)}>+ Add Product</Button>
      <TableContainer component={Paper} style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ProductID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Carat</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Total Price</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Dimensions</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Input Date</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.length > 0 ? (
              products.map((product) => (
                <TableRow key={product.diamond_id}>
                  <TableCell>{product.diamond_id}</TableCell>
                  <TableCell>{product.diamond_name}</TableCell>
                  <TableCell>{product.color}</TableCell>
                  <TableCell>{product.carat}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.total_price}</TableCell>
                  <TableCell>{product.origin}</TableCell>
                  <TableCell>{product.dimensions}</TableCell>
                  <TableCell>
                    <img src={product.image} alt={product.diamond_name} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{product.diamond_status ? 'Active' : 'Inactive'}</TableCell>
                  <TableCell>{product.input_date}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit" color="primary" onClick={() => handleClickOpen(product)}>
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(product.diamond_id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={12} align="center">No products found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit Product' : 'Add New Product'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={currentProduct.diamond_name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, diamond_name: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Color"
            type="text"
            fullWidth
            value={currentProduct.color}
            onChange={(e) => setCurrentProduct({ ...currentProduct, color: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Carat"
            type="number"
            fullWidth
            value={currentProduct.carat}
            onChange={(e) => setCurrentProduct({ ...currentProduct, carat: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={currentProduct.price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Total Price"
            type="number"
            fullWidth
            value={currentProduct.total_price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, total_price: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Origin"
            type="text"
            fullWidth
            value={currentProduct.origin}
            onChange={(e) => setCurrentProduct({ ...currentProduct, origin: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Dimensions"
            type="text"
            fullWidth
            value={currentProduct.dimensions}
            onChange={(e) => setCurrentProduct({ ...currentProduct, dimensions: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Image"
            type="text"
            fullWidth
            value={currentProduct.image}
            onChange={(e) => setCurrentProduct({ ...currentProduct, image: e.target.value })}
          />
          <FormControlLabel
            control={<Switch checked={currentProduct.diamond_status} onChange={(e) => setCurrentProduct({ ...currentProduct, diamond_status: e.target.checked })} />}
            label={currentProduct.diamond_status ? 'Active' : 'Inactive'}
          />
          <TextField
            margin="dense"
            label="Input Date"
            type="text"
            fullWidth
            value={currentProduct.input_date}
            onChange={(e) => setCurrentProduct({ ...currentProduct, input_date: e.target.value })}
          />
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
    </Container>
  );
};

export default ProductsManagement;
