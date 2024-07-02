import React, { useState, useEffect } from 'react';
import axios from '../../axiosConfig';
import { Typography, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, IconButton, FormControlLabel, Switch } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { v4 as uuidv4 } from 'uuid';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    user_id: '',
    fullname: '',
    email: '',
    phone: '',
    address_shipping: '',
    avatar: '',
    gender: false,
    role: false,
    account_status: false,
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get('/users')
      .then(response => {
        console.log('Fetched users:', response.data);
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };

  const handleClickOpen = (user) => {
    if (user) {
      setIsEditing(true);
      setCurrentUser(user);
    } else {
      setIsEditing(false);
      setCurrentUser({
        user_id: uuidv4(),
        fullname: '',
        email: '',
        phone: '',
        address_shipping: '',
        avatar: '',
        gender: false,
        role: false,
        account_status: false,
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log('Current User:', currentUser);

    if (!currentUser.fullname || !currentUser.email || !currentUser.phone || !currentUser.address_shipping) {
      alert('Please fill in all required fields.');
      return;
    }

    if (isEditing) {
      axios.put(`/users/${currentUser.user_id}`, currentUser)
        .then(response => {
          console.log('User updated:', response.data);
          fetchUsers();
          handleClose();
        })
        .catch(error => {
          console.error('Error updating user:', error.response ? error.response.data : error.message);
        });
    } else {
      axios.post('/users', currentUser)
        .then(response => {
          console.log('User added:', response.data);
          fetchUsers();
          handleClose();
        })
        .catch(error => {
          console.error('Error adding user:', error.response ? error.response.data : error.message);
        });
    }
  };

  const handleDelete = (user_id) => {
    axios.delete(`/users/${user_id}`)
      .then(response => {
        console.log('User deleted:', response.data);
        fetchUsers();
      })
      .catch(error => {
        console.error('Error deleting user:', error.response ? error.response.data : error.message);
      });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        User Management
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }} onClick={() => handleClickOpen(null)}>+ Add User</Button>
      <TableContainer component={Paper} style={{ maxHeight: '60vh', overflowY: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>UserID</TableCell>
              <TableCell>Full Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.user_id}>
                  <TableCell>{user.user_id}</TableCell>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>{user.address_shipping}</TableCell>
                  <TableCell>
                    <img src={user.avatar} alt={user.fullname} style={{ width: '50px', height: '50px' }} />
                  </TableCell>
                  <TableCell>{user.gender ? 'Male' : 'Female'}</TableCell>
                  <TableCell>{user.role ? 'Admin' : 'User'}</TableCell>
                  <TableCell>{user.account_status ? 'Active' : 'Inactive'}</TableCell>
                  <TableCell>
                    <IconButton aria-label="edit" color="primary" onClick={() => handleClickOpen(user)}>
                      <Edit />
                    </IconButton>
                    <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(user.user_id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={10} align="center">No users found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Full Name"
            type="text"
            fullWidth
            value={currentUser.fullname}
            onChange={(e) => setCurrentUser({ ...currentUser, fullname: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email"
            type="email"
            fullWidth
            value={currentUser.email}
            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone"
            type="text"
            fullWidth
            value={currentUser.phone}
            onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Address"
            type="text"
            fullWidth
            value={currentUser.address_shipping}
            onChange={(e) => setCurrentUser({ ...currentUser, address_shipping: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Avatar"
            type="text"
            fullWidth
            value={currentUser.avatar}
            onChange={(e) => setCurrentUser({ ...currentUser, avatar: e.target.value })}
          />
          <FormControlLabel
            control={<Switch checked={currentUser.gender} onChange={(e) => setCurrentUser({ ...currentUser, gender: e.target.checked })} />}
            label={currentUser.gender ? 'Male' : 'Female'}
          />
          <FormControlLabel
            control={<Switch checked={currentUser.role} onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.checked })} />}
            label={currentUser.role ? 'Admin' : 'User'}
          />
          <FormControlLabel
            control={<Switch checked={currentUser.account_status} onChange={(e) => setCurrentUser({ ...currentUser, account_status: e.target.checked })} />}
            label={currentUser.account_status ? 'Active' : 'Inactive'}
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

export default UserManagement;
