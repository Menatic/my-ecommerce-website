import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

const Recommendations = ({ productId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios.get(`/api/recommendations/${productId}`)
      .then(response => setRecommendations(response.data))
      .catch(error => console.error(error));
  }, [productId]);

  return (
    <div className="mt-4">
      <h4>Recommended Products</h4>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recommendations.map(product => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;