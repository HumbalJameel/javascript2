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
console.log("result");

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
subject1 = prompt("Enter a Subject1");
subject1 = prompt("Enter a Subject1");

//MARKS OF SUBJECTS
