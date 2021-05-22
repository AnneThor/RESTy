import React from 'react';
import { Link } from 'react-router-dom'
import JSONPretty from 'react-json-prettify';
import {atelierSulphurpoolLight} from 'react-json-prettify/dist/themes';
import './historyItem.scss';

class HistoryItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  toggleShow = (e) => {
    let visibility = this.state.open ? false: true;
    this.setState({ ...this.state, open: visibility })
  }

  render() {

    return (
      <div id="history-item">
        <h2 onClick={this.toggleShow}>{this.props.method.toUpperCase()}: {this.props.url}</h2>
        {
          this.state.open &&
          <JSONPretty id="json-pretty"
                      json={this.props.body}
                      theme={atelierSulphurpoolLight} />
        }
        <Link onClick={() => this.props.reload(this.props.method, this.props.url)} to="/resty">RELOAD</Link>
      </div>
    )
  }

}

export default HistoryItem;
