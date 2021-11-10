# TicTacToe
The classic game of tic tac toe

I built this to practice implementing factory functions and to also learn about the minimax algorithm.

What is the minimax algorithm?
The minimax is a recursive algorithm that returns a value for all available moves in a two player, zero sum game. 
The current player would be the maximizer and the opponent is the minimizer.
If the maximizer wins, then a positive value is returned.
If the minimizer wins, then a negative value is returned.
When the minimax function is called, it first checks if the game state is terminal.
If it is terminal, it returns the appropriate value.
If it isn't terminal, then the algo allows the next player to make a move and then will call the minimax function on that move just played to get the value for it.
By adding a depth parameter to the function, you can determine which move will result in a win/loss sooner or later, thus giving you the optimum move

Why not just let the AI choose a cell at random?
implementing will ensure that the AI always chooses the best possible move and will be unbeatable. 
The best outcome you can hope for is to get a draw

Where else could you use the minimax algorithm?
This algorithm will work for any two player, zero sum games such as chess, checkers, connect 4 etc. 
It's important to note that with game that have a lot of possible paths and outcomes like chess, you'll want to limit how deep the algorithm goes to get a value.
In chess There are 288+ billion different possible positions after four moves apiece, so you don't really want to go through all of those.
For games with large posible outcomes like chess, you'll want to implement alpha beta pruning.

What is Alpha, beta pruning? 
Alpha Beta pruning is a way for you to reduce the number of nodes you need to evaluate by ignoring moves that won't return a better result than a previous move
