var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1)  Who is father of C Language?";
choices[0] = new Array();
choices[0][0] = " Bjarne Stroustrup";
choices[0][1] = " Dennis Ritchie";
choices[0][2] = " James A. Gosling";
choices[0][3] = " Dr. E.F. Codd";
answers[0] = choices[0][1];

questions[1] = "2) C Language developed at _____";
choices[1] = new Array();
choices[1][0] = " AT & T's Bell Laboratories of USA in 1972";
choices[1][1] = " AT & T's Bell Laboratories of USA in 1970";
choices[1][2] = " Sun Microsystems in 1973";
choices[1][3] = " Cambridge University in 1972";
answers[1] = choices[1][0];

questions[2] = "3) For 16‐bit compiler allowable range for integer constants is ______";
choices[2] = new Array();
choices[2][0] = " -3.4e38 to 3.4e38";
choices[2][1] = " -32767 to 32768";
choices[2][2] = " -32768 to 32767";
choices[2][3] = " -32668 to 32667";
answers[2] = choices[2][0];

questions[3] = "4) C programs are converted into machine language with the help of";
choices[3] = new Array();
choices[3][0] = " An Editor";
choices[3][1] = " A compiler";
choices[3][2] = " An operating system";
choices[3][3] = " None of the above";
answers[3] = choices[3][1];

questions[4] = "5) A C variable cannot start with";
choices[4] = new Array();
choices[4][0] = " An alphabet";
choices[4][1] = " A number";
choices[4][2] = " A special symbol other than underscore";
choices[4][3] = " both (b) and (c)";
answers[4] = choices[4][3];

questions[5] = "6) What is an array?";
choices[5] = new Array();
choices[5][0] = " An array is a collection of variables that are of the dissimilar data type";
choices[5][1] = " An array is a collection of variables that are of the same data type";
choices[5][2] = " An array is not a collection of variables that are of the same data type";
choices[5][3] = " None of the above";
answers[5] = choices[5][1];

questions[6] = "7) An array elements are always stored in _________ memory locations";
choices[6] = new Array();
choices[6][0] = " Sequential";
choices[6][1] = " Random";
choices[6][2] = " Sequential and Random";
choices[6][3] = " None of the above";
answers[6] = choices[6][0];

questions[7] = "8) perror( ) function used to ?";
choices[7] = new Array();
choices[7][0] = " Work same as printf()";
choices[7][1] = " prints the error message specified by the compiler";
choices[7][2] = " prints the garbage value assigned by the compiler";
choices[7][3] = " None of the above";
answers[7] = choices[7][1];

questions[8] = "9) Bitwise operators can operate upon?";
choices[8] = new Array();
choices[8][0] = " double and chars";
choices[8][1] = " floats and doubles";
choices[8][2] = " ints and floats";
choices[8][3] = " ints and chars";
answers[8] = choices[8][3];

questions[9] = "10) What is C Tokens?";
choices[9] = new Array();
choices[9][0] = " The smallest individual units of c program";
choices[9][1] = " The basic element recognized by the compiler";
choices[9][2] = " The largest individual units of program";
choices[9][3] = " A & B Both";
answers[9] = choices[9][3];

questions[10] = "11) What is Keywords?";
choices[10] = new Array();
choices[10][0] = " Keywords have some predefine meanings and these meanings can be changed";
choices[10][1] = " Keywords have some unknown meanings and these meanings cannot be changed";
choices[10][2] = " Keywords have some predefine meanings and these meanings cannot be changed";
choices[10][3] = " None of the above";
answers[10] = choices[10][2];

questions[11] = "12) What is constant?";
choices[11] = new Array();
choices[11][0] = " Constants have fixed values that do not change during the execution of a program";
choices[11][1] = " Constants have fixed values that change during the execution of a program";
choices[11][2] = " Constants have unknown values that may be change during the execution of a program";
choices[11][3] = " None of the above";
answers[11] = choices[11][0];

questions[12] = "13) Which is the right way to declare constant in C?";
choices[12] = new Array();
choices[12][0] = " int constant var =10;";
choices[12][1] = " int const var = 10;";
choices[12][1] = " const int var = 10;";
choices[12][1] = " B & C Both";
answers[12] = choices[12][3];

questions[13] = "14) In switch statement, each case instance value must be _______?";
choices[13] = new Array();
choices[13][0] = " Constant";
choices[13][1] = " Variable";
choices[13][2] = " Special Symbol";
choices[13][3] = " None of the above";
answers[13] = choices[13][0];

questions[14] = "15) What is the work of break keyword?";
choices[14] = new Array();
choices[14][0] = " Halt execution of program";
choices[14][1] = " Restart execution of program";
choices[14][2] = " Exit from loop or switch statement";
choices[14][3] = " None of the above";
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

