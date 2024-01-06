const morpionContainer = document.getElementById("morpion-container");
const scorePlayerOne = document.getElementById("score-player-one");
const scorePlayerTwo = document.getElementById("score-player-two");
let switchSign = false;
let winBlock = document.getElementById("win");
let equalityArray = [];
let playerOne = [];
let playerTwo = [];
let scoringPlayerOne = 0;
let scoringPlayerTwo = 0;
const conditionWin = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

function generateBtn() {
    
    for(let i = 1; i < 10; i++) {
        const btnMorpion = document.createElement("button");
        btnMorpion.classList = "btn-morpion";
        const numberBtnMorpion = i; // je profite de ma boucle pour generer des nombres de 1 à 9 pour plus tard
        equalityArray.push(btnMorpion)
        // btnMorpion.id = numberBtnMorpion;
        // console.log(equalityArray)
        console.log(numberBtnMorpion)
        morpionContainer.appendChild(btnMorpion);
        btnMorpion.addEventListener("click", function(){
            writeSign(btnMorpion, numberBtnMorpion)
            compareArray1(conditionWin, playerOne, playerTwo)
        })
    }
}


function writeSign(btnMorpion, numberBtnMorpion) {
    if (switchSign === false) {
        btnMorpion.innerText = "X";
        switchSign = true;
        btnMorpion.disabled = true;
        playerOne.push(numberBtnMorpion); // je push dans un tableau des nombres de 1 à 9 selon le bouton où j appuie
        console.log(playerOne)
    }else if ( switchSign === true){
        btnMorpion.innerText = "O"
        switchSign = false;
        btnMorpion.disabled = true;
        playerTwo.push(numberBtnMorpion);
    }
}
console.log(playerOne)


let playerWin = document.getElementById("player-win")
const btnPlayerWin = document.getElementById("btn-player-win")

function compareArray1(array1, array2, array3) {
    let victory = false;
    for (let i = 0; i < array1.length; i++) {
        let arrayOfArray = array1[i];
        if (arrayOfArray.every(element => array2.includes(element))) {
                winBlock.style.display = "flex";
                scoringPlayerOne ++;
                scorePlayerOne.innerText = scoringPlayerOne;
                playerWin.innerText = "Le joueur 1 gagne !!"
                scorePlayerOne.innerText = scoringPlayerOne;
                victory = true;

        }else if (arrayOfArray.every(element => array3.includes(element))){
            winBlock.style.display = "flex";
            scoringPlayerTwo ++;
            scorePlayerTwo.innerText = scoringPlayerTwo;
            playerWin.innerText = "Le joueur 2 gagne !!"
            victory = true;
        }
    }
    if (victory === false && playerOne.length + playerTwo.length === equalityArray.length) {
        winBlock.style.display = "flex";
        playerWin.innerText = "Egalité !!"
    }
    btnPlayerWin.addEventListener("click", function() {
        continueGame()
    })
}

generateBtn();

function continueGame() {
    winBlock.style.display = "none";
    morpionContainer.innerHTML = "";
    victory = false;
    equalityArray = [];
    playerOne = [];
    playerTwo = [];
    generateBtn();
}









// function compareArray2(array1, array2) {
//     for (let i = 0; i < array1.length; i++) {
//         arrayOfarray = array1[i];
//         if (arrayOfarray.every(element => array2.includes(element))) {
//             setTimeout(() => {
//                 alert("Joueur 2 gagne");
//             }, 300);
//             scoringPlayerTwo ++;
//             scorePlayerTwo.innerText = scoringPlayerTwo;
//         };
//     }
// }

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
//   }

// const vsComputer = document.getElementById("vs-computer");
// vsComputer.addEventListener("click", function() {
    
//     for(let i = 0; i < equalityArray.length; i++) {
//         let btnMorpion = getRandomInt(1, 9);
//         equalityArray[i] = click(btnMorpion);
//     }

// })

// function win(btnMorpion) {
//     if (testArray !== "") {
//         if (testArray[0] === testArray[1] && testArray[0] === testArray[2] && testArray[1] === testArray[2]
//             || (testArray[3] === testArray[4] && testArray[3] === testArray[5] && testArray[4] === testArray[5])
//             || (testArray[6] === testArray[7] && testArray[6] === testArray[8] && testArray[7] === testArray[8])
//             || (testArray[0] === testArray[3] && testArray[0] === testArray[6] && testArray[3] === testArray[6])
//             || (testArray[1] === testArray[4] && testArray[1] === testArray[7] && testArray[4] === testArray[7])
//             || (testArray[2] === testArray[5] && testArray[2] === testArray[8] && testArray[5] === testArray[8])
//             || (testArray[0] === testArray[4] && testArray[0] === testArray[8] && testArray[4] === testArray[8])
//             || (testArray[2] === testArray[4] && testArray[2] === testArray[6] && testArray[4] === testArray[8])) {
//             alert("win");
//         }
        
//     }
       
        
//     }

    // function compare (btnMorpion) {
//     if(btnMorpion[1].innerText === btnMorpion[2].innerText === btnMorpion[3].innerText){
//         alert("win")
//     }
// }

// function win() {
//     let winCases = [
//         [case1, case2, case3],
//         [case4, case5, case6]
//     ]
// }
// function win() {
    
//         if((testArray[0].innerText === testArray[1].innerText && testArray[0].innerText === testArray[].innerText && testArray[2].innerText === testArray[3].innerText)
        
//         || ((testArray[4].innerText === testArray[5].innerText && testArray[4].innerText === testArray[6].innerText && testArray[5].innerText === testArray[6].innerText))
//         || ((testArray[7].innerText === testArray[8].innerText && testArray[7].innerText === testArray[9].innerText && testArray[8].innerText === testArray[9].innerText))
//         || ((testArray[1].innerText === testArray[4].innerText && testArray[1].innerText === testArray[7].innerText && testArray[4].innerText === testArray[7].innerText))
//         || ((testArray[2].innerText === testArray[5].innerText && testArray[2].innerText === testArray[8].innerText && testArray[5].innerText === testArray[8].innerText))
//         || ((testArray[3].innerText === testArray[6].innerText && testArray[3].innerText === testArray[9].innerText && testArray[6].innerText === testArray[9].innerText))
//         || ((testArray[1].innerText === testArray[5].innerText && testArray[1].innerText === testArray[9].innerText && testArray[5].innerText === testArray[9].innerText))
//         || ((testArray[3].innerText === testArray[5].innerText && testArray[3].innerText === testArray[7].innerText && testArray[5].innerText === testArray[9].innerText))
//         ){
//         alert("win")
//         }
    
// }