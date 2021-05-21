import { Component } from 'react';
import RadioButton from '../radioButton/radioButton.js';
import './form.scss'

class Form extends Component {

  render() {
    return (
      <div id="form">
      <form onSubmit={this.props.handleFormSubmit}>
        <div id="form-url-input">
          <label id="url-input-label" htmlFor="url">URL: </label>
          <input id="url-input" type="text" name="url"
                 placehor="Enter a valid url"
                 value={this.props.tempUrl} onChange={this.props.handleUrlChange}/>
          <button id="url-submit" type="submit" name="url" value="submit">Go!</button>
        </div>
        <div id="radio-buttons">
          <RadioButton method="get" click={this.props.handleRadioClick} />
          <RadioButton method="post" click={this.props.handleRadioClick} />
          <RadioButton method="put" click={this.props.handleRadioClick} />
          <RadioButton method="delete" click={this.props.handleRadioClick} />
        </div>
      </form>
      </div>
    )
  }

}

export default Form;
