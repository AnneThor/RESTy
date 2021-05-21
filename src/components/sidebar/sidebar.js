import { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {

  render() {

    return (
      <div id="sidebar">
        <h1>Previous Searches</h1>
          <ul>
            {
              this.props.list.map((item, index) => {
                let method = item.substring(0, item.indexOf('-'));
                let url = item.substring(item.indexOf('-')+1);
                return <li key={index} onClick={this.props.onClick}>{method} {url}</li>
              })
            }
        </ul>
      </div>
    )
  }

}

export default Sidebar;
