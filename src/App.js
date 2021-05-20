import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js'
import Display from './components/display/display.js'

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: "get",
      url: "",
      display: false,
      response: ''
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
    switch(this.state.method) {
      case 'delete':
        console.log("delete");
        break;
      case 'post':
        console.log("post");
        break;
      case 'put':
        console.log("put");
        break;
      default: //default is get
        axios({
          method: 'get',
          url: this.state.url,
        })
        .then(reply => {
          this.setState({ ...this.state, response: reply });
          this.setState({ ...this.state, display: true});
        })
        break;
    }
  }

  render() {

    return (
      <>
        <Header />
        <div id="body">
          <Form handleUrlChange={this.handleUrlChange}
                handleFormSubmit={this.handleFormSubmit}
                tempUrl={this.state.url}
                currMethod={this.state.method}
                handleRadioClick={this.handleRadioClick}/>
          <Display display={this.state.display}
                   method={this.state.method}
                   response={this.state.response}
                   url={this.state.url} />
        </div>
        <Footer />
      </>
    )
  }


}

export default App;
