import { Component } from 'react';
import './display.scss';

class Display extends Component {

  render() {

    let display = !this.props.display ? null :
      (
        <table>
          <tbody>
              <tr>
                <th>Method</th>
                <th>URL</th>
              </tr>
              <tr>
                <td>{this.props.method}</td>
                <td>{this.props.url}</td>
              </tr>
          </tbody>
        </table>
      )

    return (
      <div id="display">
        {display}
      </div>
    )
  }

}

export default Display;
