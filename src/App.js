import React from 'react';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Home from './pages/Home';
import Rooms from './pages/Rooms';

import {Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
      
    </>
  );
}

export default App;
