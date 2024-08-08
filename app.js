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



