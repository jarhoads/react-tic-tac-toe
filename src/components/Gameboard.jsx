const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function Gameboard() {
  return (
    <ol id='game-board'>
        {initialGameBoard.map((row, idx) => <li key={idx}>
            <ol>
                {row.map((playerSymbol, colIdx) => 
                    (<li key={colIdx}>
                        <button>{playerSymbol}</button>
                    </li>)                    
                )}
            </ol>
        </li> )}
    </ol>
  )
}