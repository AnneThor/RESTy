import { Component } from 'react';
import JSONPretty from 'react-json-prettify';
import {atelierSulphurpoolLight} from 'react-json-prettify/dist/themes';
import './display.scss';

class Display extends Component {

  render() {

    const count = (this.props.response && this.props.response.data && this.props.response.data.count) ? {count: this.props.response.data.count} : null;
    const displayCount = !count ? null : (
      <>
        <p>Count: </p>
        <JSONPretty id="json-pretty" json={count} theme={atelierSulphurpoolLight} />
      </>
    )

    const headers = { headers : this.props.response.headers }
    const data = { body: this.props.response.data }

    let display = !this.props.display ? null :
      (<>
        <div id="display-headers">
          <p>Method: {this.props.method}</p>
          <p>URL: {this.props.url}</p>
        </div>
        <div id="display-results">
          <p>Headers:</p>
            <JSONPretty id="json-pretty" json={headers} theme={atelierSulphurpoolLight} />
          {displayCount}
          <p>Response:</p>
            <JSONPretty id="json-pretty" json={data} theme={atelierSulphurpoolLight} />
        </div>
      </>
      )

    return (
      <div id="display">
        {display}
      </div>
    )
  }

}

export default Display;
