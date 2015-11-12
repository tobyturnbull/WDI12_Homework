var sum = function(multiplyArray){
	var sum = 1;

for (var i = 0; i < multiplyArray.length; i++){
	console.log("sum: ", sum);
	console.log("current number: ", multiplyArray[i]);
	sum = multiplyArray[i] * sum;
}
	return sum
	console.log(sum);
};

sum([2, 2, 3]);