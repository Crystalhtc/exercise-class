/**
 * Arrays
 * 
 * always use camel case where needed
 * 
 * Make sure to write the question/instruction and then the answers below
 * 
 */

/**
 * Question 5 - concat two different arrays by using .concat() method
 * 
 * initialise the variable called `bag one` to an array containing the values:
 * phone, wallet, bottle
 * initialise another variable called `bag two` to an array containing the values:
 * book, pen, jacket
 * initialize concatenate the two arrays in the variable called `things`, with the `bag one` first then `bag two`.
 * Then console log out the variable `things`. Write a single line comment as to what will be displayed.
 *  
 */

var bagOne = ["phone", "wallet", "bottle"];
var bagTwo = ["book", "pen", "jacket"];

var things = bagOne.concat(bagTwo);
console.log(things); // [ 'phone', 'wallet', 'bottle', 'book', 'pen', 'jacket' ]

/**
 * Question 6 - create a 2 dimensions array that is 2-by-4. Grab some values out of this array to create a sentence using concatenation.
 * 
 * initialise the variable `student list` to a 2-Dimensional array that is 2-by-4 containing the values below:
 * 
 *          column[0]   column[1]     column[2]                                 column[3]
 * Row 1    Crystal     Cheung        Digital Design and Development            A01234567
 * Row 2    Henry       Chan          New Media Design and Web Development      A01234568
 * 
 * Based on the values stored in the 2D array called `student list, console log out the following sentence (use backticks):
 * The name of the first student is _Crystal_ _Cheung_, and her student number is _A01234567_. She is a student of the _Digital Design and Development program_.
 * 
 */

var studentList = [
    ["Crystal", "Cheung", "Digital Design and Development", "A01234567"],
    ["Henry", "Chan", "New Media Design and Web Development", "A01234568"]
];

console.log(`The name of the first student is ${studentList[0][0]} ${studentList[0][1]}, and her student number is ${studentList[0][3]}. She is a student of the ${studentList[0][2]} program.`);
// 
