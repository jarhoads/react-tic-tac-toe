

export default function Gameboard({onSelectSquare, board}) {

    // // derive gameboard state from turns state
    // let gameBoard = initialGameBoard;
    // for (const turn of turns) {
    //     const {square, player} = turn;
    //     const {row, col} = square;
    //     gameBoard[row][col] = player;
    // }
    
    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleSelectSquare(rowIdx, colIdx) {
    //     setGameBoard((prevGameBoard) => {
    //       // this is NOT recommended
    //       // should not mutate reference values directly
    //       // instead make an update and return a copy
    //       // update should be immutable
    //       // prevGameBoard[rowIdx][colIdx] = 'X';
    //       // return prevGameBoard;
    //       const updatedBoard = [
    //         ...prevGameBoard.map((innerArray) => [...innerArray]),
    //       ];
    //       updatedBoard[rowIdx][colIdx] = activePlayerSymbol;
    //       return updatedBoard;
    //     });

    //     onSelectSquare();   
    // }

  return (
    <ol id="game-board">
      {board.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerSymbol, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => onSelectSquare(rowIdx, colIdx)} 
                        disabled={playerSymbol !== null}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}