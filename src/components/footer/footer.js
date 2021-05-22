import { Component } from 'react';
import './footer.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return (
          <footer id="footer">&copy; Anne Thorsteinson, 2021</footer>
      )
  }

}


export default Footer;
