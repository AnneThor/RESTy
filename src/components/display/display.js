import { Component } from 'react';

class Display extends Component {

  render() {
    return (
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
  }

}

export default Display;

/**

**/
