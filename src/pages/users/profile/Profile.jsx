import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Select,
  MenuItem,
  Box,
  Container,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Profile = () => {
  const [userData, setUserData] = useState({
    name: "Hoàng Việt Đức",
    dob: "2003-03-03",
    gender: "male",
    address: "Số 123, Phố XYZ, Quận ABC",
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {}, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsEditing(false);
    toast.success(` successfully`);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    if (id === "dob") {
      setUserData({ ...userData, dob: value });
    } else {
      setUserData({ ...userData, [id]: value });
    }
  };

  return (
    <Container maxWidth="lg">
      <ToastContainer />
      <Box sx={{ flexGrow: 1, p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="h3"
              gutterBottom
              style={{
                color: "#0477CA",
                display: "flex",
                justifyContent: "center",
                fontWeight: "400",
              }}
            >
              Profile
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="body2">Họ và tên:</Typography>
                    <TextField
                      id="name"
                      value={userData.name}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Ngày sinh:</Typography>
                    <TextField
                      id="dob"
                      value={userData.dob}
                      variant="outlined"
                      fullWidth
                      type="date"
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Giới tính:</Typography>
                    <Select
                      id="gender"
                      value={userData.gender}
                      onChange={(e) =>
                        setUserData({ ...userData, gender: e.target.value })
                      }
                      fullWidth
                      disabled={!isEditing}
                    >
                      <MenuItem value="male">Nam</MenuItem>
                      <MenuItem value="female">Nữ</MenuItem>
                      <MenuItem value="other">Khác</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2">Địa chỉ:</Typography>
                    <TextField
                      id="address"
                      value={userData.address}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      onChange={handleChange}
                      disabled={!isEditing}
                      InputLabelProps={{ shrink: true }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            {isEditing ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSave}
                  sx={{
                    mr: "1em",
                    background: "linear-gradient(45deg, #aaa 30%, #434343 90%)",
                    border: 0,
                    borderRadius: 15,
                    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                    color: "white",
                    height: 48,
                    padding: "0 30px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #434343  30%, #aaa  90%)",
                    },
                  }}
                >
                  Lưu
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    background: "linear-gradient(45deg, #aaa 30%, #434343 90%)",
                    border: 0,
                    borderRadius: 15,
                    boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                    color: "white",
                    height: 48,
                    padding: "0 30px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      background:
                        "linear-gradient(45deg, #434343  30%, #aaa  90%)",
                    },
                  }}
                  onClick={handleCancel}
                >
                  Hủy
                </Button>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(45deg, #aaa 30%, #434343 90%)",
                  border: 0,
                  borderRadius: 15,
                  boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
                  color: "white",
                  height: 48,
                  padding: "0 30px",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": {
                    background:
                      "linear-gradient(45deg, #434343  30%, #aaa  90%)",
                  },
                }}
                onClick={handleEdit}
              >
                Chỉnh sửa
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Profile;
