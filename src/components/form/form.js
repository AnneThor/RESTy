import { Component } from 'react';
import RadioButton from '../radioButton/radioButton.js';

class Form extends Component {

  render() {
    return (
      <>
      <form onSubmit={this.props.handleFormSubmit}>
        <div>
          <label id="url-input-label" htmlFor="url">URL: </label>
          <input id="url-input" type="text" name="url"
                 placehor="Enter a valid url"
                 value={this.props.url} onChange={this.props.handleUrlChange}/>
          <button id="url-submit" type="submit" name="url" value="submit">Go!</button>
        </div>
        <div>
          <RadioButton method="get" click={this.props.handleRadioClick} />
          <RadioButton method="post" click={this.props.handleRadioClick} />
          <RadioButton method="put" click={this.props.handleRadioClick} />
          <RadioButton method="delete" click={this.props.handleRadioClick} />
        </div>
      </form>
      </>
    )
  }

}

export default Form;
