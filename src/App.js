import React, { Fragment } from 'react'
import './App.css';
import {Home} from './pages/Home'
import {Rooms} from './pages/Rooms'
import {SingleRoom} from './pages/SingleRoom'

import {Route, Switch} from 'react-router-dom'
import {Error} from './pages/Error'

import {Navbar} from './components/Navbar'

function App() {
  return (
    <Fragment>
      <Navbar/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/rooms" exact component={Rooms}/>
      <Route path="/rooms/:slug" exact component={SingleRoom}/>
      <Route component={Error} />
      </Switch>
     
    </Fragment>
  );
}

export default App;
