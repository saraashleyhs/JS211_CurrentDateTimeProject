// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const convertNum = (num1) => num1.toString();
console.log(convertNum(45));

// Write a JavaScript program to convert a string to the number.

const convertStr = (str1) => parseInt(str1, 10);
console.log(convertStr('454'));

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  console.log('typeof true', typeof true);
  // * Null
  console.log('typeof null', typeof null);
  // * Undefined
  console.log('typeof myVar', typeof myVar);
  // * Number
  console.log('typeof 3.14', typeof 3.14);
  // * NaN
  console.log('typeof NaN', typeof NaN);
  // * String
  console.log('typeof "HelloWorld"', typeof "HelloWorld");
  

  
// Write a JavaScript program that adds 2 numbers together.
const sum = (num1,num2) => num1 + num2;
console.log(sum(9,12));

// Write a JavaScript program that runs only when 2 things are true.
const soTrue = true;
const soFalse = false;



// Write a JavaScript program that runs when 1 of 2 things are true.



// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
