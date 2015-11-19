var word = "listen";
var potentialWords = [" enlists ", " roger ", " google" ];
Anagram.matches(word, potentialWords);

var Anagram = {
hasSameLetters: function ( word, candidate ) {
	word = word.split("").sort().join("");
	candidate = candidate.split("").sort().join("");
	console.log( word, candidate );

	return word === candidate;
},

areAnagrams: function ( word, candidate ) {
	if ( Anagram.hasSameLetters(word, candidate)) && word !== candidate {
		return true;
	}

		return false;
}

matches = function ( word, candidates ) {
	var anagrams = [];
	for (var i = 0; i < candidates.length; i++) {
		var potentialWord = candidates[i];
		if (areAnagrams(word, potentialWord))
			anagrams;push( potentialWord );

		
	};

  }


};