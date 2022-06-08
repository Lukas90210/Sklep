import "./App.scss"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from "../Home/Home";
import Demo from "../Demo/Demo";
import React from "react";


const RouterComponent = () => (
   <Router>
       <Switch>
         <Route path="/" exact component={Home} />
         <Route path="/Demo" exact component={Demo} />
       </Switch>
   </Router>
);

export default RouterComponent;
