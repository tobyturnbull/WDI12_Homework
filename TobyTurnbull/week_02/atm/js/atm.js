//for the functions to respond to to buttons

$("checking-deposit").on("click", addMoney);
$("savings-deposit").on("click", addMoney);

$("checking-withdraw").on("click", subMoney);
$("savings-withdraw").on("click", subMoney);

//functions for adding money to either account
function addMoney(){
	var oldBal = $(this).siblings("div.balance");
	var result = oldBal.text();
	var currentBal = parseInt(result.replace("$", ""));
	var newEntry = parseInt($(this).siblings("input.balance").val());

$(oldBal).text(function(){
	var total = newEntry + currentBal;
	return "$" + total;
});

$(this).siblings("input.balance").val("");
$(this).siblings("div.balance").css("background-color", "white")
}

//function to return the total value of both accounts for later use
var balanceSum;
function getSumBalances() {
	var cBalanceA = $("#checking-amount").text();
	var cBalanceB = parseInt(cBalanceA.replace("$", ""));
	var sBalanceA = $("#savings-amount").text();
	var sBalanceB = parseInt(sBalanceA.replace("$", ""));
	balanceSum = sBalance2 + cBalanceB;
	return balanceSum;
}
//function to deduct money from both accounts
function subMoney() {
	getSumBalances();
	var oldBal = $(this).siblings("div.balance");
	var result = oldBal.text();
	var currentBal = parseInt(result.replace("$", ""));
	var newWithdrawal = parseInt($(this).siblings("input.balance").val());
	$(oldBal).text( function(){
		var total = currentBal - newWithdrawal;

	});
};
