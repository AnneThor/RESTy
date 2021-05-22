import { Component } from 'react';
import './input.scss';

class Input extends Component {

  render() {

    return (
      <div id="input">
        <label id="http-req-body" htmlFor="http-req-body">{this.props.method.toUpperCase()} Request Body: </label>
        <textarea id="req-body" type="textarea" name="body"
               placeholder="Enter the body you would like to send with your HTTP Request. Must be in object format, ex: { firstName: 'John', lastName: 'Doe' }"
               value={this.props.body} onChange={this.props.handleBodyChange} />
      </div>
    )
  }

}

export default Input;
