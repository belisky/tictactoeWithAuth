import './Tile.css'
import React from 'react'

const Tile = ({chooseTile,val}) => {
    return (
        <div onClick= {chooseTile} className="tile">
            {val}
        </div>
    )
}

export default Tile
