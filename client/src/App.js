import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Profile from './Components/Profile';
import Register from './Components/Register';
//Redux
import {Provider} from 'react-redux';
import store from './store';
import Alert from './Components/Alert';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Navbar/>
      <Alert/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/profile" exact component={Profile}/>
      </Switch>
      <Footer/>
      </BrowserRouter>
     </Provider>
  );
}

export default App;
