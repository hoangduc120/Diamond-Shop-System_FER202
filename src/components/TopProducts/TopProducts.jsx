import React from "react";
import { Link } from "react-router-dom";
import Img1 from "../../assets/flower/bong1.png";
import Img2 from "../../assets/flower/bong2.png";
import Img3 from "../../assets/flower/bong3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "White orchid",
    description:
      "Hoa lan trắng là loài hoa thanh lịch với cánh hoa trắng tinh khiết, tượng trưng cho vẻ đẹp và sự thuần khiết.",
  },
  {
    id: 2,
    img: Img2,
    title: "Blue orchid",
    description:
      "Hoa lan xanh nước có cánh hoa màu xanh dương độc đáo, tạo nên vẻ đẹp đặc biệt và cuốn hút.",
  },
  {
    id: 3,
    img: Img3,
    title: "Pink orchid",
    description:
      "Hoa lan hồng có cánh hoa màu hồng tươi, tạo nên vẻ đẹp quyến rũ và ngọt ngào.",
  },
];

const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Hoa lan là loài hoa đẹp với hình dáng độc đáo và màu sắc đa dạng như
            trắng, xanh, hồng, đỏ, và đốm. Chúng thường mọc thành chùm hoặc đơn
            lẻ, tượng trưng cho sự quý phái và tình yêu chân thành.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <Link
              to={`/product/${data.id}`}
              key={data.id}
              className="space-y-3"
              data-aos="zoom-in"
            >
              <div className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]">
                {/* image section */}
                <div className="h-[150px]">
                  <img
                    src={data.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  />
                </div>
                {/* details section */}
                <div className="p-4 text-center">
                  {/* star rating */}
                  <div className="w-full flex items-center justify-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                  </div>
                  <h1 className="text-xl font-bold">{data.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                    {data.description}
                  </p>
                  <button
                    className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                    onClick={handleOrderPopup}
                  >
                    Order Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
