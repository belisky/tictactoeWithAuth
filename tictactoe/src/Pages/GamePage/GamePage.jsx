import React,{useState} from 'react'
import Tile from '../../Components/Tile/Tile'
import './GamePage.css'
import { Patterns } from '../../Components/Patterns/Patterns'
 

const GamePage = () => {
    const [board,setBoard]=useState(["","","","","","","","",""]);
    const [player,setPlayer]=useState("O");
    const [result,setResult]=useState({winner:"none",state:"won"})

   
    useEffect(()=>{
        checkWin();
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
        }
       
    },[result])


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
            let foundWinner=true
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
    
    const checkIfTile =()=> {
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

    const card=()=> {
        let tiles=[]
        
            for (let i= 0;i <= 8;i++){
                tiles.push(<Tile val={board[i]} chooseTile={ ()=>chooseTile(i)} key={i}  />)          
            
        }
        return tiles
       
    }
    return (
        <div className="Board">
           {
               card()
           }
            
        </div>
    )
}

export default GamePage
