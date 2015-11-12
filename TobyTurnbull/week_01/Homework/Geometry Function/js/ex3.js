var bank = [
		{name: "Bob", balance: 500}
		{name: "James", balance: 1000}
		{name: "Bill", balance: 1500}
		{name: "Miles", balance: 2500}
		{name: "Jack", balance: 2000}
]

var addAccount = function (n, b) {
	var addName = n.toString();
	var addBalance = parseFloat(b);
	bank.push ({name: addName, accountBal: addBalance});
	
}

var deposit = function (a,b) {
	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name == a) {
			bank[i].addBalance = b + bank[i].accountBal
		}
	}
}

var deposit = function (a2,b2) {
	for (var i = 0; i < bank.length; i++) {
		if (bank[i].name == a2) {
			bank[i].addBalance = b2 + bank[i].accountBal
		}
	}
}
