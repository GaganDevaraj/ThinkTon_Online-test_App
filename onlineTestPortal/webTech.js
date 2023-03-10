var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) A webpage displays a picture. What tag was used to display that picture?";
choices[0] = new Array();
choices[0][0] = " picture";
choices[0][1] = " image";
choices[0][2] = " img";
choices[0][3] = " src";
answers[0] = choices[0][2];

questions[1] = "2) b tag makes the enclosed text bold. What is other tag to make text bold?";
choices[1] = new Array();
choices[1][0] = " strong";
choices[1][1] = " dar";
choices[1][2] = " black";
choices[1][3] = " emp";
answers[1] = choices[1][0];

questions[2] = "3) Which tag inserts a line horizontally on your web page?";
choices[2] = new Array();
choices[2][0] = " hr";
choices[2][1] = " line";
choices[2][2] = " line direction=”horizontal";
choices[2][3] = " tr";
answers[2] = choices[2][0];

questions[3] = "4) What does CSS stand for?";
choices[3] = new Array();
choices[3][0] = " Computer Style Sheets";
choices[3][1] = " Colorful Style Sheets";
choices[3][2] = " Cascading Style Sheets";
choices[3][3] = " Creative Style Sheets";
answers[3] = choices[3][2];

questions[4] = "5) How can you make a bulleted list?";
choices[4] = new Array();
choices[4][0] = " list";
choices[4][1] = " nl";
choices[4][2] = " ul";
choices[4][3] = " ol";
answers[4] = choices[4][2];

questions[5] = "6) How can you make a numbered list?";
choices[5] = new Array();
choices[5][0] = " dl";
choices[5][1] = " ol";
choices[5][2] = " list";
choices[5][3] = " ul";
answers[5] = choices[5][1];

questions[6] = "7) Choose the correct HTML tag for the smallest size heading?";
choices[6] = new Array();
choices[6][0] = " heading";
choices[6][1] = " h6";
choices[6][2] = " h1";
choices[6][3] = " head";
answers[6] = choices[6][2];

questions[7] = "8) What does vlink attribute mean?";
choices[7] = new Array();
choices[7][0] = " visited link";
choices[7][1] = " virtual link";
choices[7][2] = " very good link";
choices[7][3] = " active link";
answers[7] = choices[7][0];

questions[8] = "9) JavaScript is __________";
choices[8] = new Array();
choices[8][0] = " the same as Java";
choices[8][1] = " kind of like Java";
choices[8][2] = " different than Java";
choices[8][3] = " ther written part of Java";
answers[8] = choices[8][2];

questions[9] = "10) JavaScript is __________";
choices[9] = new Array();
choices[9][0] = " subjective";
choices[9][1] = " objective";
choices[9][2] = " evil";
choices[9][3] = " object based";
answers[9] = choices[9][3];

questions[10] = "11) To comment out a line in JavaScript __________";
choices[10] = new Array();
choices[10][0] = " Precede it with two forward slashes, i.e. '//'";
choices[10][1] = " Precede it with an asterisk and a forward slash, i.e. '*/'";
choices[10][2] = " Precede it with an asterisk, i.e. '*'";
choices[10][3] = " Precede it with a forward slash and an asterisk, i.e. '/*'";
answers[10] = choices[10][0];

questions[11] = "12) JavaScript can only run on Windows";
choices[11] = new Array();
choices[11][0] = " True";
choices[11][1] = " False";
answers[11] = choices[11][1];

questions[12] = "13) Semicolons are optional at the end of a JavaScript statement.";
choices[12] = new Array();
choices[12][0] = " True";
choices[12][1] = " False";
answers[12] = choices[12][0];

questions[13] = "14) The four basic data types are:";
choices[13] = new Array();
choices[13][0] = " strings, numbers, BooBoos, and nulls";
choices[13][1] = " strings, text, Booleans, and nulls";
choices[13][2] = " strings, numbers, Booleans, and nulls";
choices[13][3] = " strings, numbers, Booleans, and zeros";
answers[13] = choices[13][2];

questions[14] = "15) The four basic data types are:";
choices[14] = new Array();
choices[14][0] = " strings, numbers, BooBoos, and nulls";
choices[14][1] = " strings, text, Booleans, and nulls";
choices[14][2] = " strings, numbers, Booleans, and nulls";
choices[14][3] = " strings, numbers, Booleans, and zeros";
answers[14] = choices[14][2];


// response for getting 100%
response[0] = "Excellent, top marks!";
// response for getting 90% or more
response[1] = "Excellent, try again to get 100%!"
// response for getting 70% or more
response[2] = "Well done, that is a good score, can you do better?";
// response for getting over 50%
response[3] = "Nice one, you got more than half of the questions right, can you do better?";
// response for getting 40% or more
response[4] = "You got some questions right, you can do better!";
// response for getting 20% or more
response[5] = "You didn't do too well, why not try again!?";
// response for getting 10% or more
response[6] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[7] = "You didn't do too well, why not try again!?";
// response for getting 9% or less
response[8] = "You didn't do too well, why not try again!?";
// response for getting 9% or less
response[9] = "You didn't do too well, why not try again!?";
// response for getting 9% or less
response[10] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[11] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[12] = "That was pretty poor!  Try again to improve!";
// response for getting 9% or less
response[13] = "Oh dear, I think you need to go back to school (or try again)!";
// response for getting 9% or less
response[14] = "Oh dear, I think you need to go back to school (or try again)!";
// response for getting 9% or less
response[15] = "Oh dear, I think you need to go back to school (or try again)!";

