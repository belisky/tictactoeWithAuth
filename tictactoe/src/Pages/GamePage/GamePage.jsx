import React  from 'react'
import GamePageLogic from './GamePageLogic'
import './GamePage.css'
import { useNavigate } from 'react-router'
 

const GamePage = () => {
    const navigate=useNavigate();
    const {card,setBoard,setPlayer}=GamePageLogic();
    
    const quit=()=>{
        navigate("/gamehome/")
    }
    const reset=()=> {
        setBoard(["","","","","","","","",""]);
        setPlayer("O");
    }
    
    return (
        <div  >
             <div className="header">
                <input className="options--toggle" type="checkbox" id="options--toggle" />           
                <ul className="options__menu">
                    <li onClick={quit} className="options__list">Quit</li>
                    <li onClick={reset} className="options__list" >Restart</li>
                </ul>
                <label className="options--toggle--label" htmlFor="options--toggle">
                    <span ></span>
                </label>
                <div className="timer">
                    <p>Name of Player</p>
                </div>
             </div>
            <div className="game-board">
                <div className="Board">
                {
                    card()
                }
                    
                </div>
            </div>
        </div>
    )
}

export default GamePage
