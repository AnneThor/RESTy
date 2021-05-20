import { Component } from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import './header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return (
        <div id="header">
          <h1>RESTy</h1>
          <ul>
            <li>Home</li>
            <li>History</li>
          </ul>
        </div>
      )
  }

}


export default Header;
