import React from 'react'

import PlayaTile from '../components/PlayaTile'

export default class PlayaBoard extends React.Component {

  createRow = (rowArray) => {
    return <div className="test-row">
      {rowArray.map( tile => <PlayaTile tile={tile}/> )}
    </div>
  }

  createBoard = () => {
    return this.props.pBoard.map( this.createRow )
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    )
  }
}