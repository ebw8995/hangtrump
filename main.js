$(document).ready(function() {
	var words = [
		"feminism", 
		"unity", 
		"immigrant", 
		"Hillary", 
		"abortion", 
		"muslim", 
		"islam", 
		"equality", 
		"liberal", 
		"democrat" 
	];

	var wordArray = [];
	var wordHint = [];
	var badGuesses = 7;
	var goodGuesses= 0;

	$(document).on("click", ".start", startGame);

	function startGame(){
		$(this).parent().remove();
		$(".gameplay-container").show();
		$("body").css("background-image", "url(assets/rights.png)", "bottom");
		wordArray = chooseRandomWordArray(); // we need to execution the function above, so this line of code is calling this function
		displayWordHint();
	}


	// 	//happens on user clicking button.
	// 	//hide button
	// 	//reveal input and blank fields
	// 	//choose a random word


	function chooseRandomWordArray() {
		var index = Math.floor(Math.random() * words.length);//Return a random word from our words array. Similar to how we did rock/paper/scissor. use the math function --> math.random, math.floor. And then we need to retun that random word within an array, so instead of returning "feminism" it returns "f" "e" "m" etc etc
		var chosenWord = words[index];

	    console.log(chosenWord);
	    console.log(chosenWord.split(""));
	    return chosenWord.split(""); //we need return at the end of the function. return breaks a function, so it should ALWAYS be at the end. 
	}

 
	 function displayWordHint () {
	 	for (var i=0; i < wordArray.length; i++) {
	 		wordHint.push("_");
		    // $(".correct-word").html(chosenWord).replaceWith(" _ "); this isn't neccesarily the correct code, but it probably will be something to this effect
	 		//make a new array and then for every time we loop through the array push the _
	 	}
	 	fields = wordHint.toString().replace(/,/g, " ");
	 	$(".correct-word").text(fields);
	 }

	 function updateWordHint(letter) {
		for (var i=0; i < wordArray.length; i++) { //loops need to know where to start, where to end, and how to filter through 
			if (letter == wordArray[i]) {
				wordHint[i] = letter; 
			}
		}
		fields = wordHint.toString().replace(/,/g, " ");
	 	$(".correct-word").text(fields);
	 }

	 //one method to give a word hint; ie the number of spaces, which will need to be a loop
	//need to use a loop, we need to loop through every letter and append a _ for each letter


	function displayBadGuess(){
		var guess = $("#guess-input").val();
		$(".bad-guesses").append(guess, ", ");
		$(".guess-count-number").html(badGuesses -=1);
		$(".bad-guesses, .guess-count").show();
		$(".modal-trump").show();
		    setTimeout(function(){
		        $(".modal-trump").hide();
		    }, 1500);
		if(badGuesses ==0){
			$(".gameover, .play-again").show();
			$(".play-again").on("click", (startGame));
		}
	};

	function guessLetter() {
		var guess = $("#guess-input").val(); 
		var matches = 0;
		for (var i=0; i < wordArray.length; i++) { //loops need to know where to start, where to end, and how to filter through 
			if (guess == wordArray[i]) {
				updateWordHint(guess);
				matches = 1;
				console.log("Yes there is an " + guess + ".");
				goodGuesses++; //adds one increment, this is same thing as +=
				// $(".correct-letters").append(guess); //compare that letter to all the letters within our array
				$(".modal-clinton").show();
				    setTimeout(function(){
			        $(".modal-clinton").hide();
				    }, 2000);
				}
			};
		if(matches == 0){
			console.log("No, there is not an " + guess + ".");
			displayBadGuess();
		}
		if (goodGuesses == wordArray.length){
			console.log("YOU WIN!")
		}
		$("#guess-input").val("");

			// else {
			// 	console.log ("Nope.");
			// 	$("#guess-input").val("");
		};

	$(".guess").on("click", function(){
		guessLetter();
	});
})