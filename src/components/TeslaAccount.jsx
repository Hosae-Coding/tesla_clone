import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './teslaAccount.css';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';
import Car from './Car';
import { auth } from '../firebase';

const TeslaAccount = ({ setIsMenuOpen, isMenuOpen }) => {
   const history = useHistory();
   const dispatch = useDispatch();
   const user = useSelector(selectUser);
   const logoutOfApp = () => {
      auth
         .signOut()
         .then(() => {
            dispatch(logout());
            history.push('/');
         })
         .catch((err) => alert(err.message));
   };
   return (
      <div className="teslaAccount">
         <div className="teslaAccount__header">
            <div className="teslaAccount__logo">
               <Link>
                  <img
                     src="https://assets.website-files.com/5e8fceb1c9af5c3915ec97a0/5ec2f037975ed372da9f6286_Tesla-Logo-PNG-HD.png"
                     alt=""
                  />
               </Link>
            </div>
            <div className="teslaAccount__links">
               <Link to="/teslaaccount">Model S</Link>
               <Link to="/teslaaccount">Model e</Link>
               <Link to="/teslaaccount">Model x</Link>
               <Link to="/teslaaccount">Model y</Link>
               <Link to="/teslaaccount">Solar Roof</Link>
               <Link to="/teslaaccount">Solar Panels</Link>
               <Link to="/teslaaccount">shop</Link>
               <Link to="/teslaaccount">Tesla Account</Link>
               <Link onClick={logoutOfApp}>Logout</Link>
               <div
                  className="teslaAccount__menu"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
               >
                  {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
               </div>
            </div>
         </div>
         <div className="teslaAccount__info">
            <div className="teslaAccount__person">
               <h4>{user?.displayName + "'s"}</h4>
            </div>
            <div className="teslaAccount__infoRight">
               <Link>Home</Link>
               <Link>Account</Link>
               <Link>History</Link>
               <Link onClick={logoutOfApp}>Sign Out</Link>
            </div>
         </div>
         <div className="teslaAccount__car">
            <Car
               imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-models@2x.jpg?20170815"
               model="model s"
               testDrive
            />
            <Car
               imgSrc="https://www.tesla.com/tesla_theme/assets/img/mytesla/v3/header-nocar-modelx@2x.jpg?20170815"
               model="model x"
            />
         </div>
      </div>
   );
};

export default TeslaAccount;
