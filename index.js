// alert("It works!");

// for (i = 0; i <= document.getElementsByClassName("drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHTML = this.innerHTML;

// 			switch (buttonInnerHTML) {
// 				case "w":
// 					var tom1 = new Audio("./sounds/tom-1.mp3");
// 					tom1.play();
// 					break;
// 				case "a":
// 					var tom2 = new Audio("./sounds/tom-2.mp3");
// 					tom2.play();
// 					break;
// 				case "s":
// 					var tom3 = new Audio("./sounds/tom-3.mp3");
// 					tom3.play();
// 					break;
// 				case "d":
// 					var tom4 = new Audio("./sounds/tom-4.mp3");
// 					tom4.play();
// 					break;
// 				case "j":
// 					var snare = new Audio("./sounds/snare.mp3");
// 					snare.play();
// 					break;
// 				case "k":
// 					var kick = new Audio("./sounds/kick-bass.mp3");
// 					kick.play();
// 					break;
// 				case "l":
// 					var crash = new Audio("./sounds/crash.mp3");
// 					crash.play();
// 					break;

// 				default:
// 					console.log(buttonInnerHTML);
// 					break;
// 			}
// 		});
// }

// document.addEventListener("keydown", function () {
// 	alert("Key pressed");
// });
// got in some problem after adding keydown, and even going back a lot of steps, can't get why (uncaught error undefined ..."um[i].addEventListener("... )
//starting over, leaving the steps commented

//Start with
// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
// 	alert("Button clicked!");
// }

//shorter version
// document
// 	.querySelector("button")
// 	.addEventListener("click", function () {
// 		alert("Button clicked!");
// 	});

// document.querySelectorAll(".drum")[0].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[1].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[2].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[3].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[4].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[5].addEventListener("click", handleClick);
// document.querySelectorAll(".drum")[6].addEventListener("click", handleClick);

//create a loop instead
// function check(){
//check function for debugger
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", handleClick);
// }
// }

//going further and playing around:
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function(){

// this.style.color = "white";

//         });
// }

//putting this play functionality in, now all buttons will play tom-1 sound
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var tom1 = new Audio("./sounds/tom-1.mp3");
// 			tom1.play();
// 		});
// }

//giving each button (based on innerHTML value) it's sound with "switch function"
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHTML = this.innerHTML;
// 			switch (buttonInnerHTML) {
// 				case "w":
// 					var tom1 = new Audio("./sounds/tom-1.mp3");
// 					tom1.play();
// 					break;
// 				case "a":
// 					var tom2 = new Audio("./sounds/tom-2.mp3");
// 					tom2.play();
// 					break;
// 				case "s":
// 					var tom3 = new Audio("./sounds/tom-3.mp3");
// 					tom3.play();
// 					break;
// 				case "d":
// 					var tom4 = new Audio("./sounds/tom-4.mp3");
// 					tom4.play();
// 					break;
// 				case "j":
// 					var snare = new Audio("./sounds/snare.mp3");
// 					snare.play();
// 					break;
// 				case "k":
// 					var kick = new Audio("./sounds/kick-bass.mp3");
// 					kick.play();
// 					break;
// 				case "l":
// 					var crash = new Audio("./sounds/crash.mp3");
// 					crash.play();
// 					break;

// 				default:
// 					console.log(buttonInnerHTML);
// 					break;
// 			}
// 		});
// }
// so far so good!! all working

//now going to add "keydown" listener
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHTML = this.innerHTML;
// 			switch (buttonInnerHTML) {
// 				case "w":
// 					var tom1 = new Audio("./sounds/tom-1.mp3");
// 					tom1.play();
// 					break;
// 				case "a":
// 					var tom2 = new Audio("./sounds/tom-2.mp3");
// 					tom2.play();
// 					break;
// 				case "s":
// 					var tom3 = new Audio("./sounds/tom-3.mp3");
// 					tom3.play();
// 					break;
// 				case "d":
// 					var tom4 = new Audio("./sounds/tom-4.mp3");
// 					tom4.play();
// 					break;
// 				case "j":
// 					var snare = new Audio("./sounds/snare.mp3");
// 					snare.play();
// 					break;
// 				case "k":
// 					var kick = new Audio("./sounds/kick-bass.mp3");
// 					kick.play();
// 					break;
// 				case "l":
// 					var crash = new Audio("./sounds/crash.mp3");
// 					crash.play();
// 					break;

// 				default:
// 					console.log(buttonInnerHTML);
// 					break;
// 			}
// 		});
// }
// document.addEventListener("keydown", function () {
// 	alert("Yes, any key pressed!");
// });
// IT WORKS!! no clue why the error appeared before. But doing it other way now with first listener
//as querySelectorAll misto getElementsClassName jako predtim (a ted stejne definovana class .drum)

// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHTML = this.innerHTML;

// 			switch (buttonInnerHTML) {
// 				case "w":
// 					var tom1 = new Audio("./sounds/tom-1.mp3");
// 					tom1.play();
// 					break;
// 				case "a":
// 					var tom2 = new Audio("./sounds/tom-2.mp3");
// 					tom2.play();
// 					break;
// 				case "s":
// 					var tom3 = new Audio("./sounds/tom-3.mp3");
// 					tom3.play();
// 					break;
// 				case "d":
// 					var tom4 = new Audio("./sounds/tom-4.mp3");
// 					tom4.play();
// 					break;
// 				case "j":
// 					var snare = new Audio("./sounds/snare.mp3");
// 					snare.play();
// 					break;
// 				case "k":
// 					var kick = new Audio("./sounds/kick-bass.mp3");
// 					kick.play();
// 					break;
// 				case "l":
// 					var crash = new Audio("./sounds/crash.mp3");
// 					crash.play();
// 					break;

// 				default:
// 					console.log(buttonInnerHTML);
// 					break;
// 			}
// 		});
// }

// document.addEventListener("keydown", function (something) {
//     console.log(something); //checking what key was pressed
// });

//KeyboardEvent.key

//now I need to grab the right key that was pressed to use elsewhere
// var keyName = "";

// document.addEventListener("keydown", function (whichKey) {
// 	return (keyName = whichKey.key);
// 	// console.log(whichKey.key); //checking what key was pressed
// });

//checking if I can just copy and paste
// switch (keyName){

// 				case "w":
// 					var tom1 = new Audio("./sounds/tom-1.mp3");
// 					tom1.play();
// 					break;
// 				case "a":
// 					var tom2 = new Audio("./sounds/tom-2.mp3");
// 					tom2.play();
// 					break;
// 				case "s":
// 					var tom3 = new Audio("./sounds/tom-3.mp3");
// 					tom3.play();
// 					break;
// 				case "d":
// 					var tom4 = new Audio("./sounds/tom-4.mp3");
// 					tom4.play();
// 					break;
// 				case "j":
// 					var snare = new Audio("./sounds/snare.mp3");
// 					snare.play();
// 					break;
// 				case "k":
// 					var kick = new Audio("./sounds/kick-bass.mp3");
// 					kick.play();
// 					break;
// 				case "l":
// 					var crash = new Audio("./sounds/crash.mp3");
// 					crash.play();
// 					break;

// 				default:
// 					console.log(keyName);
// 					break;
// 			}

//NOPE.. trying to put inside the event listener

// document.addEventListener("keydown", function (whichKey) {
// 	var keyName = whichKey.key;

// 	switch (keyName) {
// 		case "w":
// 			var tom1 = new Audio("./sounds/tom-1.mp3");
// 			tom1.play();
// 			break;
// 		case "a":
// 			var tom2 = new Audio("./sounds/tom-2.mp3");
// 			tom2.play();
// 			break;
// 		case "s":
// 			var tom3 = new Audio("./sounds/tom-3.mp3");
// 			tom3.play();
// 			break;
// 		case "d":
// 			var tom4 = new Audio("./sounds/tom-4.mp3");
// 			tom4.play();
// 			break;
// 		case "j":
// 			var snare = new Audio("./sounds/snare.mp3");
// 			snare.play();
// 			break;
// 		case "k":
// 			var kick = new Audio("./sounds/kick-bass.mp3");
// 			kick.play();
// 			break;
// 		case "l":
// 			var crash = new Audio("./sounds/crash.mp3");
// 			crash.play();
// 			break;

// 		default:
// 			console.log("Don't break that keyboard! :)");
// 			break;
// 	}
// });

//YEP that works!

// but let's comb it so it's easier to read just as Angela has it

//Check for button clicks
// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
// 	document
// 		.getElementsByClassName("drum")
// 		[i].addEventListener("click", function () {
// 			var buttonInnerHTML = this.innerHTML;
// 			makeSound(buttonInnerHTML);
// 		});
// }

//Check for keypad strokes
// document.addEventListener("keydown", function (event) {
// 	makeSound(event.key);
// });

//play sounds
function makeSound(key) {
	switch (key) {
		case "w":
			var tom1 = new Audio("./sounds/tom-1.mp3");
			tom1.play();
			break;
		case "a":
			var tom2 = new Audio("./sounds/tom-2.mp3");
			tom2.play();
			break;
		case "s":
			var tom3 = new Audio("./sounds/tom-3.mp3");
			tom3.play();
			break;
		case "d":
			var tom4 = new Audio("./sounds/tom-4.mp3");
			tom4.play();
			break;
		case "j":
			var snare = new Audio("./sounds/snare.mp3");
			snare.play();
			break;
		case "k":
			var kick = new Audio("./sounds/kick-bass.mp3");
			kick.play();
			break;
		case "l":
			var crash = new Audio("./sounds/crash.mp3");
			crash.play();
			break;

		default:
			console.log("Don't break that keyboard! :)");
			break;
	}
}

//adding animation:

// button click and new method buttonAnimation
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", function () {
		var buttonInnerHTML = this.innerHTML;
		makeSound(buttonInnerHTML);
		buttonAnimation(buttonInnerHTML);
	});
}

//key press and new method buttonAnimation
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");

	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
