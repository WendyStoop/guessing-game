var random = Math.floor(Math.random() * 23);

var div = document.getElementById(equalMessage);
//alert (random);

var button = document.getElementById ("GUESS");
button.addEventListener("click", function(){
//alert (random)
var guessNumber = document.getElementById ("inputNumber").value;
if (guessNumber === random)
{alert ("You guessed the right number")

}
else if (guessNumber +1 === random || guessNumber - 1 === random)
{alert ("So close, but you just missed it! Are you in a class that started on the thirteenth or what?")}


else 
{alert("Bummer... You guessed " + guessNumber + " and the secret number was " + random)}})



