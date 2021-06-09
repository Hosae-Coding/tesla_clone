import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './signup.css';
import { Link, useHistory } from 'react-router-dom';
import LanguageOutlined from '@material-ui/icons/LanguageOutlined';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import { auth } from '../firebase';
import { login } from '../features/userSlice';

const Signup = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [fName, setFName] = useState('');
   const [lName, setLName] = useState('');
   const dispatch = useDispatch();
   const history = useHistory();

   const signUp = (e) => {
      e.preventDefault();

      if (!fName) {
         return alert('Please enter a First Name');
      }
      if (!lName) {
         return alert('Please enter a Last Name');
      }

      auth.createUserWithEmailAndPassword(email.password).then((userAuth) => {
         userAuth.user
            .updateProfile({
               displayName: fName,
            })
            .then(() => {
               dispatch(
                  login({
                     email: userAuth.user.email,
                     uid: userAuth.user.Uid,
                     displayName: fName,
                  })
               );
               history.push('/teslaaccount');
            })
            .catch((err) => alert(err.message));
      });
   };
   return (
      <div className="signup">
         <div className="signup">
            <div className="signup__header">
               <div className="signup__logo">
                  <Link>
                     <img
                        src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                        alt=""
                     />
                  </Link>
               </div>
               <div className="signup__language">
                  <LanguageOutlined /> <span>en-US</span>
               </div>
            </div>
            <div className="signup__info">
               <h1>Sign In</h1>
               <form className="signup__form">
                  <label htmlFor="fname">First Name</label>
                  <input
                     type="text"
                     id="fName"
                     value={fName}
                     onClick={(e) => setFName(e.target.value)}
                  />
                  <label htmlFor="email">Last Name</label>
                  <input
                     type="text"
                     id="lName"
                     value={lName}
                     onClick={(e) => setLName(e.target.value)}
                  />
                  <label htmlFor="email">E-mail adress</label>
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
                  <ButtonPrimary
                     name="Create account"
                     type="submit"
                     onClick={signUp}
                  />
               </form>
               <div className="signup__divider">
                  <hr /> <span>OR</span> <hr />
               </div>
               <Link to="/login">
                  <ButtonSecondary name="Sign in" />
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Signup;
