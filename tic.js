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
    const first = array[0][0];
    const sec = array[0][1];
    const third = array[0][2];
    const frth = array[1][0];
    const fifth = array[1][1];
    const sixth = array[1][2];
    const sev = array[2][0];
    const eight = array[2][1];
    const ninth = array[2][2];
    

   
 
   
    if(first === 'X'  && sec === 'X' && third === 'X'){
        winnerX.push(1);
        }

    if(first  ==='O' && sec  ==='O' && third === 'O'){
            winnerO.push(2);
        }
    
    if(frth === 'X' && fifth === 'X' && sixth === 'X'){
            winnerX.push(3);
        }
        
    if(frth  ==='O' && fifth  ==='O' && sixth === 'O'){
            winnerO.push(4);
        }

    if(sev === 'X' && eight === 'X' && ninth === 'X'){
        winnerX.push(5);
        }
        
    if(sev ==='O' && eight  ==='O' && ninth === 'O'){
            winnerO.push(6);
        }

    if(first === 'X' && frth === 'X' & sev === 'X'){
        winnerX.push(7);
        }
        
    if(first  ==='O' && frth  ==='O' & sev === 'O'){
            winnerO.push(8);
        }
    
    if(sec === 'X' && fifth === 'X' && eight === 'X'){
        winnerX.push(9);
        }
        
    if(sec  ==='O' && fifth  ==='O' && eight === 'O'){
            winnerO.push(10);
        }

    if(third === 'X' && sixth === 'X' && ninth === 'X'){
        winnerX.push(11);
        }
        
    if(third  ==='O' && sixth  ==='O' && ninth === 'O'){
            winnerO.push(12);
        }
    
    if(first === 'X' && fifth === 'X' && ninth === 'X'){
        winnerX.push(13);
    }
    
    if(first  ==='O' && fifth  ==='O' && ninth === 'O'){
        winnerO.push(14);
    }

    if(third === 'X' && fifth === 'X' && sev === 'X'){
        winnerX.push(15);
        }
        
    if(third  ==='O' && fifth  ==='O' && sev === 'O'){
            winnerO.push(16);
        }
        
    

    console.log(winnerX, winnerO);

    function checkDraws(winnerX, winnerO){
        let xLength = winnerX.length;
        let oLength = winnerO.length;

     if(xLength == oLength){
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
     }
}
console.log(checkDraws(winnerX, winnerO));
}

function takeFirstChoice(choice){
    let firstSign = 'X';
    let newBoard ;
   
    if(choice >= 0 && choice <= 2){
        if(GameBoard.gameboard[0][choice] === 0){
            GameBoard.gameboard[0].fill(firstSign, choice, choice + 1);
            
            return{newBoard: GameBoard.gameboard}
        }else if(checkBoard(newBoard) !==  0){
            
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
 
//render the contents of the gameboard array to the webpage 
function start(){

   //first names
   //if start clicked without names error
   let alert = document.getElementById('alerts');
   let name1 = document.getElementById('name1');
   let name2 = document.getElementById('name2');

   //console.log(name1.value)
   if(name1.value == '' || name2.value == ''){
    alert.innerText = 'write your name';

   }else if(name1.value !== '' && name2.value !== ''){
    alert.innerText = `${name1.value} is X , ${name2.value} is O.  ${name1.value} start!`
    
   }
    
   }

   function rounds(button){
    let alert = document.getElementById('alerts');
    let name1 = document.getElementById('name1');
    let name2 = document.getElementById('name2');
    let box = document.getElementsByClassName('box');
    let round = [];
    
    if(alert.innerText = `${name1.value} is X , ${name2.value} is O.  ${name1.value} start!`){
        
        let roundTurn = round.length;
        
        if(GameBoard.gameboard == 0){
            alert.innerText = 'X round 1';
            let buttonId = button.id;
            console.log(takeFirstChoice(buttonId))
            round.push('X');     
         
        }else if(roundTurn == 1){
            alert.innerText = 'O round 1';
            let buttonId = button.id;
            console.log(takeFirstChoice(buttonId))
            round.push('O');
        }
        
        
        
    }
   }

   //when start clicked the first round goes to first player
   //then the second
   //then the first and so on
   
   //when all boxes filled if one more is clicked twice it ends the game or 
   //if finish clicked it ends the game as well

