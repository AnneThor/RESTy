import React from 'react';
import HistoryItem from '../historyItem/historyItem.js'
import './history.scss';

class History extends React.Component {


  render() {

    console.log("key index", this.props.keyIndex);

    return (
      <div id="history">
        <h1>List of Sites Previously Visited</h1>
          {
              this.props.keyIndex.map( (key, index) => {
                let temp = JSON.parse(localStorage.getItem(key));
                return <HistoryItem key={index}
                                    method={temp.method}
                                    url={temp.url}
                                    body={temp.reply.data}
                                    reload={this.props.handleReload} />
              })
          }
      </div>
    )
  }

}

export default History;
