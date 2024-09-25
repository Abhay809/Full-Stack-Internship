// // console.log("hello world!");
// // console.log("Abhay Mittal");
// let a = 10;
// let b = 5;
// console.log("sum is:", a+b);
// // this is a comment in js


// // Template Litrals
// let pencilPrice = 100;
// let eraserprice = 50;
// // console.log("the total price is:", pencilPrice+eraserprice, "rupees.");
// // let output = "the total price is: " + (pencilPrice+eraserprice)  + " rupees.";
// // console.log(output);
// // template literals use
// let output = `the total price is: ${pencilPrice+eraserprice} rupees.`;    // `` this is a backticks symbol
// console.log(output);


// // operators in js
// // Arithmatic operators
// let a = 10;
// let b = 5;
// // console.log(a+b);
// // console.log(a-b);
// // console.log(a*b);
// // console.log(a/b);
// // console.log(a%b);
// // console.log(a**b);

// // Unary operator
// // console.log(a++);  // 10
// // console.log(++a);  //12

// // Operator
// // b = a;
// // console.log(b);


// Comparison Operator
// let age = 18;
// console.log(age>18); // false

// == operators ignores the type of a value, it just compare the value


// comparison for non numbers'
// 'a' < 'A'; // give false in browser console
// 'a' < 'b'; // give true;
// 'P' < 'p'; // give true, these value have perticular unicodes and they are compared


// Conditional Statements
// console.log("Before my statement");
// let age =23;
// if(age>18){
//     console.log("You can vote");
//     console.log("You can drive")
// }
// if(age<180){
//     console.log("You cannot vote");
// }
// console.log("After my statement");

// let firstName = "Aman";
// if(firstName = "abhay"){
//     console.log(`welcome ${firstName}`);
// }


// Practise Questions
// q-1 Create a traffic light sytem that shows what to do based on colour

// let colour = "yellow";
// // Traffic light system
// if(colour === "red"){
//     console.log("Stop! Light colour is red");
// }
// else if(colour === "yellow"){
//     console.log("slow down. Light colour is yellow");
// }
// else if(colour === "green"){
//     console.log("go. Light colour is green");
// }


// Else if statement 

// let age = 18;
// if(age >= 18){
//     console.log("You can vote");  // this will print
// }else if(age <= 18){
//     console.log("you cannot vote");
// }

// // Grading sytem
// let marks = 20;
// if(marks>=80){
//     console.log("A+");
// }else if(marks >= 60){
//     console.log("A")
// }else if(marks >= 33){
//     console.log("B");
// }else if(marks < 33){
//     console.log("Fail");
// }

// // Month 
// let month = "january";
// if(month === "january"){
//     console.log("winter is here");
// }else if(month === "april"){
//     console.log("summer is here");
// }

// // else statement 
// let age = 17;
// if(age>=18){
//     console.log("you can vote");
// }else{
//     console.log("you cannot vote");
// }

// let colour = "blue";
// if(colour === "red"){
//     console.log("stop");
// }else if(colour === "yellow"){
//     console.log("slow down");
// }else if(colour === "green"){
//     console.log("go");
// }else{
//     console.log("traffic light is broken");
// }


// // Practise question
// let size = "S";
// if(size === "XL"){
//     console.log("popcorn price is 250");
// }else if(size === "L"){
//     console.log("popcorn price is 200");
// }else if(size === "M"){
//     console.log("popcorn price is 100");
// }else{
//     console.log("popcorn price is 50");
// }


// //Nested if-else
// let marks = 45;
// if(marks >= 33){
//     console.log("pass");
//     if(marks >= 80){
//         console.log("Grader : O");
//     }else{
//         console.log("Grade : A")
//     }
// }else{
//     console.log("Better luck next time");
// }


// // Logical Operators
// let marks = 90;
// if(marks >= 33 && marks >= 80){   // AND operator
//     console.log("pass");
//     console.log("A+");
// }

// let marks = 75;
// if(marks >= 33  || marks >= 80){     // OR operator
//     console.log("pass");
//     console.log("A+");
// }

// let marks = 90;
// if(!(marks < 33)){
//     console.log("pass");
//     console.log("A+");
// }

// let marks = 75;
// if(marks >= 33 && marks < 80 || !(false)){   // true condition
//     console.log("pass");      // output is : pass, A+
//     console.log("A+");
// }


// // Practise question
// // q-1 A good string is a string that starts with the letter 'a' & has a length > 3.
// // Write a program to find if a string is good or not
// let str = "abhay";
// if(str[0] === 'a' && str.length > 3){
//     console.log("It is a good string");
// }else{
//     console.log("It is not a good string");
// }
// // Output:- It is a good string

// // predict the output
// let num = 12;
// if((num % 3 === 0) && ( (num +1 == 15) || (num -1 == 11))){
//     console.log("safe");
// }else{
//     console.log("unsafe");
// }
// // output :- safe


// JavaScript part -3 

// Trim method
// let msg = "   hello    ";
// console.log(msg.trim());          // trim method is used to remove spaces
// // create a new string, not changing in prevoius string. that's why strings are immutable in js

// let password = prompt("set your password");
// console.log(password.trim());


// // Strings are immutable in js
// let msg = "apna    ";
// msg.trim();      // output - 'apna'
// let str = msg.trim();
// str;            // output - 'apna'
// msg;            // 'apna    '
// msg = "hello";
// msg;            // 'hello'/

// // To upper case and to lowercase in js
// let str = "Abhay Mittal";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// let msg = "error";
// console.log(msg.toUpperCase());

// // methods with arguments
// let str = "ILoveCoding";

// // Method Chaining
// let msg = "   hello   ";
// // let newMsg = msg.trim();
// // console.log("After trim",newMsg);
// // newMsg = newMsg.toUpperCase();
// // console.log("After uppercase",newMsg);
// let newMsg = msg.trim().toUpperCase();
// console.log(newMsg);

// // Slice
// let msg = "hello";
// console.log(msg.slice(0,4));    // output- hell
// let msg1 = "AbhayMittal";
// console.log(msg1.slice(5,11));   // output - Mittal
// console.log(msg1.slice(5,msg1.length));   // output - Mittal
// console.log(msg1.slice(5));       // output - Mittal
// console.log(msg1.slice(-1));   // 11-1 >=10      // output - l

// // replace and repeat method
// let msg = "ILoveCoding";
// let msg2 = "fruit";


// practice questions
// // for the given sring trim it and convert it into upperCase
// let msg = "help!";
// console.log(msg.trim().toUpperCase());     // output - HELP!

// // for the given string predict the output
// let name  = "ApnaCollege";
// console.log(name.slice(4,9));     // output - colle
// console.log(name.indexOf("na"));  // 2 
// console.log(name.replace("Apna","Our"));  // output - OurCollege

// // Separate the college part and replace the 'l' with 't' in it
// console.log(name.slice(4).replace('l','t'));   // cotlage
// console.log(name.slice(4).replace('l','t').replace('l','t'));  // cottege

// After using String method we always get a new String, there is no change in older string

// // 10. Array data Structure
// // let student1 = "aman";
// // let student2 = "abhay";
// // let student3 = "rajat";

// let students = ["aman","abhay","rajat"];


// 11. Vissualizing array

// 12. Creating Arrays
// // In js, we can combine different -2 types in single array
// let info = ["abhay",23,89.9];
// console.log(info);


// // 13. Arrays are Mutable
// let fruits = ["mango","apple","litchi"];
// fruits[0] = "banana";
// console.log(fruits);    // output- ["banana","apple","litchi"]
// // In strings it is not possible, that's why strings are immutable


// // Arrays Method
// let cars = ["audi","bmw","maruti","xuv"];
// console.log(cars);    // output:- ['audi', 'bmw', 'maruti', 'xuv']
// cars.push("toyota");
// console.log(cars);     // output:- ['audi', 'bmw', 'maruti', 'xuv', 'toyota']
// cars.push("ferrari");
// console.log(cars);    // output:- ['audi', 'bmw', 'maruti', 'xuv', 'toyota', 'ferrari']
// cars.pop();           // ferrari will pop
// console.log(cars);    // output:- ['audi', 'bmw', 'maruti', 'xuv', 'toyota']
// cars.pop();           // toyota will pop
// console.log(cars);    // output:- ['audi', 'bmw', 'maruti', 'xuv']

// cars.unshift("toyota");
// console.log(cars);       // output:- ['toyota', 'audi', 'bmw', 'maruti', 'xuv']
// cars.unshift("farrari");
// console.log(cars);       // output:-  ['farrari', 'toyota', 'audi', 'bmw', 'maruti', 'xuv']
// cars.shift();            // this function delete and also return the value while its printing
// console.log(cars);      // output:- ['toyota', 'audi', 'bmw', 'maruti', 'xuv']

// // suppose we have to block a follower and remove it from our follower list
// let followers = ["a","b","c"];
// let blocked = followers.shift();
// console.log(followers);
// console.log(blocked);


// // 15. Practise questions
// // q1 For the given start state of the array, change it to final from using methods
// // start = ['january','july','march','august'];
// // end = ['july','june','march','august'];
// let arr = ["january","july","march","august"];
// // arr.replace("july","june");   // error:- arr.replace is not a function
// arr.shift();
// arr.shift();
// console.log(arr);
// arr.unshift("june");
// arr.unshift("july");
// console.log(arr);


// // 16. Index & Includes Method
// // Array methods
// let primary = ["red","yellow","green"];
// console.log(primary.indexOf("yellow"));    // output:  1
// console.log(primary.indexOf("blue"));    // output:  -1
// console.log(primary.indexOf("Green"));    // output:  -1
// console.log(primary.includes("red"));    // output:  true
// console.log(primary.includes("blue"));    // output:  false


// //17.  Concatenation & Reverse
// let primary = ["red","yellow","green"];
// let secondary = ["orange","blue","violet"];
// console.log(primary.concat(secondary));   // output:- ['red', 'yellow', 'green', 'orange', 'blue', 'violet']
// console.log(primary);
// console.log(secondary);
// let allColours = primary.concat(secondary);
// console.log(allColours);                  // output:- ['red', 'yellow', 'green', 'orange', 'blue', 'violet']
// console.log(secondary.concat(primary));    // output:- ['orange', 'blue', 'violet', 'red', 'yellow', 'green']

// console.log(primary.reverse());     // output:-  ['green', 'yellow', 'red']
   

// // 18. Slice in array
// // copies of a portion in array, not change in original array
// let colours = ["red","yellow","blue","orange","pink","white"];
// console.log(colours.slice());   // output:-  ['red', 'yellow', 'blue', 'orange', 'pink', 'white']
// console.log(colours.slice(2));  // ['blue', 'orange', 'pink', 'white']
// console.log(colours.slice(2,3));  // ['blue']
// console.log(colours.slice(-2));   // ['pink', 'white']
// console.log(colours.slice(10));   // []
// console.log(colours.slice(colours.length-1));   // ['white']
// console.log(colours.slice(colours.length));   // []


// // 19. Splice in  Array
// // remove / replace / add elements in space
// // syntax - splice(start, deleteCount, item0 to item n)
// let cars = ["Audi","BMW","XUV","Maruti"];  
// console.log(cars);              // // ['Audi', 'BMW', 'XUV', 'Maruti']
// console.log(cars.splice(3));   // ['Maruti']
// console.log(cars);    // ['Audi', 'BMW', 'XUV']
// console.log(cars.splice(0,1));   // ['BMW', 'XUV']
// console.log(cars);    // ['BMW', 'XUV']
// cars.push("maruti");
// cars.push("ferrari");
// console.log(cars);  // ['BMW', 'XUV', 'maruti', 'ferrari']
// console.log(cars.splice(1,2));   // ['XUV', 'maruti'] will delete
// console.log(cars);  // ['BMW', 'ferrari']
// cars.splice(0,0,"toyota","xuv","maruti");
// console.log(cars);   // ['toyota', 'xuv', 'maruti', 'BMW', 'ferrari']
// cars.splice(1,0,"mercedes");
// console.log(cars);   // ['toyota', 'mercedes', 'xuv', 'maruti', 'BMW', 'ferrari']
// cars.splice(1,1,"gwagon");
// console.log(cars);  // ['toyota', 'gwagon', 'xuv', 'maruti', 'BMW', 'ferrari']


// // 20. Sort in arrays
// let cars = ['toyota', 'gwagon', 'xuv', 'maruti', 'BMW', 'ferrari'];
// cars.sort();
// console.log(cars);    //  ['BMW', 'ferrari', 'gwagon', 'maruti', 'toyota', 'xuv']
// let chars = ['b','d','e',"a"];    
// console.log(chars.sort());    //  ['a', 'b', 'd', 'e']
// let marks = [99,34,32,56,100];
// console.log(marks.sort());   // [100, 32, 34, 56, 99] not sorted
// // Sort method first convert numbers into string and then sort them
// // we use this method for strings and characters


// // 21. practise questions
// // For the given start of an array change it to final form using splice
// // start : ['january','july','march','august'];
// // end : []
// let months = ["january","july","march","august"];
// console.log(months.splice(0,2,"july","june"));   //  ['january', 'july']
// months.splice(0,2,"july","june");
// console.log(months);    // ['july', 'june', 'march', 'august']

// // q-2 return the index of js from the given array, if it was reversed
// let array = ['c','c++','html','javascript','python','java','c#','sql'];
// // array.reverse();
// // console.log(array);   // ['sql', 'c#', 'java', 'python', 'javascript', 'html', 'c++', 'c']
// // console.log(array.indexOf('javascript'));   // 4
// console.log(array.reverse().indexOf('javascript'));   // 4


// 22. Array References
// "name" == "name"   will give true
// "name" === "name"  will also give true
// [1] === [1]  will give false
// [1] == [1]  will give false because they both have different-2 allocated memory
// [] == [] false
// [] ===[] false
// when addresses of two arrays are same then they are same


// // 23. Constant arrays
// // const g =10;  // when a value is constant
// // g = 9.8 // error - assignment to constant value
// // But we can push and pop in contant arrays
// let arr = [1,2,3];
// console.log(arr);   // [1, 2, 3]
// arr.push(4);
// console.log(arr);   // [1, 2, 3, 4]
// arr.pop();
// console.log(arr);   // [1, 2, 3]
// // But we can not assign a new array into arr


// // 24. Nested Arrays - Arrays of arrays or multidimentional arrays
// let nums = [[2,4],[3,6],[4,8]];
// console.log(nums);    // [Array(2), Array(2), Array(2)]
// console.log(nums.length);  //3
// console.log(nums[0]);   // [2,4]
// console.log(nums[0].length);  // 2
// console.log(nums[0][0]);  // 2
// console.log(nums[0][1]);  // 4
// console.log(nums[1][1]);  // 6


// // 25. practise question
// // It is possible to make changes in nested arrays as well
// // q1 create a nested array to show tic-tac-toe game state
// let game = [ ['X',null,'O'],[null,'X',null],['O',null,'X']];
// console.log(game);    //  [Array(3), Array(3), Array(3)]
// game[0][1] = 'O';    // replace first array null with O
// console.log(game);

// 26. Practise questions
/* Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any
 positive number].
 For example: for array [7, 9, 0,-2] and n=3
 Print, [7, 9, 0] */

//  let array = [7,9,0,-2];
//  let n = 3;
//  array.slice(0,n);
//  console.log(array);   // [7, 9, 0, -2]
//  console.log(array.slice(0,n)); // [7, 9, 0]

/* Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
 positive number].
 For example: for array [7, 9, 0,-2] and n=3
 Print, [9, 0,-2] */

//  let array = [7,9,0,-2];
//  let n = 3;
//  console.log(array.slice(1,n+1));    // [9, 0, -2]

// OR

// let array = [7,9,0,-2];
// let n  = 3;
// let ans  = array.slice(array.length-n);
// console.log(ans);   // // [9, 0, -2]

/*  Qs3. Write a JavaScript program to check whether a string is blank or not */

// let str = prompt("Please enter a string");
// if(str.length == 0){
//     console.log("String is empty");
// }else{
//     console.log("String is not empty");
// }


/*  Qs4. Write a JavaScript program to test whether the character at the given (character)
 index is lower case. */
// let str = "AbHaY MIttaL";
// let idx = 3;
// if(str[idx] == str[idx].toLowerCase()){    // mistake of .toLowerCase()
//     console.log("character is lowercase");
// }else{
//     console.log("charater is not lowercase");
// }

/*  Qs5. Write a JavaScript program to strip leading and trailing spaces from a string */
// let str  = prompt("enter a string");      //      Abhay
// console.log(`original string = ${str}`);  // original string =      Abhay
// console.log(`string without spaces = ${str.trim()}`);   //string without spaces = Abhay

// **
/*  Qs6. Write a JavaScript program to check if an element exists in an array or not */
// let array = ["hello",'a',23,64,99,-6];
// let item = 64;
// if(array.indexOf(item) != -1){
//     console.log("element exists in array")
// }else{
//     console.log("element not exists in array");
// }


// JavaScript part-4

// // 1. for loops
// // loop : - Used to iterate a piece of code
// console.log("1");
// console.log("2");
// console.log("3");
// console.log("4");
// console.log("5");
// // for(let i =1; i<=10; i++){
// //     console.log(i);
// // }

// // for(let i = 5; i >= 1; i--){
// //     console.log(i);
// // }

// for(let i = 10; i >= 1; i = i-3){
//     console.log(i);
// }

// // console.log(i);   // error - i is not defined


// // 3. print all odd numbers from 1 to 15
// for(let i = 1; i <= 15; i +=2){
//     console.log(i);
// }
// console.log("backwards");
// for(let i = 15; i >= 1; i -= 2){
//     console.log(i);
// }


// // 4. print all even numbers from 2 to 10
// for(let i = 2; i<=10; i +=2){
//     console.log(i);
// }
// console.log("backwards");
// for(let i = 10; i>=2; i = i-2){
//     console.log(i);
// }

// // 5. Infinite Loops
// for(let i =1; ; i++){
//     console.log(i);
// }

// // 6. print Multiplication table

// // for(let i=5; i<=50; i+=5){
// //     console.log(i);
// // }

// let n = prompt("Write your number");  // there is stirng inside prompt, not numbet
// n = parseInt(n);
// for(let i = n; i <= n*10; i=i+n){
//     console.log(i);
// }


// // 7. Nested for loop
// for(let i =1; i<=3; i++){
//     console.log(`Outer loop ${i}`);
//     for(let j=1; j<=3; j++){
//         console.log(j);
//     }
// }


// // 8. While loops
// // let i = 1;
// // while(i<5){
// //     console.log(i);
// //     i++;
// // }

// let i = 0;
// while(i<=20){
//     console.log(i);
//     i+=2;
// }


// // 9. Favourite Movie
// // user need to guess the movie till then he will not guessed the right movie name
// const fav_movie = "avatar";
// let guess = prompt("Guess my favourite movie");
// let quit;
// while(guess!=fav_movie){
//     if(guess== "quit"){
//         console.log("you quit");
//         break;
//     }
//     guess = prompt( "wrong movie guessed. please try again!!");
// }
// if(guess == fav_movie){
//     console.log("congrats!!");
// }

// // 10. break keyword
// // loop execution stop
// let i = 1;
// while(i<=5){
//     if(i==3){
//         break;
//     }
//     console.log(i);
//     i++; 
// }
// console.log("we use break at 3"); 


// // 11. Loops with Arrays
// let fruits = ["mango","apple","banana","lichi","orange"];
// fruits.push("pineapple");
// // for(let  i = 0; i<fruits.length;i+=2){
// //     console.log(i,fruits[i]);
// // }

// // // reverse the above array
// for(let i = fruits.length-1; i >=0; i--){
//     console.log(i,fruits[i]);
// }


// // 12. Loops with nested Arrays
// let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];
// // i = 0  -  ["ironman","spiderman","thor"],  i=1 :- ["superman","wonder women","flash"]
// for(let i =0; i<heroes.length; i++){
//     console.log(i,heroes[i],heroes.length);
//     for(let j=0; j<heroes[i].length;j++){
//         console.log(`j=${j}, ${heroes[i][j]}`);
//     }
// }

// let student = [["aman",95],["abhay",94.4],["karan",100]];
//  for(let i=0; i<student.length;i++){
//     console.log(`info of sudent #${i+1}`);
//     for(let j=0;j<student[i].length;j++){
//         console.log(student[i][j]);
//     }
//  }


// // 13. for-of loop : used when we have to excess collection items
// // ex: to excess array's individual items or to excess string indivial characters

// let fruits = ["mango","apple","banana","orange","lichi"];

// for(fruit of fruits){     // fruit is a variable
//     console.log(fruit);
// }

// for(char of "abhaymittal"){
//     console.log(char);
// }


// // 14.Nested for of loop
// let heroes = [["superman","batman","wonder women"],["spiderman","ironman","thor"]];
//  for(list of heroes){
//     console.log(list);
//     for(name of list){
//         console.log(name);
//     }
//  }

// // 15. Todo App 
// let todo  = [];   // make a empty array
// let req = prompt("please enter your request");  

// while(true){   // so that user can enter again and agian
//     if(req == "quit"){
//         console.log("quitting app");
//         break;
//     }

//     if(req == "list"){
//         console.log("-------------");
//         for(let i=0;i<todo.length;i++){   // to list the all items of the array, we can use for of, for or while loop  
//             console.log(i,todo[i]);
//         }
//         console.log("-------------");
//     }else if(req == "add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");
//     }else if(req == "delete"){
//         let idx = prompt("please enter the task index");
//         todo.splice(idx,1);  // by using splice method, we can delete a perticular index
//         console.log("task deleted");
//     }else{
//         console.log("wrong request");
//     }
//     req = prompt("please enter your request"); 
// }


// Js part-4 questions

// /* Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
//  Example: if arr=[1,2,3,4,5,6,2,3]&num=2
//  Result should be arr=[1,3,4,5,6,3] */

//  let arr = [1,2,3,4,5,6,2,3];
//  let num = 2;
//  for(let i = 0; i< arr.length;i++){
//     if(arr[i] == num){
//         arr.splice(i,1);
//     }
//  }
//  console.log(arr);

// /*  Qs2. Write a JS program to find the no of digits in a number.
//  Example: ifnumber=287152,count=6 */

// //  let number = 287152;
// //  let count = 0;
// //  let c;
// //  for(let i =1; i<number.length;i++){
// //     c = count++;
// //  }
// //  console.log(c);
// // // wrong

// let number = 287152;
// let count = 0;
// let copy = number;
// while(copy>0){
//     count++;
//     copy= Math.floor(copy/10);
// }
// console.log(count);

// /* q-3 write js program to find sum of digits of a number
// if number = 287152, sum = 25

// */

// let number = 287152;
// let sum = 0;
// let copy = number;
// while(number>0){
//     sum+=number%10;
//     // number/=10;   wrong
//     number  = Math.floor(number/10);
// }
// console.log(sum);


// // q-4 print factorial of a number
// let num = 7;
// let fact = 1;
// for(let i = 1; i<=num;i++){
//     fact = fact*i;
// }
// console.log(`factorial of ${num} is ${fact}`);

// // q-5  find the largest number in the array with only positive integers
// let arr = [1,2,3,4,5,6,9,8];
// let max = 0;
// for(let i = 0; i<arr.length-1;i++){
//     if(arr[i]>max){
//         max = arr[i];
//     }
// }
// console.log(max);
