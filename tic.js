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
                return {
                    alert: 'Next player'
                }
            }
        }
    }
    return{
        alert: 'game over'
    }
}

function winningSenarios(){
    let winnerX = [];
    let winnerO = [];

    function checkDraws(winnerX, winnerO){
        if(winnerX.length == winnerO.length){
            return{
                winner: `Tie`
            }
        }else if(winnerX.length > winnerO){
            return{
                winner: `${Players.firstPlayer} is the winner`
            }
        }else if(winnerX.length < winnerO){
            return{
                winner: `${Players.secondPlayer} is the winner`
            }
        }
    }
   
    if(GameBoard.gameboard[0][0] == GameBoard.gameboard[0][1] == GameBoard.gameboard[0][2]){
        if(GameBoard.gameboard[0][0] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[0][0] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    }
    else if(GameBoard.gameboard[1][0] == GameBoard.gameboard[1][1] == GameBoard.gameboard[1][2]){
        if(GameBoard.gameboard[1][0] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[1][0] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    }
    else if(GameBoard.gameboard[2][0] == GameBoard.gameboard[2][1] == GameBoard.gameboard[2][2]){
        if(GameBoard.gameboard[2][0] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[2][0] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    else if(GameBoard.gameboard[0][0] == GameBoard.gameboard[1][0] == GameBoard.gameboard[2][0]){
        if(GameBoard.gameboard[0][0] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[0][0] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    }
    else if(GameBoard.gameboard[0][1] == GameBoard.gameboard[1][1] == GameBoard.gameboard[2][1]){
        if(GameBoard.gameboard[0][1] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[0][1] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    }
    else if(GameBoard.gameboard[0][2] == GameBoard.gameboard[1][2] == GameBoard.gameboard[2][2]){
        if(GameBoard.gameboard[0][2] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[0][2] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
    }
    else if(GameBoard.gameboard[0][0] == GameBoard.gameboard[1][1] == GameBoard.gameboard[2][2]){if(GameBoard.gameboard[0][0] === 'X'){
        return{
            winner: `${Players.firstPlayer} is the winner`,
            result: winnerX.push(Players.firstSign),
            winners: winnerX ,
            draws: checkDraws()
        }
    }else if(GameBoard.gameboard[0][0] === 'O'){
        return{
            winner: `${Players.secondPlayer} is the winner`,
            result: winnerO.push(Players.secondSign),
            winners: winnerO,
            draws: checkDraws()
        }
    }}
    else if(GameBoard.gameboard[0][2] == GameBoard.gameboard[1][1] == GameBoard.gameboard[2][0]){
        if(GameBoard.gameboard[0][2] === 'X'){
            return{
                winner: `${Players.firstPlayer} is the winner`,
                result: winnerX.push(Players.firstSign),
                winners: winnerX ,
                draws: checkDraws()
            }
        }else if(GameBoard.gameboard[0][2] === 'O'){
            return{
                winner: `${Players.secondPlayer} is the winner`,
                result: winnerO.push(Players.secondSign),
                winners: winnerO,
                draws: checkDraws()
            }
        }
        
    }
}
};

function takeFirstChoice(choice){
    let firstSign = 'X';
    let newBoard ;
   // let newBoard;
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){
            GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
            
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(newBoard)
            }
        }else if(GameBoard.gameboard[0][choice] !== 0){
            return{alert: 'This block is taken'}
        }
    }else if(choice >= 3 && choice <= 5){
        let choiceEdit = choice - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(newBoard)
            }}else if(GameBoard.gameboard[1][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }else if(choice >= 6 && choice <= 8){
        let choiceEdit = choice - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(newBoard)
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
                status: winningSenarios(newBoard)
            }}else if(GameBoard.gameboard[0][choice2] !== 0){
            return{alert: 'This block is taken'}
        }
    }else if(choice2 >= 3 && choice2 <= 5){
        let choiceEdit = choice2 - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){
            GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                newBoard: GameBoard.gameboard,
                alert: 'game over',
                status: winningSenarios(newBoard)
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
 
//take players choices in order






//check for draws
// create a function to take players choices in order
// 
//