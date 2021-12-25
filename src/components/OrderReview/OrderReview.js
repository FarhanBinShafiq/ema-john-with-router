import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import {clearTheCart, removeFromDb} from '../../utilities/fakedb'
import {useNavigate} from 'react-router-dom';



const OrderReview = (props) => {

  const[products]=useProducts()
  const [cart,setCart]=useCart(products)
  const navigate= useNavigate();

  const handleRemove=key=>{
    const newCart=cart.filter(product=>product.key!==key)
    setCart(newCart);
    removeFromDb(key)
  }

  const handlePlaceOrder=()=>{
   navigate('/placeorder')
   setCart();
   clearTheCart();
  }

    return (
       <div className="shop-container">
       
        <div className="product-container">
           {
              cart.map(product=><ReviewItem 
               key={product.key}
               handleRemove={handleRemove}
               product={product}></ReviewItem>)
           }
        </div>
       
        <div className="cart-conatiner">
           <Cart cart={cart}>
              <button onClick={handlePlaceOrder} className='btn-regular'>Place Your Order</button>
           </Cart>
        </div>
       

       </div>
    );
};

export default OrderReview;