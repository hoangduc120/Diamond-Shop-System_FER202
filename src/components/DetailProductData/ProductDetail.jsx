import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaYoutube } from 'react-icons/fa';

// Import images
import Img1 from "../../assets/flowers/bong1.png";
import Img2 from "../../assets/flowers/bong2.png";
import Img3 from "../../assets/flowers/bong3.png";
import Img4 from "../../assets/flowers/bong4.png";
import Img5 from "../../assets/flowers/bong5.png";
import Img6 from "../../assets/flowers/bong6.png";
import Img7 from "../../assets/flowers/bong7.png";
import Img8 from "../../assets/flowers/bong8.png";
import Img9 from "../../assets/flowers/bong9.png";
import Img10 from "../../assets/flowers/bong10.png";
import Img11 from "../../assets/flowers/bong11.png";
import Img12 from "../../assets/flowers/bong12.png";
import Img13 from "../../assets/flowers/bong13.png";
import Img14 from "../../assets/flowers/bong14.png";
import Img15 from "../../assets/flowers/bong15.png";

const imageMap = {
  "Img1": Img1,
  "Img2": Img2,
  "Img3": Img3,
  "Img4": Img4,
  "Img5": Img5,
  "Img6": Img6,
  "Img7": Img7,
  "Img8": Img8,
  "Img9": Img9,
  "Img10": Img10,
  "Img11": Img11,
  "Img12": Img12,
  "Img13": Img13,
  "Img14": Img14,
  "Img15": Img15
};

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://6661e54d63e6a0189fec03d1.mockapi.io/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Error fetching product data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleVideoClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="product-detail" style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={imageMap[product.img]} alt={product.title} style={styles.image} />
      </div>
      <div style={styles.infoContainer}>
        <h1 style={styles.title}>{product.title}</h1>
        <p style={styles.color}>Color: {product.color}</p>
        <p style={styles.origin}>Origin: {product.origin}</p>
        <p style={styles.characteristics}>Characteristics: {product.characteristics}</p>
        <p style={styles.description}>Description: {product.description}</p>
        <div style={styles.ratingContainer}>
          <span style={styles.star}>⭐</span>
          <span style={styles.rating}>{product.rating}</span>
        </div>
        {product.videoUrl && (
          <div style={styles.youtubeIcon} onClick={handleVideoClick}>
            <FaYoutube size={40} color="#FF0000" />
          </div>
        )}
        {showVideo && product.videoUrl && (
          <div style={styles.videoContainer}>
            <iframe
              width="320"
              height="180"
              src={product.videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
        <div style={styles.buttonContainer}>
          <button style={styles.button}>Buy Now</button>
          <button style={styles.button}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: '20px',
    marginTop: '20px',
    borderRadius: '10px',
    boxShadow: 'var(--shadow)',
    maxWidth: '1200px',
    margin: '20px auto',
    backgroundColor: 'var(--container-bg-color)',
  },
  imageContainer: {
    flexShrink: 0,
    marginRight: '20px',
  },
  image: {
    height: '500px',
    width: '350px',
    objectFit: 'cover',
    borderRadius: '10px',
  },
  infoContainer: {
    flexGrow: 1,
    textAlign: 'left',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: 'var(--text-color)',
  },
  color: {
    fontSize: '1.25rem',
    color: 'var(--text-color)',
    marginBottom: '5px',
  },
  origin: {
    fontSize: '1.25rem',
    color: 'var(--text-color)',
    marginBottom: '5px',
  },
  characteristics: {
    fontSize: '1.25rem',
    color: 'var(--text-color)',
    marginBottom: '5px',
  },
  description: {
    fontSize: '1.25rem',
    color: 'var(--text-color)',
    marginBottom: '15px',
  },
  ratingContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
    marginBottom: '20px',
  },
  star: {
    color: '#FFD700',
    fontSize: '1.5rem',
  },
  rating: {
    fontSize: '1.5rem',
    marginLeft: '5px',
    color: 'var(--text-color)',
  },
  youtubeIcon: {
    cursor: 'pointer',
    display: 'inline-block',
    marginTop: '20px',
  },
  videoContainer: {
    marginTop: '20px',
    width: '100%',
    maxWidth: '560px',
  },
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },
};

export default ProductDetail;
