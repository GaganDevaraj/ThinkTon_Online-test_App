var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();

// To add more questions, just follow the format below.

questions[0] = "1) What will be the fraction of 20%";
choices[0] = new Array();
choices[0][0] = " 1/4";
choices[0][1] = " 1/5";
choices[0][2] = " 1/10";
choices[0][3] = " None of above";
answers[0] = choices[0][1];

questions[1] = "2) What will be the fraction of 4%";
choices[1] = new Array();
choices[1][0] = " 1/20";
choices[1][1] = " 1/50";
choices[1][2] = " 1/75";
choices[1][3] = " 1/25";
answers[1] = choices[1][3];

questions[2] = "3) The ratio 5:20 expressed as percent equals to";
choices[2] = new Array();
choices[2][0] = " 50 %";
choices[2][1] = " 125 %";
choices[2][2] = " 25 %";
choices[2][3] = " None of above";
answers[2] = choices[2][2];

questions[3] = "4) 2.09 can be expressed in terms of percentage as";
choices[3] = new Array();
choices[3][0] = " 2.09%";
choices[3][1] = " 20.9%";
choices[3][2] = " 209%";
choices[3][3] = " 0.209%";
answers[3] = choices[3][2];

questions[4] = "5) Half of 1 percent written as decimal is";
choices[4] = new Array();
choices[4][0] = " 5";
choices[4][1] = " 0.5";
choices[4][2] = " 0.05";
choices[4][3] = " 0.005";
answers[4] = choices[4][3];

questions[5] = "6) What is 15 percent of 34";
choices[5] = new Array();
choices[5][0] = " 5.10";
choices[5][1] = " 4.10";
choices[5][2] = " 3.10";
choices[5][3] = " 2.10";
answers[5] = choices[5][0];

questions[6] = "7) Evaluate 28% of 450 + 45% of 280";
choices[6] = new Array();
choices[6][0] = " 232";
choices[6][1] = " 242";
choices[6][2] = " 252";
choices[6][3] = " 262";
answers[6] = choices[6][2];

questions[7] = "8) 2 is what percent of 50";
choices[7] = new Array();
choices[7][0] = " 2%";
choices[7][1] = " 4%";
choices[7][2] = " 6%";
choices[7][3] = " 8%";
answers[7] = choices[7][1];

questions[8] = "9) 1/2 is what percent of 1/3";
choices[8] = new Array();
choices[8][0] = " 150%";
choices[8][1] = " 200%";
choices[8][2] = " 250%";
choices[8][3] = " 300%";
answers[8] = choices[8][0];

questions[9] = "10) 88% of 370 + 24% of 210 - x = 118";
choices[9] = new Array();
choices[9][0] = " 150";
choices[9][1] = " 250";
choices[9][2] = " 158";
choices[9][3] = " 258";
answers[9] = choices[9][3];

questions[10] = "11) An inspector rejects 0.08% of the meters as defective, How many meters he examine to reject 2 meteres";
choices[10] = new Array();
choices[10][0] = " 1200";
choices[10][1] = " 2400";
choices[10][2] = " 1400";
choices[10][3] = " 2500";
answers[10] = choices[10][3];

questions[11] = "12) If sales tax is reduced from 5% to 4%, then what difference it will make if you purchase an item of Rs. 1000";
choices[11] = new Array();
choices[11][0] = " 10";
choices[11][1] = " 20";
choices[11][2] = " 30";
choices[11][3] = " 40";
answers[11] = choices[11][0];

questions[12] = "13) In expressing a length of 81.472 km as nearly as possible with the three significant digits, find the percentage error";
choices[12] = new Array();
choices[12][0] = " 0.35%";
choices[12][1] = " 0.34%";
choices[12][2] = " 0.034%";
choices[12][3] = " 0.035%";
answers[12] = choices[12][2];

questions[13] = "14) In an election between two candidates, 75 % of the voters cast their votes, out of which 2% of the votes were <br> &nbsp &nbsp &nbsp declared invalid. A candidate got 9261 votes which were 75% of the total valid votes. <br> &nbsp &nbsp &nbsp Find the total number of votes.";
choices[13] = new Array();
choices[13][0] = " 16800";
choices[13][1] = " 15800";
choices[13][2] = " 16700";
choices[13][3] = " 15700";
answers[13] = choices[13][0];

questions[14] = "15) If 15% of 40 is greater than 25% of a number by 2, the number is";
choices[14] = new Array();
choices[14][0] = " 14";
choices[14][1] = " 16";
choices[14][2] = " 18";
choices[14][3] = " 20";
answers[14] = choices[14][1];


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

