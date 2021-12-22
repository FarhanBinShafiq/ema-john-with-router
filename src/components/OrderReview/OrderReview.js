import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';



const OrderReview = () => {

  const[products]=useProducts()
  const [cart]=useCart(products)

    return (
       <div className="shop-container">
       
        <div className="product-container">
            <h2>This is Order Review</h2>
            <p>{products.length}</p>
            <h3>{cart.length}</h3>
        </div>
       
        <div className="cart-conatiner">
           <Cart cart={cart}></Cart>
        </div>
       

       </div>
    );
};

export default OrderReview;