import React,{ useState } from 'react'
import { Link,useHistory } from "react-router-dom";
import  { auth } from "./firebase";
import './signup.css';

function Signup() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
      
    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/home')
           }
        })
        .catch(error => alert(error.message))
    }


    return (
        <div>
            <div className="login">
           <Link to='/'>
              <img className="login__logo"
                src='https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png'
                />
                </Link> 

                <div className="login__container">
                  <h1>Sign-Up</h1>

                  <form>
                       <h5>Enter your Name </h5>
                       <input type='text'></input>

                        <h5>Enter your E-mail</h5>
                        <input type='text' value={email} onChange=
                             {e => setEmail(e.target.value)} />

                         <h5>create a Password</h5>
                         <input type='password' value={password}
                          onChange={e => setPassword(e.target.value)} />
                          
                          <h5>Gender</h5>
                          <small className="subtotal__gif">
                           <input type="checkbox" />Male
                          </small>
                                      
                         <small className="subtotal__git">
                         <input type="checkbox" />      Female
                          </small>
                             
            
                          <h5>Nationality</h5>
                       <input type='text' placeholder='e.g Indian,American'></input>



                        
                     </form>

                     <p>
                     By signing-up you agree to the Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                   </p>
                   <button  onClick={register} className='login__registerButton'>Create your account</button>

           </div>
        </div>
    )

        </div>
    )
}

export default Signup
