import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar'; // Import the SearchBar component

const ProductList = () => {
  const [products, setProducts] = useState([]); // State for all products
  const [searchQuery, setSearchQuery] = useState(''); // State for search query

  // Fetch products from the API
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  // Filter products based on the search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      {/* Search bar for filtering products */}
      <SearchBar onSearch={setSearchQuery} />

      {/* Display filtered products */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredProducts.map(product => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;