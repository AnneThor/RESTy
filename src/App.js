import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Home from './components/home/home.js';
import History from './components/history/history.js'
import Help from './pages/help/help.js'

import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      response: '',
      storage: [],
      reload: { method: '', url: '', body: '' },
      display: false,
    }
  }

  handleStorage = (method, url) => {
    let key = `${method}-${url}`;
    if (this.state.storage.find(value => value === key)) { return }
    var updStorage = this.state.storage.concat(key);
    this.setState({ ...this.state, storage: updStorage })
  }

  handleReload = async (method, url) => {
    let body = await localStorage.getItem(`${method}-${url}`);
    let reloadObj = { method: method, url: url, body: body }
    this.setState({ ...this.state, reload: reloadObj });
    this.setState({...this.state, display: true })
  }

  render() {

    return (
      <Router>
        <Header />
        <Route id="body" exact path="/resty">
          <Home key={this.state.url}
                url={this.state.reload.url}
                body={this.state.reload.body}
                display={this.state.display}
                method={this.state.reload.method}
                handleHistory={this.handleStorage}
                keyIndex={this.state.storage}
                />
         </Route>
         <Route exact path="/history">
          <History handleReload={this.handleReload} keyIndex={this.state.storage}/>
         </Route>
         <Route exact path="/help">
          <Help />
         </Route>
        <Footer />
      </Router>
    )
  }

}

export default App;
