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

    const headers = this.props.response ? { headers : this.props.response.headers } : null
    const data = this.props.response ? { body: this.props.response.data } : null

    let display = !this.props.display ? null :
      (<>
        <div id="display-headers">
          <p data-testid="method">Method: {this.props.method}</p>
          <p>URL: {this.props.url}</p>
        </div>
        <div data-testid="json" id="display-results">
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
