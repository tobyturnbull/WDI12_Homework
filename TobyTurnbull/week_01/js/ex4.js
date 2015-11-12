var sum = function (sumArray){
	var sum = 0;

for (var i = 0; i < sumArray.length; i++){
	console.log("sum: ", sum)
	console.log("current number: ", sumArray[i])
	sum = sumArray[i] + sum
};
	return sum
	console.log(sum)
};