import { Component } from 'react';
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
        </div>
      )
  }

}


export default Header;
