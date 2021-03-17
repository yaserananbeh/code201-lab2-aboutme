'use strict';
let score= 0 ;
let theEndScore = document.getElementById('theEndScore');
let thePercentage = document.getElementById('thePercentage');
let userName =prompt('Welcome My friend Let\'s see if you know information about the website\'s author Firstly Enter Your name please ').toUpperCase();
console.log('The user Name Is : ' + userName); //greeting message

// alert contains the instructions
alert('Welcome Mr/Ms : '+ userName +'\nPLEASE ANSWER The Upcoming questions WITH "YES" OR "NO" ONLY, don\'t worry about the letters case ');

//The function of question 1
function question1()
{
  let firstquestion= prompt('Do you think My name is Yaser  (Yes/No)?').toUpperCase();

  //while loop to insure the user inputs just yes or no
  while(firstquestion !== 'YES' && firstquestion!== 'NO'){
    firstquestion= prompt('Do you think My name is Yaser  (Yes/No)?').toUpperCase();
  }

  //print out the the respose in the console
  console.log('first question answer Is : '+ firstquestion);
  // if statment to alert messages depends on user input
  if(firstquestion==='YES'){
    console.log('You got the right answer');
    alert('You got the right answer');
    score++;
  }
  else{
    console.log('Really, You Killed me (WRONG) ');
    alert('Really, You Killed me (WRONG) ' );
  }

}


//The function of question 2
function question2()
{
  let secondquestion= prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No)?').toUpperCase();

  while(secondquestion !== 'YES' && secondquestion!== 'NO'){
    secondquestion= prompt('Do you think my age is  65 years old like "Bill Gates" (Yes/No)?').toUpperCase();
  }
  console.log('Third question answer Is : '+ secondquestion);

  if(secondquestion==='NO'){
    console.log('You got the right answer');
    alert('You got the right answer');
    score++;
  }
  else{
    console.log('Really, You Killed me (WRONG) ');
    alert('Really, You Killed me (WRONG) ' );
  }
}

//The function of question 3
function question3()
{
  let thirdquestion= prompt('My favorite color is mshmeshi ! (Yes/No)?').toUpperCase();
  while(thirdquestion !== 'YES' && thirdquestion!== 'NO'){
    thirdquestion= prompt('My favorite color is mshmeshi ! (Yes/No)?').toUpperCase();
  }
  console.log('Third question answer Is : '+ thirdquestion);
  if(thirdquestion==='NO'){
    console.log('You got the right answer');
    alert('You got the right answer');
    score++;
  }
  else{
    console.log('Really, You Killed me (WRONG) ');
    alert('Really, You Killed me (WRONG) ' );
  }
}

//The function of question 4
function question4()
{
  let fourthquestion= prompt('Do you think my favorite dish is "Molokhia" (Yes/No)?').toUpperCase();
  while(fourthquestion !== 'YES' && fourthquestion!== 'NO'){
    fourthquestion= prompt('Do you think my favorite dish is "Molokhia" (Yes/No)?').toUpperCase();
  }
  console.log('Fourth question answer Is : '+ fourthquestion);
  if(fourthquestion==='YES'){
    console.log('You got the right answer');
    alert('You got the right answer');
    score++;
  }
  else{
    console.log('Really, You Killed me (WRONG) ');
    alert('Really, You Killed me (WRONG) ' );
  }
}

//The function of question 5
function question5()
{
  let fifthquestion= prompt('Do you think I\'m a Pilot  (Yes/No)? ').toUpperCase();
  while(fifthquestion !== 'YES' && fifthquestion!== 'NO'){
    fifthquestion= prompt('Do you think I\'m a Pilot  (Yes/No)? ').toUpperCase();
  }
  console.log('Last question answer Is : '+ fifthquestion);

  if(fifthquestion==='NO'){
    console.log('You got the right answer');
    alert('You got the right answer');
    score++;
  }
  else{
    console.log('Really, You Killed me (WRONG) ');
    alert('Really, You Killed me (WRONG) ' );
  }
}


//The function of question 6
function question6()
{
  for(let i=4;i>0;i--){
    let prompt0=prompt('q6) Enter a number from 1-20  ('+i+' attempts left)');
    if(prompt0==='15'){
      alert('Horraaay! Correct answer');
      score++;
      break;
    }
    else if(prompt0<15){
      alert('too law');
    }
    else{
      alert('too high');
    }
  }
  alert('the correct answer is 15');
}

//The function of question 7
function question7()
{
  let arr=['BLUE','BLACK','RED'];
  for(let i=6;i>0;i--){
    let prompt0 = prompt('q7) Try to guess on of my favorate colors  ('+i+' attempts left)').toUpperCase();
    if(prompt0 === arr[0] || prompt0 === arr[1] || prompt0 ===arr[2]){
      alert('Horraaay! Correct answer *-*');
      score++;
      break;
    }

    else{
      alert('HEHEHE you are Wrong :\')');
    }
  }
  alert('the correct answers is '+arr[0]+' or '+arr[1]+' or '+arr[2]);
}




question1();
question2();
question3();
question4();
question5();
question6();
question7();
/*End the code that responsible about asking the user */

alert('your score is : '+ score);
theEndScore.innerHTML= score;
thePercentage.innerHTML=score*15-5+'%';



