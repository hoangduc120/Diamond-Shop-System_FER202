import React, { useState, useEffect } from "react";
import axios from "../../../axiosConfig";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, Grid, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
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

  if (!product) {
    return <Typography>Loading...</Typography>;
  }

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...product,
        id: product.diamond_id,
        availableQuantity: parseInt(product.quantity),
      })
    );
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <Container
      maxWidth="lg"
      style={{ padding: "40px 0", backgroundColor: "#f8f8f8" }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderRadius: "10px",
              overflow: "hidden",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="h4" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            {product.shape} | {product.color.join(", ")} Color | {product.lab}{" "}
            Lab
          </Typography>
          <Typography
            variant="h5"
            style={{ color: "#d32f2f", margin: "20px 0" }}
          >
            {parseInt(product.price).toLocaleString()}đ
          </Typography>
          <Box>
            <Button
              variant="contained"
              color="primary"
              style={{ marginRight: "10px" }}
              onClick={handleAddToCart}
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
      </Grid>
      <Box style={{ marginTop: "40px" }}>
        <Typography variant="h5" gutterBottom>
          Product Details
        </Typography>
        <Grid container spacing={4}>
          {product.shape && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Shape:</strong> {product.shape}
              </Typography>
            </Grid>
          )}
          {product.carat && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Carat:</strong> {product.carat}
              </Typography>
            </Grid>
          )}
          {product.color && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Color:</strong> {product.color.join(", ")}
              </Typography>
            </Grid>
          )}
          {product.price && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Price:</strong>{" "}
                {parseInt(product.price).toLocaleString()}đ
              </Typography>
            </Grid>
          )}
          {product.lab && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Lab:</strong> {product.lab}
              </Typography>
            </Grid>
          )}
          {product.origin && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Origin:</strong> {product.origin}
              </Typography>
            </Grid>
          )}
          {product.quantity && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Quantity:</strong> {product.quantity}
              </Typography>
            </Grid>
          )}
          {product.diamond_status !== undefined && (
            <Grid item xs={12} sm={4}>
              <Typography variant="body1">
                <strong>Status:</strong>{" "}
                {product.diamond_status ? "Active" : "Inactive"}
              </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default ProductDetail;
