import logo from './logo.svg';
import './App.css';
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import NavBar from "./component/NavBar"
import Form from "./component/Form"
import Counter from "./component/Counter"
import Home from "./component/Home"
import FriendsFinal from './component/Friends/FriendsFinal';

import SearchResultContainer from './component/Giphy/SearchResultContainer';

function App() {
  return (
    <Router>
      <div className="App">

        <NavBar />
        <Route exact path="/Giphy" component={SearchResultContainer} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/Form" component={Form} />
        <Route exact path="/Counter" component={Counter} />
        <Route exact path="/friend" component={FriendsFinal} />
      </div>
    </Router>
  );
}

export default App;
