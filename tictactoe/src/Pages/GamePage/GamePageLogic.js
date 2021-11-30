import React,{useState,useEffect } from 'react'

import Tile from '../../Components/Tile/Tile'
 
import { Patterns } from '../../Components/Patterns/Patterns'

const GamePageLogic = () => {
    const [board,setBoard]=useState(["","","","","","","","",""]);
    const [player,setPlayer]=useState("O");
    const [result,setResult]=useState({winner:"none",state:"none"})
   

   
    useEffect(()=>{
        checkWin();
        checkIfTie();
        
        if (player==="X"){
            setPlayer("O");
        }
        else {
            setPlayer("X");
        }
        },[board]);

    useEffect(()=>{
       
        if (result.state!=="none"){
            alert(`Game Over! Winner is: ${result.winner}`);
            restartGame(); 
        }
       

       
    },[result]);


    const chooseTile = (tile) => {
        setBoard((board)=>board.map((val,idx)=>{
            if (idx===tile && val=== ""){
                return  player;
            }
            return val;
        }))
       
    };

    const checkWin =()=> {
        Patterns.forEach((currPattern)=>{
            const firstPlayer=board[currPattern[0]];
            if (firstPlayer==="")return;
            let foundWinner=true; 
            currPattern.forEach((idx)=>{
                if(board[idx]!== firstPlayer) {
                    foundWinner=false
                }
            })
            if (foundWinner){
                setResult({winner:player,state:"won"});
            }
        })
    }
    
    const checkIfTie =()=> {
        let filled = true;
        board.forEach((tile)=> {
            if (tile===""){
                filled=false;
            }
        })
        if(filled ) {
            setResult({winner:"No One",state:"Tie"})
        }

    }

    const restartGame = ()=>{
        setBoard(["","","","","","","","",""]);
        setPlayer("O");
    }

    const card=()=> {
        let tiles=[]
        
            for (let i= 0;i <= 8;i++){
                tiles.push(<Tile val={board[i]} chooseTile={()=> chooseTile(i)} key={i}  />)          
            
        }
        return tiles
       
    } 

    return {card}
}

export default GamePageLogic
