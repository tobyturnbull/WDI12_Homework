var respondTo = function(word){
	if (word.indexOf("?") > -1 )
		return "Yeah";
	else if (word.toUpperCase() === word)
		return "Stop shouting at me!";
	else if (!word || word.trim()) === ""
		return "Ok";
	else
		return "Whatever";
}
console.log (respondTo("hello?"))