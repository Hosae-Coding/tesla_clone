import Menu from './components/Menu';
import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HeaderBlock from './components/HeaderBlock';
import Login from './components/Login';

function App() {
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
                  <Login />
               </Route>
            </Switch>
         </div>
      </Router>
   );
}

export default App;
