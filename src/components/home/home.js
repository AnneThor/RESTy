import React from 'react';
import axios from 'axios';

import Form from '../form/form.js'
import Input from '../input/input.js'
import Display from '../display/display.js'
import Sidebar from '../sidebar/sidebar.js'

import './home.scss';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      method: "get",
      url: "",
      display: false,
      response: '',
      body: ''
    }
  }

  handleRadioClick = (e) => {
    this.setState({ ...this.state, method: e.target.value })
  }

  handleUrlChange = (e) => {
    this.setState({ ...this.state, url: e.target.value });
  }

  handleUrlClick = (e) => {
    this.setState({ ...this.state, url: e.target.innerText });
  }

  handleBodyChange = (e) => {
    this.setState({ ...this.state, body: e.target.value });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    switch(false) {
      case (this.state.method === "get"):
        axios({
          method: this.state.method,
          url: this.state.url,
          data: JSON.parse(this.state.body)
        })
        .then(reply => {
          this.setState({ ...this.state, response: reply });
          this.setState({ ...this.state, display: true });
          this.setLocalStorage(this.state.method, this.state.url, reply);
        })
        .catch(err => {
          console.log(err, err.message);
        })
        break;
      default: //default is get
        axios({
          method: 'get',
          url: this.state.url,
        })
        .then(reply => {
          this.setState({ ...this.state, response: reply });
          this.setState({ ...this.state, display: true});
          this.setLocalStorage(this.state.method, this.state.url, reply)
        })
        .catch(err => {
          console.log(err, err.message);
        })
        break;
    }
  }

  setLocalStorage = async (method, url, reply) => {
    localStorage.setItem(`${method}-${url}`, JSON.stringify({
      method: this.state.method,
      url: this.state.url,
      reply: reply
    }))
    this.props.handleHistory(method, url);
  }

  render() {

    return (
      <div id="home">
          <Sidebar list={this.props.keyIndex} onClick={this.handleUrlClick} />
          <Form handleUrlChange={this.handleUrlChange}
                handleFormSubmit={this.handleFormSubmit}
                tempUrl={this.state.url}
                currMethod={this.state.method}
                handleRadioClick={this.handleRadioClick}/>
          {
            this.state.method !== 'get' &&
            <Input method={this.state.method}
                  body={this.state.body}
                  handleBodyChange={this.handleBodyChange}/>
          }

          <Display display={this.state.display}
                   method={this.state.method}
                   response={this.state.response}
                   url={this.state.url} />
      </div>
    )
  }

}

export default Home;
