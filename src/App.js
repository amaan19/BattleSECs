import React, { Component } from 'react';

import BoardTile from './components/BoardTile'
import { boardData } from './data'
import './App.css';

class App extends Component {
  state = {
    board: [],
  }

  componentDidMount() {
    this.setState({ board: boardData })
  }

  createRow = (rowArray) => {
    let key = 1
    return <div key={this.state.board.indexOf(rowArray)} className="test-row">
      {rowArray.map( cell => <BoardTile key={key++} ></BoardTile> )}
    </div>
  }

  render() {
    return (
      <div className="App">
        {this.state.board.map( this.createRow )}
      </div>
    );
  }
}

export default App;
