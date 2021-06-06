import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import LanguageOutlined from '@material-ui/icons/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const signIn = (e) => {
      e.preventDefault();
   };
   return (
      <div className="login">
         <div className="login__header">
            <div className="login__logo">
               <Link>
                  <img
                     src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                     alt=""
                  />
               </Link>
            </div>
            <div className="login__language">
               <LanguageOutlined /> <span>en-US</span>
            </div>
         </div>
         <div className="login__info">
            <h1>Sign In</h1>
            <form className="login__form">
               <label htmlFor="email">Email Address</label>
               <input
                  type="email"
                  id="email"
                  value={email}
                  onClick={(e) => setEmail(e.target.value)}
               />
               <label htmlFor="">Password</label>{' '}
               <input
                  type="password"
                  id="password"
                  value={password}
                  onClick={(e) => setPassword(e.target.value)}
               />
               <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
            </form>
            <div className="login__divider">
               <hr /> <span>OR</span> <hr />
            </div>
            <Link to="/signin">
               <ButtonSecondary name="create account" />
            </Link>
         </div>
      </div>
   );
};

export default Login;
