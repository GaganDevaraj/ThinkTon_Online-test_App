var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) The operation of processing each element in the list is known as ......";
choices[0] = new Array();
choices[0][0] = " sorting";
choices[0][1] = " merging";
choices[0][2] = " inserting";
choices[0][3] = " traversal";
answers[0] = choices[0][3];

questions[1] = "2) Other name for directed graph is ..........";
choices[1] = new Array();
choices[1][0] = " Direct graph";
choices[1][1] = " Digraph";
choices[1][2] = " Dir-graph";
choices[1][3] = " Digraph";
answers[1] = choices[1][1];

questions[2] = "3) Binary trees with threads are called as .......";
choices[2] = new Array();
choices[2][0] = " Threaded trees";
choices[2][1] = " Pointer trees";
choices[2][2] = " Special trees";
choices[2][3] = " Special pointer trees";
answers[2] = choices[2][0];

questions[3] = "4) Graph G is .............. if for any pair u, v of nodes in G there is a path from u to v or path from v to u.";
choices[3] = new Array();
choices[3][0] = " Leterally connected";
choices[3][1] = " Widely Connected";
choices[3][2] = " Unliterally connected";
choices[3][3] = " Literally connected";
answers[3] = choices[3][2];

questions[4] = "5) In Binary trees nodes with no successor are called ......";
choices[4] = new Array();
choices[4][0] = " End nodes";
choices[4][1] = " Terminal nodes";
choices[4][2] = " Final nodes";
choices[4][3] = " Last nodes";
answers[4] = choices[4][1];

questions[5] = "6) A connected graph T without any cycles is called ........";
choices[5] = new Array();
choices[5][0] = " free graph";
choices[5][1] = " no cycle graph";
choices[5][2] = " non cycle graph";
choices[5][3] = " circular graph";
answers[5] = choices[5][0];

questions[6] = "7) Trees are said .......... if they are similar and have same contents at corresponding nodes";
choices[6] = new Array();
choices[6][0] = " Duplicate";
choices[6][1] = " Carbon copy";
choices[6][2] = " Replica";
choices[6][3] = " Copies";
answers[6] = choices[6][3];

questions[7] = "8) A connected graph T without any cycles is called a ........";
choices[7] = new Array();
choices[7][0] = " A tree graph";
choices[7][1] = " Free tree";
choices[7][2] = " A tree d";
choices[7][3] = " All of the above";
answers[7] = choices[7][3];

questions[8] = "9) Every node N in a binary tree T except the root has a unique parent called the ......... of N";
choices[8] = new Array();
choices[8][0] = " Antecedents";
choices[8][1] = " Predecessor";
choices[8][2] = " Forerunner";
choices[8][3] = " Precursor";
answers[8] = choices[8][1];

questions[9] = "10) In a graph if E=(u,v) means ......";
choices[9] = new Array();
choices[9][0] = " u is adjacent to v but v is not adjacent to u";
choices[9][1] = " e begins at u and ends at v";
choices[9][2] = " u is processor and v is successor";
choices[9][3] = " both b and c";
answers[9] = choices[9][1];

questions[10] = "11) Sequential representation of binary tree uses ........";
choices[10] = new Array();
choices[10][0] = " Array with pointers";
choices[10][1] = " Single linear array";
choices[10][2] = " Two dimentional arrays";
choices[10][3] = " Three dimentional arrays";
answers[10] = choices[10][3];

questions[11] = "12) In a graph if e=[u,v], Then u and v are called ........";
choices[11] = new Array();
choices[11][0] = " End points of e";
choices[11][1] = " Adjacent nodes";
choices[11][2] = " Neighbours";
choices[11][3] = " All of the above";
answers[11] = choices[11][0];

questions[12] = "13) TREE[1]=NULL indicates tree is ........";
choices[12] = new Array();
choices[12][0] = " Overflow";
choices[12][1] = " Underflow";
choices[12][2] = " Empty";
choices[12][3] = " Full";
answers[12] = choices[12][2];

questions[13] = "14) A binary tree whose every node has either zero or two children is called .......";
choices[13] = new Array();
choices[13][0] = " complete binary tree";
choices[13][1] = " binary search tree";
choices[13][2] = " extended binary tree";
choices[13][3] = " data structure";
answers[13] = choices[13][2];

questions[14] = "15) Linked representation of binary tree needs ......... parallel arrays.";
choices[14] = new Array();
choices[14][0] = " 4";
choices[14][1] = " 2";
choices[14][2] = " 3";
choices[14][3] = " 5";
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

