import React from "react";
import Img1 from "../../assets/flowers/bong1.png";
import Img2 from "../../assets/flowers/bong2.png";
import Img3 from "../../assets/flowers/bong3.png";
import Img4 from "../../assets/flowers/bong4.png";
import Img5 from "../../assets/flowers/bong5.png";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router-dom";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "White orchid",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Blue orchid",
    rating: 4.5,
    color: "Blue",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Pink orchid",
    rating: 4.7,
    color: "Pink",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Red orchid",
    rating: 4.4,
    color: "Red",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Freckled orchid",
    rating: 4.5,
    color: "Freckled",
    aosDelay: "800",
  },
];

const Products = () => {
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
            Hoa lan là loài hoa đẹp với hình dáng độc đáo và màu sắc đa dạng như
            trắng, xanh, hồng, đỏ, và đốm. Chúng thường mọc thành chùm hoặc đơn
            lẻ, tượng trưng cho sự quý phái và tình yêu chân thành.
          </p>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <Link to={`/product/${data.id}`} key={data.id} className="space-y-3" data-aos="fade-up" data-aos-delay={data.aosDelay}>
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* view all button */}
          <div className="flex justify-center">
            <Link to="/products">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
