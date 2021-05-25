import { Component } from 'react';
import { Link } from 'react-router-dom'
import './header.scss';

class Header extends Component {

  render() {
      return (
        <div id="header">
          <h1><Link to="/resty">RESTy</Link></h1>
          <ul>
            <li><Link data-testid="home" to="/resty">Home</Link></li>
            <li><Link to="/history">History</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
      )
  }

}

export default Header;
