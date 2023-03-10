var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) Which of these is not a interface in the Collections Framework?";
choices[0] = new Array();
choices[0][0] = " Collection ";
choices[0][1] = " Group";
choices[0][2] = " Set ";
choices[0][3] = " List";
answers[0] = choices[0][1];

questions[1] = "2) Which interface restricts duplicate elements?";
choices[1] = new Array();
choices[1][0] = " Set";
choices[1][1] = " List";
choices[1][2] = " Map";
choices[1][3] = " (All of these)";
answers[1] = choices[1][0];

questions[2] = "3) Which of these collection class has the ability to grow dynamically?";
choices[2] = new Array();
choices[2][0] = " Array";
choices[2][1] = " Arrays";
choices[2][2] = " ArrayList";
choices[2][3] = " (None of these)";
answers[2] = choices[2][2];

questions[3] = "4) The accuracy and efficiency of a HashMap can be guaranteed with:";
choices[3] = new Array();
choices[3][0] = " override equals method";
choices[3][1] = " override hashCode method";
choices[3][2] = " (None of these)";
choices[3][3] = " (All of these)";
answers[3] = choices[3][3];

questions[4] = "5) A HashMap allows the existence of:";
choices[4] = new Array();
choices[4][0] = " null values";
choices[4][1] = " one null key";
choices[4][2] = " (None of these)";
choices[4][3] = " (All of these)";
answers[4] = choices[4][3];

questions[5] = "6) What implementation of Iterator can traverse a collection in both directions?";
choices[5] = new Array();
choices[5][0] = " Iterator";
choices[5][1] = " ListIterator";
choices[5][2] = " SetIterator";
choices[5][3] = " MapIterator";
answers[5] = choices[5][1];

questions[6] = "7) The Comparable interface contains which called?";
choices[6] = new Array();
choices[6][0] = " toCompare";
choices[6][1] = " compare";
choices[6][2] = " compareTo";
choices[6][3] = " compareWith";
answers[6] = choices[6][2];

questions[7] = "8) Which is faster and uses less memory?";
choices[7] = new Array();
choices[7][0] = " ListEnumeration";
choices[7][1] = " Iterator";
choices[7][2] = " Enumeration";
choices[7][3] = " ListIterator";
answers[7] = choices[7][2];

questions[8] = "9) What Iterator can throw a ConcurrentModificationException?";
choices[8] = new Array();
choices[8][0] = " Fail-fast Iterators";
choices[8][1] = " Fail-safe Iterators";
choices[8][2] = " All of these";
choices[8][3] = " None of these";
answers[8] = choices[8][0];

questions[9] = "10) What is the default number of Partitions/segments in Concurrent Hash Map?";
choices[9] = new Array();
choices[9][0] = " 12";
choices[9][1] = " 32";
choices[9][2] = " 4";
choices[9][3] = " 16";
answers[9] = choices[9][3];

questions[10] = "11) Which is best suited to a multi-threaded environment?";
choices[10] = new Array();
choices[10][0] = " WeakHashMap";
choices[10][1] = " Hashtable";
choices[10][2] = " HashMap";
choices[10][3] = " ConcurrentHashMap";
answers[10] = choices[10][3];

questions[11] = "12) The default capacity of a Vector is:";
choices[11] = new Array();
choices[11][0] = " 10";
choices[11][1] = " 12";
choices[11][2] = " 8";
choices[11][3] = " 16";
answers[11] = choices[11][0];

questions[12] = "13) Which does NOT implement the Collection interface?";
choices[12] = new Array();
choices[12][0] = " List";
choices[12][1] = " Map";
choices[12][2] = " Set";
choices[12][3] = " None of these";
answers[12] = choices[12][1];

questions[13] = "14) The default capacity of a ArrayList is:";
choices[13] = new Array();
choices[13][0] = " 12";
choices[13][1] = " 16";
choices[13][2] = " 1";
choices[13][3] = " 10";
answers[13] = choices[13][3];

questions[14] = "15) Which provides better performance for the insertion and removal from the middle of the list?";
choices[14] = new Array();
choices[14][0] = " Vector";
choices[14][1] = " ArrayList";
choices[14][2] = " LinkedList";
choices[14][3] = " All of these";
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

