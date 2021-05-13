import React from 'react';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js'
import Display from './components/display/display.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: "",
      url: "",
      display: false
    }
  }

  handleRadioClick = (e) => {
    this.setState({ ...this.state, method: e.target.value })
  }

  handleUrlChange = (e) => {
    this.setState({ ...this.state, url: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, display: true});
  }


  render() {

    const display = this.state.display ?
      (<Display method={this.state.method} url={this.state.url} />) : null;

    return (
      <>
        <Header />
        <Form handleUrlChange={this.handleUrlChange}
              handleFormSubmit={this.handleFormSubmit}
              tempUrl={this.state.url}
              handleRadioClick={this.handleRadioClick}/>
        {display}
        <Footer />
      </>
    )
  }


}

export default App;
