import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://previews.123rf.com/images/nitr/nitr1701/nitr170100089/69298268-various-old-books-on-a-shelf-on-dark-background-banner.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            id="49538094"
            title="The Fault in our Stars Paperback – 3 January 2013 by John Green  (Author)"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51r27MDeQQL._SX324_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="The Book Thief (Definitions Young Adult)"
            price={199.99}
            rating={3}
            image="https://m.media-amazon.com/images/P/1909531618.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            id="23445930"
            title="To Kill A Mockingbird: 50th Anniversary Edition: 60th Anniversary Edition Paperback – Special Edition, 24 June 2010"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/P/0099549484.01._SCLZZZZZZZ_SX500_.jpg"
          />
          <Product
            id="3254354345"
            title="The Catcher in the Rye"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91LvoDqkF1L.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Set of 3 books- meluha, nagas, the oath of vayuputras (Shiva trilogy) "
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/610CJ-lw27L.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;