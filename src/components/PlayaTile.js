import React from 'react'

const dictionaryForImgs = {
  water: 'water',
  ship: 'ship',
  hit: 'hit',
  hitShip: 'hit-ship',
}

const BoardTile = ({ tile }) => {
  let category

  switch(true) {
    case tile.hit && tile.ship:
      console.log("true true")
      category = dictionaryForImgs.hitShip
      break
    case tile.hit && !tile.ship:
      console.log("true false")
      category = dictionaryForImgs.hit
      break
    case !tile.hit && tile.ship:
      console.log("false true")
      category = dictionaryForImgs.ship
      break
    case !tile.hit && !tile.ship:
      console.log("false false")
      category = dictionaryForImgs.water
      break
  }

  return (
    <div  className={"test " + category}>{category}</div>
  )
}

export default BoardTile