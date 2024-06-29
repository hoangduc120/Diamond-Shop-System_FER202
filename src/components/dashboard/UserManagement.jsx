import React, { useState } from 'react';
import { Typography, Button, IconButton, Container, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const initialUsers = [
  { username: 'taile03', fullname: 'Le Thanh Tai', email: 'taile03@gmail.com', phone: '0909 113 114', address: 'Thu Duc', role: 'Admin' },
  { username: 'phamhieu', fullname: 'Pham Van Tuan Hieu', email: 'phamhieu@gmail.com', phone: '0989 889 889', address: 'Long An', role: 'Admin' },
];

const UserManagement = () => {
  const [users, setUsers] = useState(initialUsers);
  const [open, setOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({ username: '', fullname: '', email: '', phone: '', address: '', role: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  const handleClickOpen = () => {
    setIsEditing(false);
    setCurrentUser({ username: '', fullname: '', email: '', phone: '', address: '', role: '' });
    setError('');
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (users.find(user => user.username === currentUser.username && !isEditing)) {
      setError('User name is already exist');
      return;
    }
    if (isEditing) {
      setUsers(users.map(user => user.username === currentUser.username ? currentUser : user));
    } else {
      setUsers([...users, currentUser]);
    }
    setOpen(false);
  };

  const handleEdit = (user) => {
    setIsEditing(true);
    setCurrentUser(user);
    setError('');
    setOpen(true);
  };

  const handleDelete = (username) => {
    setUsers(users.filter(user => user.username !== username));
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Typography variant="h5" gutterBottom>
        Users
      </Typography>
      <Button variant="contained" color="primary" style={{ marginBottom: '10px' }} onClick={handleClickOpen}>+ Add User</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User name</TableCell>
              <TableCell>Full name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.username}>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.fullname}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phone}</TableCell>
                <TableCell>{user.address}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(user)}>
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="delete" color="secondary" onClick={() => handleDelete(user.username)}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{isEditing ? 'Edit User' : 'Add New User'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {isEditing ? 'Update the information for this user.' : 'Fill in the information for the new user.'}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="User name"
            type="text"
            fullWidth
            value={currentUser.username}
            onChange={(e) => setCurrentUser({ ...currentUser, username: e.target.value })}
            error={!!error}
            helperText={error}
          />
          <TextField
            margin="dense"
            label="Password"
            type="password"
            fullWidth
            value={currentUser.password}
            onChange={(e) => setCurrentUser({ ...currentUser, password: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            value={currentUser.role}
            onChange={(e) => setCurrentUser({ ...currentUser, role: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone number"
            type="text"
            fullWidth
            value={currentUser.phone}
            onChange={(e) => setCurrentUser({ ...currentUser, phone: e.target.value })}
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
            label="Address"
            type="text"
            fullWidth
            value={currentUser.address}
            onChange={(e) => setCurrentUser({ ...currentUser, address: e.target.value })}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleSave} color="primary">
            {isEditing ? 'Update User' : 'Add User'}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default UserManagement;
