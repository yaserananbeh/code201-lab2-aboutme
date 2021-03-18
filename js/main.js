'use strict';
let score = 0;
let theEndScore = document.getElementById('theEndScore');
let thePercentage = document.getElementById('thePercentage');
let userName = prompt('Welcome My friend Let\'s see if you know information about the website\'s author Firstly Enter Your name please ').toUpperCase();

// alert contains the instructions
alert('Welcome Mr/Ms : ' + userName + '\nPLEASE ANSWER The Upcoming questions WITH "YES/Y" OR "NO/N" ONLY, don\'t worry about the letters case ');

//The function of question 1
function question1() {
  let firstquestion = prompt('Do you think My name is Yaser  (Yes/No/N/Y)?').toUpperCase();

  //while loop to insure the user inputs just yes or no
  while (firstquestion !== 'YES' && firstquestion !== 'NO' && firstquestion !== 'N' && firstquestion !== 'Y') {
    firstquestion = prompt('Do you think My name is Yaser  (Yes/No/N/Y)?').toUpperCase();
  }

  // if statment to alert messages depends on user input
  if (firstquestion === 'YES' || firstquestion === 'Y') {
    alert('You got the right answer');
    score++;
  }
  else {
    alert('Really, You Killed me (WRONG) ');
  }

}

//The function of question 2
function question2() {
  let secondquestion = prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No/Y/N)?').toUpperCase();

  while (secondquestion !== 'YES' && secondquestion !== 'NO' && secondquestion !== 'N' && secondquestion !== 'Y') {
    secondquestion = prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No/Y/N)?').toUpperCase();
  }

  if (secondquestion === 'NO' || secondquestion === 'N') {
    alert('You got the right answer');
    score++;
  }
  else {
    alert('Really, You Killed me (WRONG) ');
  }
}

//The function of question 3
function question3() {
  let thirdquestion = prompt('My favorite color is mshmeshi ! (Yes/No/Y/N)?').toUpperCase();
  while (thirdquestion !== 'YES' && thirdquestion !== 'NO' && thirdquestion !== 'Y' && thirdquestion !== 'N') {
    thirdquestion = prompt('My favorite color is mshmeshi ! (Yes/No/Y/N)?').toUpperCase();
  }
  if (thirdquestion === 'NO' || thirdquestion === 'N') {
    alert('You got the right answer');
    score++;
  }
  else {
    alert('Really, You Killed me (WRONG) ');
  }
}

//The function of question 4
function question4() {
  let fourthquestion = prompt('Do you think my favorite dish is "Molokhia" (Yes/No/Y/N)?').toUpperCase();
  while (fourthquestion !== 'YES' && fourthquestion !== 'NO' && fourthquestion !== 'N' && fourthquestion !== 'Y') {
    fourthquestion = prompt('Do you think my favorite dish is "Molokhia" (Yes/No/Y/N)?').toUpperCase();
  }
  if (fourthquestion === 'YES' || fourthquestion === 'Y') {
    alert('You got the right answer');
    score++;
  }
  else {
    alert('Really, You Killed me (WRONG) ');
  }
}

//The function of question 5
function question5() {
  let fifthquestion = prompt('Do you think I\'m a Pilot  (Yes/No/Y/N)? ').toUpperCase();
  while (fifthquestion !== 'YES' && fifthquestion !== 'NO' && fifthquestion !== 'N' && fifthquestion !== 'Y') {
    fifthquestion = prompt('Do you think I\'m a Pilot  (Yes/No/Y/N)? ').toUpperCase();
  }

  if (fifthquestion === 'NO' || fifthquestion === 'N') {
    alert('You got the right answer');
    score++;
  }
  else {
    alert('Really, You Killed me (WRONG) ');
  }
}

//The function of question 6
function question6() {
  for (let i = 4; i > 0; i--) {
    let prompt0 = prompt('q6) Enter a number from 1-20  (' + i + ' attempts left)');
    if (prompt0 === '15') {
      alert('Horraaay! Correct answer');
      score++;
      break;
    }
    else if (prompt0 < 15) {
      alert('too law');
    }
    else if (prompt0 > 15) {
      alert('too high');
    }
    else {
      alert('Enter a namber we know what you are typing here');
    }
    if (i === 1) {
      alert('the correct answer is 15');
    }
  }

}

//The function of question 7
function question7() {
  let arr = ['BLUE', 'BLACK', 'RED'];
  for (let i = 6; i > 0; i--) {
    let prompt0 = prompt('q7) Try to guess on of my favorite colors  (' + i + ' attempts left)').toUpperCase();
    if (prompt0 === arr[0] || prompt0 === arr[1] || prompt0 === arr[2]) {
      alert('Horraaay! Correct answer *-*');
      score++;
      break;
    }

    else {
      alert('HEHEHE you are Wrong :\')');
    }
  }
  alert('the correct answers is ' + arr[0] + ' or ' + arr[1] + ' or ' + arr[2]);
}

/** start invoke the functions  */
question1();
question2();
question3();
question4();
question5();
question6();
question7();
/*End the code that responsible about asking the user */

alert('your score is : ' + score);
theEndScore.innerHTML = score;
thePercentage.innerHTML = score * 15 - 5 + '%';

