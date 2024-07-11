import {
  Button,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  CircularProgress,
  Box
} from "@mui/material";
import axios from "../../../axiosConfig";
import { useEffect, useState } from "react";

const PaymentManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    axios
      .get("/payments")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefund = (payment_id) => {
    axios
      .post(`/refund/${payment_id}`, payment_id)
      .then((res) => {
        console.log(res.data);
        fetchData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: "20px" }}>
      <Typography variant="h5" gutterBottom>
        Payment Management
      </Typography>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer
          component={Paper}
          style={{ maxHeight: "60vh", overflowY: "auto" }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>UserID</TableCell>
                <TableCell>Full Name</TableCell>
                <TableCell>Payment ID</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Payment Method</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell>{user.user_id}</TableCell>
                    <TableCell>{user.fullname}</TableCell>
                    <TableCell>{user.payment_id}</TableCell>
                    <TableCell>{user.totalAmount}</TableCell>
                    <TableCell>{user.date}</TableCell>
                    <TableCell>{user.partnerCode}</TableCell>
                    <TableCell>{user.status ? "True" : "False"}</TableCell>
                    <TableCell>
                      <Button
                        onClick={() => handleRefund(user.payment_id)}
                        color="primary"
                        disabled={!user.status}
                        sx={{
                          background:
                            "linear-gradient(45deg, #aaa 30%, #434343 90%)",
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
                        Refund
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={10} align="center">
                    No users found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default PaymentManagement;
