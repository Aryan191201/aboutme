function introduction()
{
alert("Hello!!");
var myName="Aryan Anand";
var yourName= prompt("What's Your Name?");
var firstChar= yourName.slice(0,1);
var upperCaseFirstChar= firstChar.toUpperCase();
var restName= yourName.slice(1,yourName.length);
restName= restName.toLowerCase();
var finalName= upperCaseFirstChar+restName;
alert("Welcome, nice to meet you "+finalName+", my name is "+myName+".");
}

// //Length Property
// function len()
// {
// var intro= prompt("Tell about yourself: ");
// var introCount140= intro.slice(0,140);
// alert("You have written "+intro.length+" characters, you have "+(140-intro.length)+" characters remaining.");
// alert("Final paragraph after slicing is---->");
// alert(introCount140);
// }
//
// //Function Call
// len();
introduction(); 
