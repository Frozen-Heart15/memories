import React,{Fragment} from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Login from './Components/Login';

import Navbar from './Components/Navbar';


function App() {
  return (
    <Fragment>
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route path="/login" exact component={Login}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
     </Fragment>
  );
}

export default App;
