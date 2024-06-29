import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { AccountCircle, ShoppingCart, Store, ExitToApp } from '@mui/icons-material';
import { Routes, Route, Link } from 'react-router-dom';
import UserManagement from './UserManagement'; // Đảm bảo đường dẫn đúng đến tệp UserManagement.js của bạn
import OrderManagement from './OrderManagement'; // Đảm bảo đường dẫn đúng đến tệp OrderManagement.js của bạn
import ProductsManagement from './ProductsManagement'; // Đảm bảo đường dẫn đúng đến tệp ProductsManagement.js của bạn

const Dashboard = () => {
  return (
    <Box style={{ display: 'flex', height: '100vh' }}>
      <Box style={{ width: '250px', backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
        <Typography variant="h6" gutterBottom>
          Main
        </Typography>
        <List>
          <ListItem button component={Link} to="/dashboard/user-management">
            <ListItemIcon>
              <AccountCircle style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="User management" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/order-management">
            <ListItemIcon>
              <ShoppingCart style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Order management" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/dashboard/products">
            <ListItemIcon>
              <Store style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Products" style={{ color: 'white' }} />
          </ListItem>
          <ListItem button component={Link} to="/logout">
            <ListItemIcon>
              <ExitToApp style={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Logout" style={{ color: 'white' }} />
          </ListItem>
        </List>
      </Box>
      <Box style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="user-management" element={<UserManagement />} />
          <Route path="order-management" element={<OrderManagement />} />
          <Route path="products" element={<ProductsManagement />} />
          <Route path="logout" element={<Typography variant="h4">Logout</Typography>} />
        </Routes>
      </Box>
    </Box>
  );
};

export default Dashboard;
