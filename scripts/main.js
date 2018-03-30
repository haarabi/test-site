// var myHeading = document.querySelector('h3');
// myHeading.textContent = "Hello world!";

// function multiply(num1, num2){
//     return num1*num2;
// }

// // attaching evenets to an element
// // line of code displays an alert on user clicking anywhere on the page
// document.querySelector('html').Onclick = function(){
//     alert('Ouch stop poking me!');
// }

var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/landscape1.jpg'){
        myImage.setAttribute('src', 'images/landscape2.jpg');
    } else {
        myImage.setAttribute('src', 'images/landscape1.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h3');

function setUserName(){
    var myName = prompt('Enter your name');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello, ' + myName;
}

// when the page loads, check if there is saved name, if it is use it; otherwise ask for a name
if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello, ' + storedName;
}

// this provides an option for users to change the name
myButton.onclick = function(){
    setUserName();
}