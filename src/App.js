import React, { useEffect } from "react";
import "./App.css";
import Header from './header';
import Home from "./Home";
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from './Payment';
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Welcome from './Welcome';
import Signup from './Signup';
import Oldbook from './Oldbook';

const promise = loadStripe(
  "pk_test_51IsnVZSJfINyGMG1ZmNPO2f8lKLtqUVzReeYZ4mnbCBfxnCQQfXX952WrisicXkOftkwyap8ytoWEZQ9nTXe2ltG00B8dwH85S"
);

function App() {
      const   [{}, dispatch] = useStateValue();        

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
        
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

return (
  <Router>
     <div className="app">
      <Switch>
       <Route path="/orders" exact>
        <Header />
         <Orders />
         </Route>
       <Route path="/login" exact>
         <Login />
       </Route>
       <Route path="/signup" exact>
         <Signup />
       </Route>
       <Route path="/oldbook" exact>
         <Oldbook />
       </Route>
       <Route path="/checkout" exact>
         <Header />
         <Checkout />
         </Route>
         <Route path="/payment" exact>
            <Header />
            <Elements stripe={promise}>
            <Payment />
            </Elements>
          </Route>
           <Route path="/" exact>
             <Welcome />
           </Route>
         <Route path="/home" exact>
          <Header />
          <Home />
          </Route>
        </Switch>
     </div>
  </Router>
);
}
export default App;