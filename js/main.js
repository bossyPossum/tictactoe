

let grid = [
            [" ", " ", " "], 
            [" ", " ", " "], 
            [" ", " ", " "]
            ] ;

//pseudo-coding
let player = "X";            
let executeMove = function(x, y) {
   if (isEmpty (x, y)) { 
        fillInGrid ( player, x , y);
            if (currentPlayerWin ()) {
            console.log (player + " has won the game !");
        } else {
            switchPlayer ();
        }

   } else {
       // error
   }   

}

let currentPlayerWin = function() {
    if (winsAcross() || winsDown() || winsDiagonallyLeft() || winsDiagonallyRight()) {
        true;
    }
  
    return false;
}

// First version without loops
let winsAcross = function () {

// check the 1st square in row one contains a specific element
    let firstRowFirstElement = grid[0][0];
// checks the 2nd square in row one contains the same element as the 1st square
    let firstRowSecondElement = grid[0][1];
// checks the 3rd square in row one contains the same element as the 2nd square
    let firstRowThirdElement = grid[0][2];
    
    if (
        firstRowFirstElement == firstRowSecondElement &&
        firstRowFirstElement == firstRowThirdElement) {
        // Return because you won!
        return true;
    }

    // goes to row 2
    // check the 1st square in row two contains a specific element
    let secondRowFirstElement = grid[1][0];
    // checks the 2nd square in row two contains the same element as the 1st square
    let secondRowSecondElement = grid[1][1];
    // checks the 3rd square in row two contains the same element as the 2nd square
    let secondRowThirdElement = grid[1][2];
    
    if (
        secondRowFirstElement == secondRowSecondElement &&
        secondRowFirstElement == secondRowThirdElement) {
        // Return because you won!
        return true;
    }

    // goes to row 3
    // check the 1st square in row three contains a specific element
    let thirdRowFirstElement = grid[2][0];
    // checks the 2nd square in row three contains the same element as the 1st square
    let thirdRowSecondElement = grid[2][1];
    // checks the 3rd square in row three contains the same element as the 2nd square
    let thirdRowThirdElement = grid[2][2];
    
    if (
        thirdRowFirstElement == thirdRowSecondElement &&
        thirdRowFirstElement == thirdRowThirdElement) {
        // Return because you won!
        return true;
    }

    // We lost
    return false;


  


    // We are looping through the rows
    // for (let i = 0; i < grid.length; ++i) {
    //     // let initialValue = grid[i][0];

    //     // // if ()


    //     // //

    //     // //VIV failed - EPIC FAIL
    //     // //the initial value can be anything of 3 things
    //     // //checking if the current player is winner (n the current game state)
    //     // //so what is a logical thing to check here

    //     // let result = true;
    //     // for (let j = 0; j < grid[i].length; ++j) {
    //     //     if (initialValue != grid[i][j] ) {
    //     //     result = false;
    //     //     }
    //     // }  
    //     // if (result) {
    //     //     return true;
    //     // }
    // }
    //
    // return false;
}

// First version without loops
let winsAcross = function () {
    // Get the element in the first column first row
    let firstColumnFirstRow = grid[0][0];
    // Get the element in the first column second row
    let firstColumnSecondRow = grid[1][0];
    // Get the element in the first column third row
    let firstColumnThirdRow = grid[2][0];

    // Check if I won
    if (
        firstColumnFirstRow == firstColumnSecondRow &&
        firstColumnSecondRow == firstColumnThirdRow
    ) {
        // You won!
        return true;
    }

    // Go to second column
    // Get the element in the second column first row
    let secondColumnFirstRow = grid[0][1];
    // Get the element in the second column second row
    let secondColumnSecondRow = grid[1][1];
    // Get the element in the second column third row
    let secondColumnThirdRow = grid[2][1];

    // Check if I won
    if (
        secondColumnFirstRow == secondColumnSecondRow &&
        secondColumnFirstRow == secondColumnThirdRow
    ) {
        // You won!
        return true;
    }

    // Go to third column
    // Get the element in the third column first row
    let thirdColumnFirstRow = grid[0][2];
    // Get the element in the third column second row
    let thirdolumnSecondRow = grid[1][2];
    // Get the element in the third column third row
    let thirdColumnThirdRow = grid[2][2];

    // Check if I won
    if (
        thirdColumnFirstRow == thirdColumnSecondRow &&
        thirdColumnFirstRow == thirdColumnThirdRow
    ) {
        // You won!
        return true;
    }

    // You lost!
    return false;
};

let winsDiagonallyLeft = function () {

    let firstColumnFirstRow = grid[0][0];
    let secondColumnSecondRow = grid[1][1];
    let thirdColumnThirdRow = grid[2][2];
    
    if (firstColumnFirstRow == secondColumnSecondRow &&
        firstColumnFirstRow == thirdColumnThirdRow) {
            //You won!
            return true;
        }         //You lost!
        return false;

};

let isEmpty = function (x, y) {
    if ( grid[y][x] === " ") { // I DONT GET THIS [Y][X]
        return true;
    }

    return false;
}

let fillInGrid = function (player, x, y) {
    grid[y][x] = player; // I DONT GET THIS!!!

    // Tmp print in console 
    printGridInConsole();

    // Update dom
}

let switchPlayer = function () {
    if (player === "X") {
        player = "0";
    } else {
        player = "X";
    }
}

let printGridInConsole = function() {
    for (let i = 0; i < grid.length; ++i) {
        let line = '';

        for (let j = 0; j < grid[i].length; ++j) {
            let val = grid[i][j];
            if (val == " ") {
                val = '.';
            }
            line += val + ' ';
        }
        console.log(line);
    }
    console.log('');
}

let table = '<table><tr>';
    for (let i = 0 ; i < grid.length; ++i){
        if (i % 3 === 0 && i !== 0) {
        table+= '</tr><tr>'
        }
        table+='<td>'+grid[i]+'</td>';
    }
    table+='</tr></table>';

    document.write(table);

    // if grid is empty, assign 1st player to player1, and player1 can only use "0"

    // let player1;
    // for (let i = 0 ; i < grid.length ; ++i) {
    //     if (grid[i] !== " ") { // if the array contains value
    //         let player1 = "0";
    //         break;
    //     }
    //     else {
    //         let player1 = "X"
    //     }
    //     console.log("This is an empty array");
    // }

    // console.log(player1);

let simulator = function(x, y) {
    executeMove(x, y)
}