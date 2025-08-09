import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {algoliasearch} from 'algoliasearch';
import { ALGOLIA_APP_NAME, ALGOLIA_SEARCH_API_KEY } from '../../../config/api';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const searchClient = algoliasearch(ALGOLIA_APP_NAME, ALGOLIA_SEARCH_API_KEY);
  const index = searchClient.initIndex('products');

  useEffect(() => {
    index.getObject(id)
      .then(setProduct)
      .catch(console.error);
  }, [id]);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <div className="spinner-border text-primary" role="status"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left image column */}
        <div className="col-md-5">
          <img
            src={product.image_url}
            alt={product.name}
            className="img-fluid rounded shadow-sm"
          />
        </div>

        {/* Right details column */}
        <div className="col-md-7">
          <h2 className="mb-3">{product.name}</h2>
          <p className="text-muted">{product.category}</p>
          <h4 className="text-success mb-3">₹{product.price}</h4>
          <p>{product.description || 'No description available.'}</p>
          <button className="btn btn-primary me-2">Add to Cart</button>
          <button className="btn btn-outline-secondary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
