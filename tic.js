//factory function to create players
 function Player(name, sign, choice){

    
    return {
            name: name,
            sign: sign,
            choice: choice,  
        }  

       
    }

            let player1 = Player('lee', 'X', 5)
            let player2 = Player('alis', 'O', 4)
     console.log(typeof player1);
      console.log(player2);

    //another factory thet takes the player 
    //factory as an argument 
    //then reterns the new game board with
    //player's choice

    function GameBoard (Player, sign, choice){
        let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        let indexOfChoice = gameboard.indexOf(Player.choice);
        let value = Player.sign;
        console.log(value);
        return{
            newBoard: gameboard.fill(value, indexOfChoice , indexOfChoice + 1)
        }
        
      };

      console.log(GameBoard(player1));
      console.log(GameBoard(player2));
   
    
   
    


