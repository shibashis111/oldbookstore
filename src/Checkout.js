import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className="checkout">
          <div className="checkout__left">
              <img 
              className='checkout__ad'
              src="https://image.shutterstock.com/image-vector/banner-school-children-holding-reading-260nw-634763246.jpg"
              /> 
          <div>  
          <h3>Hello,{user?.email}</h3>
          <h2 className="checkout__title">Your
          ShoppingBasket </h2>
           
          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        

        </div>
    </div>
      
      <div className="checkout__right">
          <Subtotal />
      </div>
    </div>
    )
}

export default Checkout
