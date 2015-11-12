// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. 
//The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. 
//The bank needs a method that will return the total sum of money in the accounts.
//It also needs an addAccount method that will enroll a new account at the bank
// and add it to the array of accounts. There is no need to create additional
//functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of 
//common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit 
//or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- 
//you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows 
//that the methods do indeed work as expected: add some accounts, show the total balance, 
//make some deposits and withdrawals, show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional

// Begin exploring the JavaScript Koans. Fork, clone and start trying them.
console.log("lorem ipsum");


var bank = [
	{ accountName: "Ruby", currentBalance: 300 },
	{ accountName: "Dan", currentBalance: 476 },
	{ accountName: "Rosy", currentBalance: 10 },
];

var accPos = function (name) {
	for (var i = 0; i < bank.length; i++) {
		if ( bank[i].accountName === name )
			return i;
	};
	console.log("ERROR! ERROR!");
}
var currentBal = function (name) {
	return bank[accPos(name)].currentBalance;
}

var accBal = function (name) {
	return "$" + currentBal(name);
}

// Make a new account
var aNewAccount = function (name, balance) {
	bank.unshift({accountName: name, 
		accountBalance: balance});
};

//deposit
var deposit = function (name, adds) {
	var account = accPos(name)
	bank[ account ].currentBalance = bank[ account ].currentBalance + adds;
	console.log ("The current balance is now $"+ accBal(name))
};



//withdraw
var withdraw = function (name, subs) {
	if (currentBal(name) < subs) {
		return "You do not have enough money to withdraw that!";
	}
	var account = accPos(name)
	bank[ account ].currentBalance = bank[ account ].currentBalance - subs;
};


var transfer = function (from, to, num) {
	if (currentBal(from) > num) {
		withdraw(from, num);
		deposit(to, num);
	} else {
		return "Transfer failed"
	};
};



// THE STORY BEGINS HERE! LET US ALL TAKE A MAGICAL BANK JOURNEY!


//new1 opens a new account with $1000 in it.
//new2 opens a new account with $300 in it.
//new1 withdraws $600 for a trip to the casino.
//new2 gets paid, and $437 is added to his account.
//new1 hires new2 to write some code and transfers them a $350 deposit
//new2 finishes, so new1 tries to transfer second payment. But he doesn't have the $350.