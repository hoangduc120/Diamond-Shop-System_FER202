import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoMdSearch } from 'react-icons/io';
import ProductsData from '../DetailProductData/ProductsData';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [enterPressed, setEnterPressed] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setEnterPressed(false);
  };

  useEffect(() => {
    if (searchQuery && !enterPressed) {
      const results = ProductsData.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, enterPressed]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setEnterPressed(true);
      navigate('/search-results', { state: { searchResults } });
    }
  };

  return (
    <div className="relative group hidden sm:block">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearchChange}
        onKeyDown={handleKeyDown}
        className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800"
      />
      <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
      {searchResults.length > 0 && (
        <div className="absolute top-full mt-1 w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg z-50">
          {searchResults.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {product.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
