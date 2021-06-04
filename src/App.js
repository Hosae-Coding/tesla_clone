import Menu from './components/Menu';
import React, { useState } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';

function App() {
   const [isMenuOpen, setIsMenuOpen] = useState(false);
   return (
      <Router>
         <div className="App">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
         </div>
      </Router>
   );
}

export default App;
