// Variables
let board = new Array(16);
let win;
let lose;

const game = {
    board: [],
    allIntegers: [],
    allPrimes: [],
    roundOneNum: [],
    roundOnePrimes: [],
    roundTwoPrimes: [],
    roundThreePrimes: [],
    // generate all numbers from 2-100, in order, push to allIntegers.
    createNum: function() {
        for (let i = 2; i <= 100; i++) {
            this.allIntegers.push(i);
        }
    },
    // generate all PRIMEs from 2-100, in order, push to allPrimes.
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    logPrime: function() {
        for (let j = 2; j <= 100; j++) {
            if (this.checkPrime(j) === true) {
                this.allPrimes.push(j);
            }
        }
    },

    init: function() {
        
        //this.roundOneNum = Array.from(uniqueNum); //turning the set into an array
    }
}
    


//checking to make sure all is working
game.logPrime();
game.createNum();
game.init();
// console.log(game.allPrimes);
// console.log(game.allIntegers);

console.log(board);



// function init() {
//     // randomize the Integers array
//     for (let i = 0; i < 16; i++) {
//         let randNum = Math.floor(Math.random() * 25) + 2;
//             this.roundOneNum.add(randNum);
            
            
        
//     // pull out 16 numbers
//     // insert into board
//     }
//     this.roundOneNum = Array.from(this.roundOneNum);
// }





// onclick event listener on play button, start next page
// let btn = document.getElementById("button");
// btn.addEventListener("click", init)


// let board = [];
// let roundOne = [];
// while (board.length < 17) {
//         let randPick = Math.floor(Math.random() * 25) + 1;  
//         if (roundOne.indexOf(randPick) === -1 ) {
//         roundOne.push(randPick);
//         }
//     return roundOne;
//     console.log(roundOne);
// } 


// for (let i = 0; i < 16; i++) {
    // document.getElementById(`sq${i}`).innerText = roundOne[randPick]; 
    // document.getElementById('sq1').innerText = roundOne[randPick]; 
    // document.getElementById('sq2').innerText = roundOne[i]; 
    // document.getElementById('sq3').innerText = roundOne[i]; 
    // document.getElementById('sq4').innerText = roundOne[i]; 
    // document.getElementById('sq5').innerText = roundOne[i]; 
// }

// Functions
// init: function() {
//     //generate game board with 16 random numbers
// }


