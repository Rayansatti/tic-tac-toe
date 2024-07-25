//factory function to process the game
 function gameProcess(name, sign, choice){

    let gameboard = [0, 1, 2, 3, 4, 5, 6, 7, 8];

    return {
            name: name,
            sign: sign,
            GameBoard: function (sign, choice){
                return{
                    gameboard.findIndex(choice).sign(sign),

                    console.log(gameboard);
                }
                
            }
        }  
    }

   

    
            let player1 = gameProcess('lee', 'X', 5)
            let player2 = gameProcess('alis', 'O', 4)
     console.log(player1);
      console.log(player2);
    
   
    


