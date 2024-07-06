import { useState, useEffect } from 'react';
import axios from '../../../axiosConfig';
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
  DialogTitle,
  TextField,
  IconButton,
  FormControlLabel,
  Switch,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    shape: '',
    carat: 0,
    color: [],
    price: 0,
    lab: '',
    origin: '',
    quantity: 0,
    diamond_status: false,
    image: '',
    diamond_id: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get('/diamonds')
      .then(response => {
        const updatedProducts = response.data.map(product => ({
          ...product,
          diamond_status: product.quantity > 0
        }));
        setProducts(updatedProducts);
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
        name: '',
        shape: '',
        carat: 0,
        color: [],
        price: 0,
        lab: '',
        origin: '',
        quantity: 0,
        diamond_status: false,
        image: '',
        diamond_id: '',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Current Product:', currentProduct);

    if (!currentProduct.name || !currentProduct.carat || !currentProduct.price || !currentProduct.origin || !currentProduct.quantity || !currentProduct.image) {
      alert('Please fill in all required fields.');
      return;
    }

    currentProduct.diamond_status = currentProduct.quantity > 0;

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
      currentProduct.diamond_id = uuidv4();
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Products Management
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen(null)}>+ Add Product</Button>
      <TableContainer component={Paper} style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Shape</TableCell>
              <TableCell>Carat</TableCell>
              <TableCell>Color</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Lab</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Image</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <TableRow key={product.diamond_id}>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.shape}</TableCell>
                  <TableCell>{product.carat}</TableCell>
                  <TableCell>{product.color.join(', ')}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.lab}</TableCell>
                  <TableCell>{product.origin}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{product.diamond_status ? 'Active' : 'Inactive'}</TableCell>
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
                <TableCell colSpan={11} align="center">No products found</TableCell>
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
            value={currentProduct.name}
            onChange={(e) => setCurrentProduct({ ...currentProduct, name: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Shape</InputLabel>
            <Select
              value={currentProduct.shape}
              onChange={(e) => setCurrentProduct({ ...currentProduct, shape: e.target.value })}
            >
              <MenuItem value="Round">Round</MenuItem>
              <MenuItem value="Pear">Pear</MenuItem>
              <MenuItem value="Heart">Heart</MenuItem>
              <MenuItem value="Princess">Princess</MenuItem>
              <MenuItem value="Oval">Oval</MenuItem>
              <MenuItem value="Emerald">Emerald</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Carat"
            type="number"
            fullWidth
            value={currentProduct.carat}
            onChange={(e) => setCurrentProduct({ ...currentProduct, carat: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Color</InputLabel>
            <Select
              multiple
              value={currentProduct.color}
              onChange={(e) => setCurrentProduct({ ...currentProduct, color: e.target.value })}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="E">E</MenuItem>
              <MenuItem value="F">F</MenuItem>
              <MenuItem value="G">G</MenuItem>
              <MenuItem value="D">D</MenuItem>
              <MenuItem value="J">J</MenuItem>
              <MenuItem value="I">I</MenuItem>
              <MenuItem value="H">H</MenuItem>
            </Select>
          </FormControl>
          <TextField
            margin="dense"
            label="Price"
            type="number"
            fullWidth
            value={currentProduct.price}
            onChange={(e) => setCurrentProduct({ ...currentProduct, price: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Lab</InputLabel>
            <Select
              value={currentProduct.lab}
              onChange={(e) => setCurrentProduct({ ...currentProduct, lab: e.target.value })}
            >
              <MenuItem value="GIA">GIA</MenuItem>
              <MenuItem value="SJC">SJC</MenuItem>
              
            </Select>
          </FormControl>
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
            label="Quantity"
            type="number"
            fullWidth
            value={currentProduct.quantity}
            onChange={(e) => setCurrentProduct({ ...currentProduct, quantity: e.target.value })}
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
