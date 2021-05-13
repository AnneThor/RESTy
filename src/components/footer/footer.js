import { Component } from 'react';
import './footer.scss';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return (
        <div id="footer">
          <p>&copy; Anne Thorsteinson, 2021</p>
        </div>
      )
  }

}


export default Footer;
