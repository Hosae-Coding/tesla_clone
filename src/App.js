import Menu from './components/Menu';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Redirect,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderBlock from './components/HeaderBlock';
import Login from './components/Login';
import { selectUser } from './features/userSlice';
import Signup from './components/Signup';

function App() {
   const user = useSelector(selectUser);
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <Router>
         <div className="App">
            <Switch>
               <Route exact path="/">
                  <Header
                     isMenuOpen={isMenuOpen}
                     setIsMenuOpen={setIsMenuOpen}
                  />
                  {isMenuOpen && <Menu />}
                  <HeaderBlock />
               </Route>
               <Route exact path="/login">
                  {user ? <Redirect to="/teslaaccount" /> : <Login />}
                  <Login />
               </Route>
               <Route exact path="/signup">
                  <Signup />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
