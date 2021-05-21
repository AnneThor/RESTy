import React from 'react'
import './history.scss';

class History extends React.Component {


  render() {

    console.log("key index", this.props.keyIndex);

    return (
      <div id="history">
        <h1>List of Sites Previously Visited</h1>
        <ul>
          {
              this.props.keyIndex.map( (key, index) => {
                let temp = JSON.parse(localStorage.getItem(key));
                return <li key={index}>{temp.method} {temp.url}</li>
            })
          }
        </ul>
      </div>
    )
  }

}

export default History;
