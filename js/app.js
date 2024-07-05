/*-------------------------------- Constants --------------------------------*/



    
 //*---------------------------- Variables (state) ----------------------------*/
let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.getElementById('message');

/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board=[
      '','','',
      '','','',
      '','',''
    ]
    turn='X',
    winner= false;
    tie = false;
    render();    
}

const updateBoard = () => {
    board.forEach((square, index) => {
        squareEls[index].textContent = square;
    });
}
const render = () => {
    updateBoard();
    updateMessage();
}

const updateMessage = () => {
    if (!winner && !tie) {
        messageEl.textContent = `It's ${turn}'s turn.`;
    } else if (!winner && tie) {
        messageEl.textContent = `It's a tie!`;
    } else {
        messageEl.textContent = `Congratulations, ${turn} has won!`;
    }
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], 
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6], 
    // and so on
  ]
  
  const handleClick = (squareIndex) =>{
    if (winner === true || tie === true) {
     } else if (squareIndex.target.innerText === "") {
            placePiece(squareIndex.target.id);
            checkForWinner ();
            checkForTie();
            switchPlayerTurn();
            render();
        } else if(squareIndex.target.innerText == ""){
    return;
}
    }
   
const placePiece =(index) => {
    squareEls[index].innerText =turn;
    board[index] = turn;
    console.log(placePiece);
 }
 

const checkForWinner = () => {
}

//     winningCombos.forEach((array)) => {
//         array.forEach((element)) =>{
//             console.log(board[element]);

//         }
//     }
// }

const checkForTie =() => {
    if (winner === true){
        return
    } else if (board.includes("")){
        return
    } else {
        tie =true;
    }
}

const switchPlayerTurn = ( )=> {
   if (winner === true){
    return
   } else if (turn ==='X'){
    turn = '0'
   } else if (turn === '0') {
    turn = 'X'
   }
}

init();
/*----------------------------- Event Listeners -----------------------------*/
document.querySelector(".board").addEventListener("click", handleClick);
