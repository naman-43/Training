import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Market from './components/market';
import Portfolio from './components/portfolio';
import Sell from './components/sell';
import Buy from './components/buy';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/market" component={Market} />
          
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/buy" component={Buy} />
          <Route path="/sell" component={Sell} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
