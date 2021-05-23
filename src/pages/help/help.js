import React from 'react';
import ReactMarkdown from 'react-markdown';
import HelpDocs from './Help.md'
import './help.scss';

class Help extends React.Component {

  constructor(props) {
    super(props)
    this.state = { help: null }
  }

  componentDidMount() {
    fetch(HelpDocs)
      .then(res => res.text())
      .then(text => {
        this.setState({ help: text })
      })
  }

  render() {

    return (
      <div id="help">
        <ReactMarkdown children={this.state.help} />
      </div>
    )
  }

}

export default Help;
