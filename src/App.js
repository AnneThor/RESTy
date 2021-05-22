import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import History from './components/history/history.js'

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: '',
      storage: [],
    }
  }

  handleStorage = (method, url) => {
    let key = `${method}-${url}`;
    if (this.state.storage.find(value => value === key)) { return }
    var updStorage = this.state.storage.concat(key);
    this.setState({ ...this.state, storage: updStorage })
  }

  render() {

    return (
      <Router>
        <Header />
        <Route id="body" path="/">
          <Home handleHistory={this.handleStorage} keyIndex={this.state.storage}/>
         </Route>
         <Route exact path="/history">
          <History keyIndex={this.state.storage}/>
         </Route>
        <Footer />
      </Router>
    )
  }

}

export default App;
