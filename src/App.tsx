import React, { FC } from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './page/about';
import Home from './page/home';
import Products from './page/products';
import Contacts from './page/contacts';
import { Header } from './components/header/header';

const App: FC = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contacts">
          <Contacts />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>    
  );
};

export default App;
