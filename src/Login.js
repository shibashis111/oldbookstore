import React,{ useState } from 'react'
import './Login.css'
import { Link,useHistory } from "react-router-dom";
import  { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
        .signInWithEmailAndPassword(email, password)
        .then((auth) => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
         
    const register = e => {
        e.preventDefault();

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            // it successfully created a new user with email and password
            if (auth) {
                history.push('/')
           }
        })
        .catch(error => alert(error.message))

    }
    return (
        <div className="login">
           <Link to='/'>
              <img className="login__logo"
                src='https://i.pinimg.com/originals/dd/64/da/dd64da585bc57cb05e5fd4d8ce873f57.png'
                />
                </Link> 

                <div className="login__container">
                  <h1>Sign-in</h1>

                  <form className="formm">
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange=
                             {e => setEmail(e.target.value)} />

                         <h5>Password</h5>
                         <input type='password' value={password}
                          onChange={e => setPassword(e.target.value)} />

                         <button type='submit' onClick={signIn} className="login__signInButton">Sign In</button> 
                     </form>

                     <p>
                     By signing-in you agree to the Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                   </p>
                   <button  onClick={e => history.push('/signup')} className='login__registerButton'>Click here to create account</button>

           </div>
        </div>
    )
}

export default Login
