// src/components/Account.js
import { useState, useEffect } from "react";
import axios from "../../../axiosConfig";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Account = () => {
  const [user, setUser] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  useEffect(() => {
    // Giả sử userId được lưu trong localStorage sau khi đăng nhập
    const user_id = localStorage.getItem("user_id");
    console.log(user_id);
    axios
      .get(`/users/${user_id}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    if (!user.fullname || !user.email || !user.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    axios
      .put(`/users/${user.user_id}`, user)
      .then((response) => {
        console.log("User updated:", response.data);
        alert("Account updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <Container maxWidth="sm" sx={{mt: 5}}>
      <Typography variant="h5" gutterBottom>
        Account Information
      </Typography>
      <Box component="form" noValidate autoComplete="off">
        <TextField
          label="Full Name"
          name="fullname"
          fullWidth
          margin="normal"
          value={user.fullname}
          onChange={handleInputChange}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          margin="normal"
          value={user.phone}
          onChange={handleInputChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={user.email}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default Account;
