import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const SearchResults = () => {
  const location = useLocation();
  const { searchResults } = location.state || { searchResults: [] };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-2xl font-bold mb-4">Search Results</h1>
      {searchResults.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {searchResults.map((product) => (
            <div key={product.id} className="border rounded-lg p-4">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <Link
                to={`/product/${product.id}`}
                className="text-primary hover:underline mt-2 inline-block"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
