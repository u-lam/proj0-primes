// Variables
let board = new Array(16);
let win;
let lose;

// Buttons
// onclick event listener on play button, start next page
// let btn = document.getElementById("button");
// btn.addEventListener("click", init)


const game = {
    
}
    


//checking to make sure all is working
// game.logPrime();
// game.createNum();
// game.init();
// console.log(game.allPrimes);
// console.log(game.allIntegers);

// console.log(board);


// Round 1 - 11 nonP, 5 P, 

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
            if (checkPrime(j) === true) {
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
    },
    combineNum: function() {
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    }
}

roundOne.rOneGenerateNum();
roundOne.assignNum();
roundOne.combineNum();
console.log(roundOne.boardComplete);

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
    },
    combineNum: function() {
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    }

}
// roundTwo.generateNum();
// roundTwo.assignNum();
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
    },
    combineNum: function() {
        this.boardComplete = this.boardNotPrimes.concat(this.boardPrimes);
    }

}
// roundThree.generateNum();
// roundThree.assignNum();
// console.log(roundThree.boardComplete);

// FUNCTIONS
function checkPrime(x) {
    for (i = 2; i < x; i++) {  
        if (x % i === 0) {  
            return false;
        } 
    }
    return true;
}


// Piping this on the page
// for (let i = 0; i < 16; i++) {
//     document.getElementById(`sq${i}`).innerText = roundOne[randPick]; 
//     document.getElementById('sq1').innerText = roundOne[randPick]; 
//     document.getElementById('sq2').innerText = roundOne[i]; 
//     document.getElementById('sq3').innerText = roundOne[i]; 
//     document.getElementById('sq4').innerText = roundOne[i]; 
//     document.getElementById('sq5').innerText = roundOne[i]; 
// }



