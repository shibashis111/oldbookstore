import React from 'react'
import "./Welcome.css";
import {Link} from "react-router-dom";

function Welcome() {
    return (
        <div>
              <div className="home__container">
        <img
          className="welcome__image"
          src="https://thumbs.dreamstime.com/b/bookshelf-background-d-quality-render-65434293.jpg"
        />
        </div>
        <div className="tittle">
             <strong>welcome to,</strong>
            <h1>Oldbook Store</h1>
        </div>
        <div className="button">
        <Link to="/home" className="btn">Go to Home</Link>
        </div>
        <div className="gudu">
        <Link to="/login" className="guduu">Sign In </Link>
        </div>
        </div>
    )
}

export default Welcome
