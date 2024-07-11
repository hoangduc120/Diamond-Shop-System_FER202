import { useState, useEffect } from "react";
import axios from "../../../axiosConfig";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  Snackbar,
  Alert,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/diamonds/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [id]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        id: product.diamond_id,
        availableQuantity: parseInt(product.quantity),
      })
    );
    setSnackbarOpen(true); // Open Snackbar when adding to cart
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/checkout");
  };

  return (
    <Container maxWidth="lg" style={{ paddingTop: 40, marginBottom: 40 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Card elevation={3}>
            <img
              src={product?.image}
              alt={product?.name}
              style={{ width: "100%", maxHeight: 600, objectFit: "cover" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box paddingLeft={4}>
            <Typography
              variant="h5"
              component="div"
              gutterBottom
              fontWeight="bold"
            >
              {product?.name}
            </Typography>
            <Typography
              variant="h5"
              fontWeight="bold"
              style={{ color: "#d32f2f", marginBottom: 20 }}
            >
              {parseInt(product?.price).toLocaleString()}đ
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Shape:</strong> {product?.shape}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Carat:</strong> {product?.carat}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Color:</strong> {product?.color.join(", ")}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Price:</strong>{" "}
                  {parseInt(product?.price).toLocaleString()}đ
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Lab:</strong> {product?.lab}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Origin:</strong> {product?.origin}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Quantity:</strong> {product?.quantity}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="h6">
                  <strong>Status:</strong>{" "}
                  {product?.diamond_status ? "Active" : "Inactive"}
                </Typography>
              </Grid>
              <Box marginTop={4}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleAddToCart}
                  style={{ marginRight: 10 }}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Add to cart successfully
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default ProductDetail;
