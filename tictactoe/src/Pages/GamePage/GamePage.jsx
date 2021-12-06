import React  from 'react'
import GamePageLogic from './GamePageLogic'
import './GamePage.css'
import { useNavigate } from 'react-router'
import {signOut } from '@firebase/auth'
import { auth } from '../../Config/firebase-config'
 

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
    const logout=async()=>{
        try{
            await signOut(auth);
            navigate("/")
        } catch(error) {
            console.log(error.message);
        }

    }
    
    return (
        <div  >
             <div className="header">
                <input className="options--toggle" type="checkbox" id="options--toggle" />           
                <ul className="options__menu">
                    <li onClick={quit} className="options__list">Quit</li>
                    <li onClick={reset} className="options__list" >Restart</li>
                    <li onClick={logout} className="options__list" >Logout</li>
                </ul>
               
                <div className="timer">
                    <p>Name of Player</p>
                </div>
                <label className="options--toggle--label" htmlFor="options--toggle">
                    <span ></span>
                </label>
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
