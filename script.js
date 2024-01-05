const morpionContainer = document.getElementById("morpion-container");
const scorePlayerOne = document.getElementById("score-player-one");
const scorePlayerTwo = document.getElementById("score-player-two");
let switchSign = false;
let testArray = [];
let playerOne = [];
let playerTwo = [];
let scoringPlayerOne = 0;
let scoringPlayerTwo = 0;
const conditionWin = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 5, 9], [3, 5, 7], [1, 4, 7], [2, 5, 8], [3, 6, 9]];

function generateBtn() {
    for(let i = 1; i < 10; i++) {
        const btnMorpion = document.createElement("button");
        btnMorpion.classList = "btn-morpion";
        const idBtnMorpion = i;
        testArray.push(idBtnMorpion)
        btnMorpion.id = idBtnMorpion;
        console.log(testArray)
        // console.log(btnMorpion)
        morpionContainer.appendChild(btnMorpion);
        btnMorpion.addEventListener("click", function(){
            writeSign(btnMorpion, idBtnMorpion)
            compareArray1(conditionWin, playerOne, playerTwo)
            // compareArray2(conditionWin, playerTwo)
        })
    }
}
generateBtn();

function writeSign(btnMorpion, idBtnMorpion) {
    if (switchSign === false) {
        btnMorpion.innerText = "X";
        switchSign = true;
        btnMorpion.disabled = true;
        playerOne.push(idBtnMorpion);
    }else if ( switchSign === true){
        btnMorpion.innerText = "O"
        switchSign = false;
        btnMorpion.disabled = true;
        playerTwo.push(idBtnMorpion);
    }
    
}
console.log(playerOne)

function compareArray1(array1, array2, array3) {
    for (let i = 0; i < array1.length; i++) {
        let arrayOfarray = array1[i];
        if (arrayOfarray.every(element => array2.includes(element))) {
            setTimeout(() => {
                alert("Joueur 1 gagne");
            }, 300);
            scoringPlayerOne ++;
            scorePlayerOne.innerText = scoringPlayerOne

        }else if (arrayOfarray.every(element => array3.includes(element))){
            setTimeout(() => {
                alert("Joueur 2 gagne");
            }, 300);
            scoringPlayerTwo ++;
            scorePlayerTwo.innerText = scoringPlayerTwo;
        }
    }
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

function continueGame() {
    playerOne = [];
    playerTwo = [];
    generateBtn();
}


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