import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';



const OrderReview = () => {

  const[products]=useProducts()
  const [cart]=useCart(products)

    return (
        <div>
            <h2>This is Order Review</h2>
            <p>{products.length}</p>
            <h3>{cart.length}</h3>
        </div>
    );
};

export default OrderReview;