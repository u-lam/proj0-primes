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
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute(value, `${roundOne.boardComplete[i]}`);
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
            if (this.checkPrime(j) === true) {
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
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute(value, `${roundOne.boardComplete[i]}`);
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
            if (this.checkPrime(j) === true) {
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
        this.boardComplete.sort(this.sortfunc);  
    },
    sortfunc: function(a, b) {
        return 0.5 - Math.random();
    },
    fillBoard: function() {
        for (let i = 0; i < 16; i++) {
            document.getElementById(`sq${i}`).innerText = roundOne.boardComplete[i]; 
            document.getElementById(`sq${i}`).setAttribute(value, `${roundOne.boardComplete[i]}`);
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
let btn = document.getElementById("btnPlay");
btn.addEventListener("click", init);


// for each square, add an event listener to run the checkForPrime func


// Checking if clicked sq is a prime number
const lookupPrimes = [ 2,  3,  5,  7, 11, 13, 17, 19,
                    23, 29, 31, 37, 41, 43, 47, 53,
                    59, 61, 67, 71, 73, 79, 83, 89, 97 ]

let board;
// let squares = document.querySelectorAll('td div');
let squares = [];


                    
// function checkForPrime() {
//     let index = parseInt(event.target.id.replace('sq', ''));
//     for (let i = 0; i < 16; i++) {
    
//        if(boardComplete[index] = lookupPrimes[]
//     })
// }


// for (let i = 0; i < 16; i++) {
//     squares.push(document.getElementById(`sq${i}`));
//     // console.log(squares);
// }

