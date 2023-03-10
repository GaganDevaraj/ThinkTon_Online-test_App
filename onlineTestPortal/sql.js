var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) You can add a row using SQL in a database with which of the following?";
choices[0] = new Array();
choices[0][0] = " ADD ";
choices[0][1] = " CREATE";
choices[0][2] = " INSERT ";
choices[0][3] = " MAKE";
answers[0] = choices[0][3];

questions[1] = "2) The command to remove rows from a table 'CUSTOMER' is:";
choices[1] = new Array();
choices[1][0] = " REMOVE FROM CUSTOMER";
choices[1][1] = " DROP FROM CUSTOMER";
choices[1][2] = " DELETE FROM CUSTOMER WHERE";
choices[1][3] = " UPDATE FROM CUSTOMER";
answers[1] = choices[1][3];

questions[2] = "3) The SQL WHERE clause";
choices[2] = new Array();
choices[2][0] = " limits the column data that are returned.";
choices[2][1] = " limits the row data are returned.";
choices[2][2] = " Both A and B are correct.";
choices[2][3] = " Neither A nor B are correct.";
answers[2] = choices[2][1];

questions[3] = "4) Which of the following is the original purpose of SQL?";
choices[3] = new Array();
choices[3][0] = " To specify the syntax and semantics of SQL data definition language";
choices[3][1] = " To specify the syntax and semantics of SQL manipulation language";
choices[3][2] = " To define the data structures";
choices[3][3] = " All of the above.";
answers[3] = choices[3][3];

questions[4] = "5) The wildcard in a WHERE clause is useful when?";
choices[4] = new Array();
choices[4][0] = " An exact match is necessary in a SELECT statement.";
choices[4][1] = " An exact match is not possible in a SELECT statement.";
choices[4][2] = " An exact match is necessary in a CREATE statement.";
choices[4][3] = " An exact match is not possible in a CREATE statement.";
answers[4] = choices[4][1];

questions[5] = "6) A view is which of the following?";
choices[5] = new Array();
choices[5][0] = " A virtual table that can be accessed via SQL commands";
choices[5][1] = " A virtual table that cannot be accessed via SQL commands";
choices[5][2] = " A base table that can be accessed via SQL commands";
choices[5][3] = " A base table that cannot be accessed via SQL commands";
answers[5] = choices[5][0];

questions[6] = "7) The command to eliminate a table from a database is:";
choices[6] = new Array();
choices[6][0] = " REMOVE TABLE CUSTOMER;";
choices[6][1] = " DROP TABLE CUSTOMER;";
choices[6][2] = " DELETE TABLE CUSTOMER;";
choices[6][3] = " UPDATE TABLE CUSTOMER;";
answers[6] = choices[6][2];

questions[7] = "8) ON UPDATE CASCADE ensures which of the following?";
choices[7] = new Array();
choices[7][0] = " Normalization";
choices[7][1] = " Data Integrity";
choices[7][2] = " Materialized Views";
choices[7][3] = " All of the above.";
answers[7] = choices[7][1];

questions[8] = "9) Which of the following is valid SQL for an Index?";
choices[8] = new Array();
choices[8][0] = " CREATE INDEX ID;";
choices[8][1] = " CHANGE INDEX ID;";
choices[8][2] = " ADD INDEX ID;";
choices[8][3] = " REMOVE INDEX ID;";
answers[8] = choices[8][0];

questions[9] = "10) The SQL keyword(s) ________ is used with wildcards.";
choices[9] = new Array();
choices[9][0] = " LIKE only";
choices[9][1] = " IN only";
choices[9][2] = " NOT IN only";
choices[9][3] = " IN and NOT IN";
answers[9] = choices[9][0];

questions[10] = "11) Which of the following is the correct order of keywords for SQL SELECT statements?";
choices[10] = new Array();
choices[10][0] = " SELECT, FROM, WHERE";
choices[10][1] = " FROM, WHERE, SELECT";
choices[10][2] = " WHERE, FROM,SELECT";
choices[10][3] = " SELECT,WHERE,FROM";
answers[10] = choices[10][0];

questions[11] = "12) A subquery in an SQL SELECT statement is enclosed in:";
choices[11] = new Array();
choices[11][0] = " 10";
choices[11][1] = " 12";
choices[11][2] = " 8";
choices[11][3] = " 16";
answers[11] = choices[11][0];

questions[12] = "13) A subquery in an SQL SELECT statement is enclosed in:";
choices[12] = new Array();
choices[12][0] = " braces -- {...}.";
choices[12][1] = " CAPITAL LETTERS.";
choices[12][2] = " parenthesis -- (...) .";
choices[12][3] = " brackets -- [...].";
answers[12] = choices[12][2];

questions[13] = "14) Which of the following are the five built-in functions provided by SQL?";
choices[13] = new Array();
choices[13][0] = " COUNT, SUM, AVG, MAX, MIN";
choices[13][1] = " SUM, AVG, MIN, MAX, MULT";
choices[13][2] = " SUM, AVG, MULT, DIV, MIN";
choices[13][3] = " SUM, AVG, MIN, MAX, NAME";
answers[13] = choices[13][0];

questions[14] = "15) The HAVING clause does which of the following?";
choices[14] = new Array();
choices[14][0] = " Acts like a WHERE clause but is used for groups rather than rows.";
choices[14][1] = " Acts like a WHERE clause but is used for rows rather than columns.";
choices[14][2] = " Acts like a WHERE clause but is used for columns rather than groups.";
choices[14][3] = " Acts EXACTLY like a WHERE clause.";
answers[14] = choices[14][0];


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


