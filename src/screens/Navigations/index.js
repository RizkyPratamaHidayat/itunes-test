import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Home from "../Home";
import List from "../List";
const Navigation = (props) => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/list" component={List} />
    </Router>
  );
};

export default Navigation;
