//factory function to process the game
 function gameProcess(player, choice){
    const gameBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    playerXchoices = []
    playerOchoices = []
    const winningSenarios = [
        [0, 3, 6],[6, 3, 0],
        [1, 4, 7],[7, 4, 1],
        [2, 5, 8],[8, 5, 2],
        [0, 1, 2],[2, 1, 0],
        [3, 4, 5],[5, 4, 3],
        [6, 7, 8],[8, 7, 6],
        [0, 4, 8],[8, 4, 0],
        [1, 4, 6],[6, 4, 1]
    ]

    function runGame(){
        if(player === "X"){
            playerXchoices.push(choice);
            if(playerXchoices.length >= 3){
                let choiceSet = new set(playerXchoices);
                let matches = winningSenarios.filter(value => choiceSet.has(value));
                console.log(matches);
            }else{console.log(playerXchoices)}
            

        }else if(player === "O"){
            playerOchoices.push(choice);
            if(playerOchoices.length >= 3){
                let choiceSet = new set(playerXchoices);
                let matches = winningSenarios.filter(value => choiceSet.has(value));
                console.log(matches);
            }else{console.log(playerOchoices)}
            

        }
    }
    runGame()

}
gameProcess()