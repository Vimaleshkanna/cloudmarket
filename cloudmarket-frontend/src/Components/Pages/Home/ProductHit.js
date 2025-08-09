import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductHit({ hit }) {    
  return (
    <div style={{ border: '1px solid #ddd', padding: 12, borderRadius: 6 }}>
      <Link to={`/product/${hit.product_id}`}>
        <img src={hit.image_url} alt={hit.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
        <h3>{hit.name}</h3>
      </Link>
      <p>{hit.category}</p>
      <p>₹{hit.price}</p>
    </div>
  );
}
