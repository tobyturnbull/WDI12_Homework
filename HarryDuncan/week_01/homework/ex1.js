// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// Accounts

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.

var bank = []

var addAccount = function(person, money){          // this is the function to be able to add new accounts
	bank.push({name: person, balance: money});
	console.log('added ' + person + ' ' + money + ' to the bank array')
}

var bankBalance = function(){  // this is the function for the total of the accounts
	var total = 0;
	for (var i = 0; i < bank.length; i++) {
		total = total + bank[i].balance
	};

	console.log('the bank is $' + total + ' fucking rich')
}

var checkAccount = function(name){   // this is the function to check the individual accounts 
		for (var i = 0; i < bank.length; i++) {
			if (name === bank[i].name){
			console.log(name + " has $" + bank[i].balance)
			}
				
		};
}

addAccount('harry', 500)
addAccount('shenna',500)

// this is the function to be able to deposit from individual accounts 

var deposit = function(person, cash){		
	var result;											
	for (var i = 0; i < bank.length; i++) {
		if (person === bank[i].name){
			result = bank[i];
		} 
	}; result.balance = result.balance + cash;
	console.log(person + 'deposited $' + cash + ' hard cold cash. you now have ' + result.balance + ' fucking dollars mofo $$$$$' )
}

// this is the function to be able to deposit to individual accounts

var withdraw = function(person, cash){		
	var result;											
	for (var i = 0; i < bank.length; i++) {
		if (person === bank[i].name){
			result = bank[i];
		} 
	}; result.balance = result.balance - cash;
	console.log(person + 'stole $' + cash + ' from herself fool. She still has ' + result.balance + ' fucking dollars in da bank')
}


// var transfer = function(name1, cashMoney, name2){ // this is working 
// 			withdraw(name1, cashMoney)
// 			deposit(name2, cashMoney)
// 			console.log(name1 + ' transferred $' + cashMoney + ' to ' + name2)
// }


/*


var withdrawFromAccount = function(accName, amount) {
	var currentAccount;
	for ( var i = 0; i < bank.length; i++ ) {
		if ( accName === bank[i].name ) {
			currentAccount = bank[i];
		}
	}
	currentAccount.balance = currentAccount.balance - amount;
	console.log("Withdrawal complete. Current balance is $" + currentAccount.balance);
};
var depositToAccount = function(accName, amount) {
	var currentAccount;
	for ( var i = 0; i < bank.length; i++ ) {
		if ( accName === bank[i].name ) {
			currentAccount = bank[i];
		}
	}
	currentAccount.balance = currentAccount.balance + amount;
	console.log("Deposit complete. Current balance is $" + currentAccount.balance);
};
var transfer = function(person1, person2, amountToTransfer) {
	withdrawFromAccount(person1, amountToTransfer);
	depositToAccount(person2, amountToTransfer);
	console.log("Transferred $" + amountToTransfer + " from " + person1 + " to " + person2)
};
addAccount("Mike", 5000);
addAccount("Eric", 250);
addAccount("Shennah", 9500);





*/
















