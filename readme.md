### Technical Requirements

<!-- Your app must:

* **Render a game board in the browser**
* **Switch turns** between X and O (or whichever markers you select)
* **Visually display which side won** if a player gets three in a row or show a draw/"cat’s game" if neither wins
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript** for **DOM manipulation**
* **Deploy your game online**, where the rest of the world can access it
* Use **semantic markup** for HTML and CSS (adhere to best practices) -->


<!-- ****************************
background:
* one computer, 2 players
* 3 X 3 grid
    * Draw table in HTML?
    * Create 9 divs?
* assign player1 to use "0" always
* so player2 must then use "x"

Now start the game:

(A) player1's 1st turn:
* click any square in an empty grid and put in "0";

(B) player2's 1st turn:
* click a square in the grid, if empty, put "x" in a square; 
* otherwise, click another square in the grid that is empty;

(C) player1's 2nd turn:
* click a square in the grid, if empty, put "0" in a square; 
* otherwise, click another square in the grid that is empty;

(D) player2's 2nd turn:
* click a square in the grid, if empty, put "0" in a square; 
* otherwise, click another square in the grid that is empty;

(E) player1's 3rd turn (could be a winning case):
* click a square in the grid, if empty, put "0" in a square; 
* otherwise, click another square in the grid that is empty;
* Is this a winning case - check :
    (1) if all "0" are on one line 
        -   vertically; and
        -   horizontally
        -   diagonally
* If it is a winning game, display player1 has won;
* The game is finished;
* If it is NOT a winning game, then it's player2's 3rd turn.

(F) player2's 3rd turn (could be a winning case):
* click a square in the grid, if empty, put "x" in a square; 
* otherwise, click another square in the grid that is empty;
* Is this a winning case - check :
    (1) if all "0" are on one line 
        -   vertically; and
        -   horizontally
        -   diagonally
* If it is a winning game, display player2 has won;
* The game is finished;
* If it is NOT a winning game, then it's player1's 4th turn.

(G) repeat from step (E) and then step (F)

(H) if all squares are "filled", then display it's a draw. The game is then finished.



*  -->