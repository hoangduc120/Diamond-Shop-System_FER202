// src/components/Profile.js
import { useState, useEffect } from "react";
import axios from "../../../axiosConfig";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  FormControlLabel,
  Switch,
} from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState({
    fullname: "",
    gender: false,
    address_shipping: "",
  });

  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
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

  const handleSwitchChange = (e) => {
    setUser({ ...user, gender: e.target.checked });
  };

  const handleSave = () => {
    if (!user.fullname || !user.address_shipping) {
      alert("Please fill in all required fields.");
      return;
    }

    axios
      .put(`/users/${user.user_id}`, user)
      .then((response) => {
        console.log("User updated:", response.data);
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating user:", error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        Profile Information
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
        <FormControlLabel
          control={
            <Switch checked={user.gender} onChange={handleSwitchChange} />
          }
          label={user.gender ? "Male" : "Female"}
        />
        <TextField
          label="Address"
          name="address_shipping"
          fullWidth
          margin="normal"
          value={user.address_shipping}
          onChange={handleInputChange}
        />
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
