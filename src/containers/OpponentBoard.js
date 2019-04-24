import React from 'react'

import OpponentTile from '../components/OpponentTile'

export default class OpponentBoard extends React.Component {

  createRow = (rowArray, rowNum) => {
    let colNum = 1
    return <div className="test-row">
      {rowArray.map( tile => this.props.selectedTile.x === colNum && this.props.selectedTile.y === rowNum
        ? <OpponentTile x={colNum++} y={rowNum} tile={tile} selectTile={this.props.selectTile} selected={true} /> 
        : <OpponentTile x={colNum++} y={rowNum} tile={tile} selectTile={this.props.selectTile}/>  
      )}
    </div>
  }

  createBoard = () => {
    let rowNum = 1
    return this.props.oBoard.map(row => this.createRow(row, rowNum++))
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    )
  }
}