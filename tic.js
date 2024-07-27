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
        


function takeFirstChoice(choice){
    let firstSign = 'X';
   // let newBoard;
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
        return{newBoard: GameBoard.gameboard}}else{
            return{alert: 'This block is taken'}}
    }else if(choice >= 3 && choice <= 5){
        let choiceEdit = choice - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard1: GameBoard.gameboard}}else{
            return{alert: 'This block is taken'}}
    }else if(choice >= 6 && choice <= 8){
        let choiceEdit = choice - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard3: GameBoard.gameboard}}else{
            return{alert: 'This block is taken'}}
    }
}

function takeSecondChoice(choice){
    let firstSign = 'O';
   // let newBoard;
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){{GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
        return{newBoard: GameBoard.gameboard}}}else{
            return{alert: 'This block is taken'}
        }
    }else if(choice >= 3 && choice <= 5){
        let choiceEdit = choice - 3;
        if(GameBoard.gameboard[1][choiceEdit] === 0){GameBoard.gameboard[1].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard1: GameBoard.gameboard}}else{
            return{alert: 'This block is taken'}}
    }else if(choice >= 6 && choice <= 8){
        let choiceEdit = choice - 6;
        if(GameBoard.gameboard[2][choiceEdit] === 0){GameBoard.gameboard[2].fill(firstSign, choiceEdit, choiceEdit + 1);
        return{newBoard3: GameBoard.gameboard}}else{
            return{alert: 'This block is taken'}}
    }
}

