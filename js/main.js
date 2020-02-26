let grid = [
            [" ", " ", " "], 
            [" ", " ", " "], 
            [" ", " ", " "]
            ] ;
let counta = 0;

//pseudo-coding (Max)
let player = "X";            
let executeMove = function(x, y, button) {
    if (isEmpty (x, y) && !currentPlayerWin()) { // both condition needs to be true, otherwise the game will continue even after a winning game.
        fillInGrid (player, x , y, button);
        if (currentPlayerWin ()) {
            $(".message").text(" You have won the game !")
            return;
        } else {
            switchPlayer ();
        }    
    // } else if (!isEmpty (x, y) && !currentPlayerWin()) {
    //         $("p").text(" This is a draw !")
    //         return;
    } else {
        $(".message").text(" This game is finished !")
        return;
    }
}

let currentPlayerWin = function() {
    if (winsAcross() || winsDown() || winsDiagonallyLeft() || winsDiagonallyRight()) {
        return true;
    }
  
    return false;
}

// First version without loops
let winsAcross = function () {

// check the 1st square in row one contains a specific element
    let firstRowFirstColumn = grid[0][0];
// checks the 2nd square in row one contains the same element as the 1st square
    let firstRowSecondColumn = grid[0][1];
// checks the 3rd square in row one contains the same element as the 2nd square
    let firstRowThirdColumn = grid[0][2];
    
    if (
        firstRowFirstColumn != " " &&
        firstRowFirstColumn == firstRowSecondColumn &&
        firstRowFirstColumn == firstRowThirdColumn) {
        // Return because you won!
        return true;
    }

    // goes to row 2
    // check the 1st square in row two contains a specific element
    let secondRowFirstColumn = grid[1][0];
    // checks the 2nd square in row two contains the same element as the 1st square
    let secondRowSecondColumn = grid[1][1];
    // checks the 3rd square in row two contains the same element as the 2nd square
    let secondRowThirdColumn = grid[1][2];
    
    if (
        secondRowFirstColumn != " " &&
        secondRowFirstColumn == secondRowSecondColumn &&
        secondRowFirstColumn == secondRowThirdColumn) {
        // Return because you won!
        return true;
    }

    // goes to row 3
    // check the 1st square in row three contains a specific element
    let thirdRowFirstColumn = grid[2][0];
    // checks the 2nd square in row three contains the same element as the 1st square
    let thirdRowSecondColumn = grid[2][1];
    // checks the 3rd square in row three contains the same element as the 2nd square
    let thirdRowThirdColumn = grid[2][2];
    
    if (
        thirdRowFirstColumn != " " &&
        thirdRowFirstColumn == thirdRowSecondColumn &&
        thirdRowFirstColumn == thirdRowThirdColumn) {
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
let winsDown = function () {
    // Get the element in the first column first row
    let firstColumnFirstRow = grid[0][0];
    // Get the element in the first column second row
    let firstColumnSecondRow = grid[1][0];
    // Get the element in the first column third row
    let firstColumnThirdRow = grid[2][0];

    // Check if I won
    if (
        firstColumnFirstRow != " " &&
        firstColumnFirstRow == firstColumnSecondRow &&
        firstColumnFirstRow == firstColumnThirdRow
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
        secondColumnFirstRow !== " " &&
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
    let thirdColumnSecondRow = grid[1][2];
    // Get the element in the third column third row
    let thirdColumnThirdRow = grid[2][2];

    // Check if I won
    if (
        thirdColumnFirstRow != " " && 
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
    
    if (firstColumnFirstRow !== " " &&
        firstColumnFirstRow == secondColumnSecondRow &&
        firstColumnFirstRow == thirdColumnThirdRow) {
            //You won!
            return true;
        }         
        //You lost!
        return false;

};

let winsDiagonallyRight = function () {

    let thirdColumnFirstRow = grid[0][2];
    let secondColumnSecondRow = grid[1][1];
    let firstColumnThirdRow = grid[2][0];

    if (thirdColumnFirstRow != " " &&
        thirdColumnFirstRow == secondColumnSecondRow &&
        thirdColumnFirstRow == firstColumnThirdRow) {
            //You won!
            return true;
        }
        //You lost!
        return false;
}

//Check if the "selected" square is empty
let isEmpty = function (x, y) {
    if ( grid[y][x] === " " ) { 
        return true;
    }

    return false;
}

// If the square in the grid is empty, then let the player (assigned to X ) to fill in the square
let fillInGrid = function (player, x, y, button) {
    grid[y][x] = player; 
    $(`#${button}`).css('background-color','turquoise');
    $(`#${button}`).text(`${player}`);
    // Tmp print in console 
    printGridInConsole();

    // Update dom
}

// if current player didnt win, then switch player

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
        }        table+='<td>'+grid[i]+'</td>';
    }
    table+='</tr></table>';

    document.write(table);


let simulator = function(x, y) {
    executeMove(x, y)
}

// for (let i) {
//     create html button
//     add on click feature to button
//         - put in any functions you want run upon click
//     append button to parent div

//     let $button = $('<div class= id=#${i}')
//     $(`#${i}`).on(click function () {

//     }
// }

//add click feature to on browser
$('#0').on('click', function() {
    executeMove(0,0,0)
});
$('#1').on('click', function() {
    executeMove(1,0,1)
});    
$('#2').on('click', function() {
    executeMove(2,0,2)
});   
$('#3').on('click', function() {
    executeMove(0,1,3)
});
$('#4').on('click', function() {
    executeMove(1,1,4)
});    
$('#5').on('click', function() {
    executeMove(2,1,5)
});   
$('#6').on('click', function() {
    executeMove(0,2,6)
});
$('#7').on('click', function() {
    executeMove(1,2,7)
});    
$('#8').on('click', function() {
    executeMove(2,2,8)
});   