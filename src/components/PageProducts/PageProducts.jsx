import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';
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

const PageProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://6661e54d63e6a0189fec03d1.mockapi.io/products');
        setProducts(response.data);
      } catch (error) {
        setError('Error fetching products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="mt-14 mb-12 text-center">Loading...</div>;
  }

  if (error) {
    return <div className="mt-14 mb-12 text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hoa lan là loài hoa đẹp với hình dáng độc đáo và màu sắc đa dạng như trắng, xanh, hồng, đỏ, và đốm. Chúng thường mọc thành chùm hoặc đơn lẻ, tượng trưng cho sự quý phái và tình yêu chân thành.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {products.map((data) => (
              <Link to={`/product/${data.id}`} key={data.id}>
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  className="space-y-3"
                >
                  <img
                    src={imageMap[data.img]} // Use the imported images from imageMap
                    alt={data.title}
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.title}</h3>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageProducts;
