import React from 'react'
import './GameHome.css'

const GameHome = () => {
    return (
        <div className="main">
            <nav className="Nav">
                 <ul className="Nav__list">
                      <label  className="Nav__item--leader Nav__item">LeaderBoard</label>
                      <label className="Nav__item--play Nav__item">Play</label>
                 </ul>
            </nav>
            <div className="leader-board">
                <h3 className="leader-board__title">
                    Top 2 players
                </h3>
                <p>player Name</p>
                <p>Player Name</p>
            </div>
            <div className="player">
                <label>Name</label>
                <input type="text" />
                <button>Play</button>
            </div>
            <div className="fun">
                 <p className="fun__item--medium">Tic</p>
                 <p className="fun__item--large">Tac</p>
                 <p className="fun__item--small">Toe</p>
                 <p>Click on Play to continue!!!</p>
            </div>
            
        </div>
    )
}

export default GameHome
