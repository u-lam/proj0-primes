// Variables
// let board = new Array(16);
// let win;
// let lose;


//NOT SURE HOW TO PUT ALL ROUNDS TOGETHER IN ONE GAME CONST
const game = {
    
}
    

const roundOne = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    rOneGenerateNum: function() {
        for (let j = 2; j <= 25; j++) {
            if (this.checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {
        for (let i = 0; i < 5; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 11; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
        }
    }
}

function init() {
    roundOne.rOneGenerateNum();
    roundOne.assignNum();
    roundOne.fillBoard();
}

const roundTwo = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    generateNum: function() {
        for (let j = 2; j <= 50; j++) {
            if (checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {
        for (let i = 0; i < 6; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 10; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
        }
    }
}
// roundTwo.generateNum();
// roundTwo.assignNum();
// roundTwo.fillBoard();
// console.log(roundTwo.boardComplete);


const roundThree = {
    isPrimeSet: [],
    isNotPrimeSet: [],
    boardPrimes: [],
    boardNotPrimes: [],
    boardComplete: [],
    checkPrime: function(x) {
        for (i = 2; i < x; i++) {  
            if (x % i === 0) {  
                return false;
            } 
        }
        return true;
    },
    generateNum: function() {
        for (let j = 2; j <= 100; j++) {
            if (checkPrime(j) === true) {
                this.isPrimeSet.push(j);
            } else {
                this.isNotPrimeSet.push(j);
            }
        }
    },
    assignNum: function() {
        for (let i = 0; i < 7; i++) {
            let x = Math.floor(Math.random() * this.isPrimeSet.length);
            this.boardPrimes.push(this.isPrimeSet[x]);
            this.isPrimeSet.splice(x, 1);
        }
        for (let j = 0; j < 9; j++) {
            let y = Math.floor(Math.random() * this.isNotPrimeSet.length);
            this.boardNotPrimes.push(this.isNotPrimeSet[y])
            this.isNotPrimeSet.splice(y, 1);
        }
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
        }
    }
}
// roundThree.generateNum();
// roundThree.assignNum();
// roundThree.fillBoard();
// console.log(roundThree.boardComplete);

// FUNCTIONS
// function checkPrime(x) {
//     for (i = 2; i < x; i++) {  
//         if (x % i === 0) {  
//             return false;
//         } 
//     }
//     return true;
// }


// BUTTONS

// When play button is clicked, start round one -- DONE
// let btn = document.getElementById("btnPlay");
// btn.addEventListener("click", init);

// Checking if clicked sq is a prime number
let squares = [];
for (let i = 0; i < 16; i++) {
    squares = document.getElementById(`sq${i}`);
    
}
console.log(squares);
