/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
// const votingAge = 18;
// if (age > votingAge){
//     console.log("true"); 
// }





//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

// let x = 5;
// let y = 3;
// if (y > 1){
//     x += y;
//     console.log(x);
// }




//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

// Number("1999");




//Task d: Write a function to multiply a*b 

// function mult(a,b){
//     return (a*b);
// }




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

// function dogYears(age){
//     console.log(age*7);
// }



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// function dogFeeder(weight, years){
//     if (years >= 1){
//         if (weight <= 5){
//             return (weight*.05);
//         } else if (weight >= 6 && weight <= 10){
//             return (weight*.04);
//         }else if (weight >= 11 && weight <= 15){
//             console.log(weight*.03);
//         }else if (weight > 15){
//             return (weight*.02);
//         }

//     }else if (years >= (2/12) && years <= (4/12)){
//         return (weight*.1);
//     }else if (years >= (4/12) && years <= (7/12)){
//         return (weight*.05);
//     }else if (years >= (7/12) && years < 1){
//         return (weight*.04);
//     }
    
// }  

// dogFeeder(15,1)





/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

// function playRPS(choice){
//     if (choice === "rock"){
//         gameOn(1);
//     }else if (choice === "paper"){
//         gameOn(2);
//     }else{
//         gameOn(3);
//     }

//     function gameOn(me){
//     let opponent = Math.floor((Math.random()*3)+1);
//     if (opponent === me){
//         console.log("tie");
//     } else if (opponent === 1 && me === 2){
//         console.log("You won!");
//     } else if (opponent === 1 && me === 3){
//         console.log("You lost");
//     } else if (opponent === 2 && me === 1){
//         console.log("You lost");
//     } else if (opponent === 2 && me === 3){
//         console.log("You won");
//     } else if (opponent === 3 && me === 1){
//         console.log("You won!");
//     } else if (opponent === 3 && me === 2){
//         console.log("You lost");
//     }
//     }
// }

// playRPS("rock");

  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

// function kmToMiles(km){
//     console.log(km*0.621371);
// }

// kmToMiles(10);



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
// const feetToCm =(feet) => console.log(feet*30.48);

// feetToCm(15);


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
// function annoyingSong(number){
//     while (number > 0){
//         number -= 1;
//         console.log(number);      
//     }
// }

// annoyingSong(5);



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
// function gradeCalc(){
//     const num = Math.round(Math.random()*100)
//     console.log(num)
//     if (num >= 90){
//         console.log("A");
//     } else if (num >= 80 && num < 90){
//         console.log("B");
//     }else if (num >= 70 && num < 80){
//         console.log("C");
//     } else if (num >= 60 && num < 70){
//         console.log("D");
//     } else if (num < 60){
//         console.log("F");
//     }
// }

// gradeCalc();
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





