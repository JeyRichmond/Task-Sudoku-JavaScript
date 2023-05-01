# Task-Sudoku-JavaScript

Sudoku Test (JS)


Description:
The Sudoku is a game played on a 9x9 grid. The objective of the game is to fill all the cells of the grid with numbers from 1 to 9, so that each column, each row, and each of the nine 3x3 sub-grids (also known as blocks) contains all the numbers from 1 to 9.

The goal of this task is to implement a function that validates if a given Sudoku board is a valid solution. The function validSolution() receives a two-dimensional array representing a Sudoku board and returns true if it is a valid solution, or false otherwise. The cells of the board can also contain the value 0, which represents an empty cell. Boards containing one or more zeros are considered invalid solutions.


Requirements:
To complete this task, you will need to write a function called validSolution that takes a 2-dimensional array as its argument. The array will represent the Sudoku board, and will always have a size of 9 x 9. Each element in the array will be an integer between 0 and 9, where 0 represents an empty cell.

The function should check whether the board is a valid solution according to the rules of Sudoku. Specifically, it should check that each row, column, and 3 x 3 sub-grid contains exactly one occurrence of each integer between 1 and 9.


validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
]); // => true

validSolution([
  [5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 0, 3, 4, 8],
  [1, 0, 0, 3, 4, 2, 5, 6, 0],
  [8, 5, 9, 7, 6, 1, 0, 2, 0],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 0, 1, 5, 3, 7, 2, 1, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 0, 0, 4, 8, 1, 1, 7, 9]
]); // => false
