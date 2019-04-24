import React from 'react'

import OpponentBoard from './OpponentBoard';
import PlayaBoard from './PlayaBoard';
import { playaBoard, opponentBoard } from '../data'


export default class GameBoard extends React.Component {

  state = {
    playaBoard: [],
    opponentBoard: [],
    selectedTile: { x: null, y: null }
  }

  componentDidMount() {
    this.setState({ 
      playaBoard: playaBoard,
      opponentBoard: opponentBoard
    })
  }

  selectTile = (x, y) => {
    this.setState({selectedTile:{x: x, y:y}})
  }

  render() {
    const { playaBoard, opponentBoard, selectedTile } = this.state

    return (
      <div>
        <OpponentBoard 
          oBoard={opponentBoard}
          selectedTile={selectedTile}
          selectTile={this.selectTile}
        />
        <hr />
        <PlayaBoard 
          pBoard={playaBoard}
        />
      </div>
    )
  }
}