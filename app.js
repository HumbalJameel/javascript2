//CHAPTER NO 6-9
//QUESTION :01
//Write a program to take a number in a variable, do the
//required arithmetic to display the following result in your browser:
var a = 10
console.log("The value of a is" , a);
console.log("Now the value of a is 10");

console.log("The vale of ++a is", ++a);
console.log("Now the value of ++a is 11");

console.log("The value of a++ is", a++);
console.log("Now the value a++ is 12");

console.log("The value of --a is", --a);
console.log("Now the value of --a is 11");

console.log("The value of a-- is", a--);
console.log("Now the value of a is 10");

//QUESTION :02
//What will be the output in variables a, b & result after execution of the following script:
//var a = 2, b = 1;
//var result = --a - --b + ++b + b--;
//Explain the output at each stage:
//--a;
//--a - --b;
//--a - --b + ++b;
//--a - --b + ++b + b--;
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
console.log("result is", result);

//QUESTION :03
//Write a program that takes input a name from user & greet the user.
var username = prompt("What's your name?")
document.write("Hello " + username + "! how are you doing today?")

//QUESTION :04
//Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5 should be displayed by default.
var num = prompt("Please enter a number.");
for(var i=1;i<=10;i++){
    document.write("<div>");
    document.write(num + " x " + i + " = " + i*num);
    document.write("</div>")
}
//QUESTION :05
//Take
//a) Take three subjects name from user and store them in 3 different variables.
//b) Total marks for each subject is 100, store it in another variable.
//c) Take obtained marks for first subject from user and stored it in different variable.
//d) Take obtained marks for remaining 2 subjects from user and store them in variables.
//e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
//SUBJECTS OF USER
subject1 = prompt("Enter a Subject1");
subject2 = prompt("Enter a Subject2");
subject3 = prompt("Enter a Subject3");

//TOTAL MARKS OF SUBJECTS
var total_marks_of_sub1 = 100;
var total_marks_of_sub2 = 100;
var total_marks_of_sub3 = 100;

//OBTAINED MARKS OF SUBJECTS
var obtained_marks_of_sub1 = +prompt("Enter obtained marks subject1");
var obtained_marks_of_sub2 = +prompt("Enter obtained marks subject2");
var obtained_marks_of_sub3 = +prompt("Enter obtained marks subject3");

//CALCULATE TOTAL MARKS AND PERCENTAGE AND SHOW RESULT
var total_marks = obtained_marks_of_sub1 + obtained_marks_of_sub2 + obtained_marks_of_sub3;
console.log("Total marks " , total_marks);
var per1= obtained_marks_of_sub1/total_marks_of_sub1 *100;
var per2= obtained_marks_of_sub2/total_marks_of_sub2 *100;
var per3= obtained_marks_of_sub3/total_marks_of_sub3 *100;
console.log("Percentage of subject1" , per1);
console.log("Percentage of subject2" , per2);
console.log("Percentage of subject3" , per3);
