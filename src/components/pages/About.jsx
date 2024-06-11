import React from 'react';
import Img1 from "../../assets/about/About.png";

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.slogan}>
        <h1 style={styles.sloganText}>Welcome to Dương Bán Hoa</h1>
        <div style={styles.underline}></div>
        <p style={styles.sloganDescription}>Dương felt sad, so Dương started selling flowers.</p>
      </div>
      <div style={styles.infoSection}>
        <div style={styles.imageContainer}>
          <img src={Img1} alt="Company" style={styles.image} />
        </div>
        <div style={styles.info}>
          <h2 style={styles.infoTitle}>Our Mission</h2>
          <p style={styles.infoText}>
            Our mission at Dương Bán Hoa is to bring a youthful and affectionate feeling to everyone. 
            All of our products are grown using the most advanced technology, and we hope you love them.
          </p>
          <div style={styles.readMore}>
            <button style={styles.readMoreButton}>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'var(--container-bg-color)',
    color: 'var(--text-color)',
  },
  slogan: {
    marginBottom: '40px',
  },
  sloganText: {
    fontSize: '3rem',
    color: 'var(--primary-color)',
    position: 'relative',
    display: 'inline-block',
  },
  underline: {
    width: '100%',
    height: '4px',
    backgroundColor: 'green',
    margin: '10px auto 0',
  },
  sloganDescription: {
    fontSize: '0.875rem',  // Adjusted to be smaller and softer
    color: 'var(--secondary-color)',
    marginTop: '10px',
    fontStyle: 'italic',
  },
  infoSection: {
    display: 'flex',
    gap: '40px',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: '1',
  },
  image: {
    width: '100%',
    borderRadius: '10px',
  },
  info: {
    flex: '2',
    textAlign: 'left',
  },
  infoTitle: {
    fontSize: '2rem',
    color: 'var(--primary-color)',
    marginBottom: '20px',
  },
  infoText: {
    fontSize: '1.25rem',
    color: 'var(--text-color)',
    lineHeight: '1.6',
  },
  readMore: {
    marginTop: '20px',
    textAlign: 'left',
  },
  readMoreButton: {
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
};

export default About;
