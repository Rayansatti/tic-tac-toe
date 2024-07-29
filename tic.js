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
                return item;
            }
        }
    }
    return{
        alert: 'game over'
    }
}



function takeFirstChoice(choice){
    let firstSign = 'X';
    let newBoard ;
   // let newBoard;
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){
            GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }
        }else if(GameBoard.gameboard[0][choice] !== 0){
            return{alert: 'This block is taken'}
        }
    }else if(choice >= 3 && choice <= 5){
        let choiceEdit = choice - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }}else if(GameBoard.gameboard[1][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }else if(choice >= 6 && choice <= 8){
        let choiceEdit = choice - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }}else if(GameBoard.gameboard[2][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }
}


function takeSecondChoice(choice2){
    let firstSign = 'O';
   // let newBoard;
    if(choice2 >= 0 && choice2 <= 2){
        
    if(GameBoard.gameboard[0][choice2] === 0){
        {GameBoard.gameboard[0].fill(firstSign, choice2, choice2 + 1);
        return{newBoard: GameBoard.gameboard}}
        }else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }}else if(GameBoard.gameboard[0][choice2] !== 0){
            return{alert: 'This block is taken'}
        }
    }else if(choice2 >= 3 && choice2 <= 5){
        let choiceEdit = choice2 - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){
            GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }}else if(GameBoard.gameboard[1][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }else if(choice2 >= 6 && choice2 <= 8){
        let choiceEdit = choice2 - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){
            GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard: GameBoard.gameboard}}else if(checkBoard(newBoard) !== 0){
            return{
                alert: 'game over'
            }}else if(GameBoard.gameboard[2][choiceEdit] !== 0){
            return{alert: 'This block is taken'}}
    }
}
 





//finish the logic for takefirstchoice and takesecondchoice 
// to check for game over
// empliment the logic for checking the winner
//