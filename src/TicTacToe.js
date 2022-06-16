import { useState } from "react";
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

export function TicTacToe() {
  return (
  <div>
    <h1>Fun Game</h1>
    <Board />
  </div>
  )
}


function Gamebox({ent, onPlayerClick}){
  // const[ent, setEnt] = useState("")
  const c1 = {
    color: ent==="X" ? "green" : "red"
  };
  return(
      <div 
        style={c1} 
        onClick={onPlayerClick} 
        className="gamebox" >
          {ent}
      </div>
  ) 
}

function Board(){
  const [board, setBoard]= useState([
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null, 
    null
  ])

  const decideWinner = (board) =>{
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let i = 0; i < lines.length; i++) {
     const[a,b,c] =lines[i];
     
     if(board[a] != null && board[a] == board[b] && board[b] == board[c]){
      console.log(lines[i], a,b,c);
      console.log(board);
      console.log("winner", board[a] );
      return board[a];
     }
    }
    return null;
  };

  const winner = decideWinner(board);

  const[isxturn, setIsxturn]=useState(true);

  const handleClick = (index) =>{
    console.log(index);
    if(board[index]===null && winner==null){
      const boardcopy = [...board];
      boardcopy[index]= isxturn ? "X" : "O";
      setBoard(boardcopy);
      setIsxturn(!isxturn);
    }
  }

  const restart =() =>{
    setIsxturn(true);
    setBoard([null,null,null,null,null,null,null,null,null]);
  }

  const { width, height } = useWindowSize()

  const styles = {
    color: isxturn ? "green" : "red"
  }

  return (
    <div>
      {winner==null ? null : <Confetti width={width}height={height} gravity={0.02} />}
      {isxturn ? <h2 style={styles}>It's player X turn</h2> : <h2 style={styles}>It's player O turn</h2>}
      <div className="board">
        {board.map((ele,index) => <Gamebox ent={ele} onPlayerClick={()=>handleClick(index)} />)}
        {winner==null ? null : <h2>Winner is: {winner}</h2>}
      </div>
      <button onClick={restart}>Restart</button>
    </div>
  )
}