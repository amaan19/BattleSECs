import React from 'react'

const dictionaryForImgs = {
  water: 'WATER',
  hit: 'HIT',
  hitShip: 'HIT-SHIP',
}

const BoardTile = ({ tile, x, y, selected, selectTile }) => {
  let category

  switch(true) {
    case !tile.hit:
      category = dictionaryForImgs.water
      break
    case tile.hit && !tile.sucessful:
      category = dictionaryForImgs.hit
      break
    case tile.hit && tile.sucessful:
      category = dictionaryForImgs.hitShip
      break
  }

  return (
    selected
    ? <div onClick={() => selectTile(x, y)} className="test">X</div>
    : <div onClick={() => selectTile(x, y)} className={"test " + category}>{category}</div>
  )
}

export default BoardTile