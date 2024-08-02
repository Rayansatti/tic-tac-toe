//factory function to create players

 function Players(firstPlayer, secondPlayer){

    return {
            firstPlayer: firstPlayer,
            firstSign: 'X',
            secondPlayer: secondPlayer, 
            secondSign: 'O' 
        }   
    }

    
    //game board object 
    let GameBoard = {
        gameboard: 
        [[0,0,0],
        [0,0,0],
        [0,0,0]]
    }


//checks if the board is empty or not
function checkBoard(){
    for(const array of GameBoard.gameboard){
        for(const item of array){
            if(item === 0){
                return 0;
            }
        }
    }
    return{
        alert: 'game over'
    }
}

function winningSenarios(array){
    let winnerX = [];
    let winnerO = [];
    let first = array[0][0];
    let sec = array[0][1];
    let third = array[0][2];
    let frth = array[1][0];
    let fifth = array[1][1];
    let sixth = array[1][2];
    let sev = array[2][0];
    let eight = array[2][1];
    let ninth = array[2][2];
    

   
   console.log(first);
   
    if(first && sec && third == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(first && sec && third == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    
    else if(frth && fifth && sixth == 'X'){
        
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(frth && fifth && sixth == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    else if(sev && eight && ninth == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(sev && eight && ninth == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    else if(first && frth & sev == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(first && frth & sev == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    
    else if(sec && fifth && eight == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(sec && fifth && eight == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    else if(third && sixth && ninth == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(third && sixth && ninth == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
    
    else if(first && fifth && ninth == 'X'){
        
        return{
            winner: 'X is the winner',
            result: winnerX.push(Players.firstSign),
            winners: winnerX ,
            draws: checkDraws(winnerX, winnerO)
        }
    }else if(first && fifth && ninth == 'O'){
        return{
            winner: 'O is the winner',
            result: winnerO.push(Players.secondSign),
            winners: winnerO,
            draws: checkDraws(winnerX, winnerO)
        }
    }
    else if(third && fifth && sev == 'X'){
            return{
                winner: 'X is the winner',
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws(winnerX, winnerO)
            }
        }else if(third && fifth && sev == 'O'){
            return{
                winner: 'O is the winner',
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws(winnerX, winnerO)
            }
        }
        
    else{
        console.log('error')
    }

    function checkDraws(winnerX, winnerO){
        let xLength = winnerX.length;
        let oLength = winnerO.length;

     if(xLength + oLength === 9){if(xLength == oLength){
        return{
            winner: `Tie`
        }
     }else if(xLength > oLength){
        return{
            winner: 'X is the winner'
        }
     }else if(xLength < oLength){
        return{
            winner: 'O is the winner'
        }
     }}else{
        return 'continue playing'
    }
}
}

function takeFirstChoice(choice){
    let firstSign = 'X';
    let newBoard ;
   
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){
            GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
            
            return{newBoard: GameBoard.gameboard}
        }else if(checkBoard(newBoard) !==  0){
            let array = GameBoard.gameboard;
             winningSenarios(array)
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }
        }else if(GameBoard.gameboard[0][choice] !== 0){
           return{alert: 'This block is taken'}
           
        }
    }else if(choice >= 3 && choice <= 5){
        let choiceEdit = choice - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}
    }else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }}else if(GameBoard.gameboard[1][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }else if(choice >= 6 && choice <= 8){
        let choiceEdit = choice - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}
    }else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }}else if(GameBoard.gameboard[2][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }
}


function takeSecondChoice(choice2){
    let firstSign = 'O';
    let newBoard;
    if(choice2 >= 0 && choice2 <= 2){
        
    if(GameBoard.gameboard[0][choice2] === 0){
        {GameBoard.gameboard[0].fill(firstSign, choice2, choice2 + 1);
        return{newBoard: GameBoard.gameboard}}
        }else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }}else if(GameBoard.gameboard[0][choice2] !== 0){
            return{alert: 'This block is taken'}
        }
    }else if(choice2 >= 3 && choice2 <= 5){
        let choiceEdit = choice2 - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){
            GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
            return{newBoard: GameBoard.gameboard}
            }else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }}else if(GameBoard.gameboard[1][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }else if(choice2 >= 6 && choice2 <= 8){
        let choiceEdit = choice2 - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){
            GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(GameBoard.gameboard)
            }}else if(GameBoard.gameboard[2][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }
}
 
//check issue with weinningSenarios when passing newBOrd or GameBoard.gameboard
//returns undefined
