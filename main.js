$(document).ready(function(){

var words = ["feminism", "unity"];

function startGame() {
	//happens on user clicking button.
	//hide button
	//reveal input and blank fields
	//choose a random word
}

function chooseRandomWordArray() {
	//Return a random word from our words array. Similar to how we did rock/paper/scissor. use the math function --> math.random, math.floor. And then we need to retun that random word within an array, so instead of returning "feminism" it returns "f" "e" "m" etc etc
    //It's possible we may want to use multiple functions to make this work
    console.log(words[0].split(""));
    return words[0].split(""); //if we didn't need any return function, we need return at the end of the function. return breaks a function, so it should ALWAYS be at the end. 
}

var wordArray = chooseRandomWordArray(); // we need to execution the function above, so this line of code is calling this function

function guessLetter() {
	var guess = "e"; //this needs to be dynamic when it's actually live //get value from input field
	for (var i=0; i < wordArray.length; i++) { //loops need to know where to start, where to end, and how to filter through 
		if (guess == wordArray[i]) {
			console.log("Yes there is an " + guess + ".");
		} else {
			console.log ("Nope.");
		}
	}
	//compare that letter to all the letters within our array
}

guessLetter();

})