import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from 'react';
import { BsCartX } from "react-icons/bs";
import { MdClose, } from "react-icons/md";
import { makePaymentRequest } from '../../Utils/api';
import { Context } from '../../Utils/context';
import "./Cart.scss";
import { CartItem } from './CartItem/CartItem';
 
export const Cart = ({setShowCart}) => {
  const { cartItems, cartSubTotal } = useContext(Context);

    const stripePromise =  loadStripe(`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };
  return (
    <div className='cart-panel'>
      <div className="opac-layer">
      
      </div>
      <div className="cart-content">
         <div className="cart-header">
            <span className="heading">Shopping Cart</span>
            <span className="close-btn" onClick={()=>setShowCart(false)}>
               <MdClose/>
              <span className="text">Close</span>
            </span>
         </div>
         {!cartItems?.length && 
         <div className="empty-cart">
          <BsCartX/>
          <span>No Products in the cart</span>
          <button className='return-cta'>Return To Shop</button>
         </div> }
        {!!cartItems?.length && <>
         <CartItem/>
         <div className="cart-footer">
          <div className="subtotal">
            <span className="text">Subtotal:</span>
            <span className="text total">&#x9F3;{cartSubTotal}</span>
          </div>
          <div className="button">
            <button className='checkout-cta' onClick={handlePayment}>Checkout</button>
          </div>
         </div>
         </>}
         
        </div>
    </div>
  )
}


