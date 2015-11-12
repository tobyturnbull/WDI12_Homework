// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

// Bank

// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.

// The bank has many accounts. Accounts should be objects that all share a set of common functionality.

// Accounts

// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.

// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.

// Tips

// Don't overthink this. Shorter code is probably the answer.

// Bonus

// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
var bank = {
    accounts: [],
    totalSum: function(){
      var total = 0;
      console.log('sum all account balances');
      for (var i=0; i < bank.accounts.length; i++){
        var acc = bank.accounts[i];
        console.log('\t' + acc.name + ' ' + acc.balance);
        total += acc.balance;
      }
      console.log('total: ' + total);
      return total;
    },
    addAccount: function( aName, aBalance ){
      bank.accounts.push({
        name: aName,
        balance: aBalance,
        withdraw: function( amt ){
          console.log('account ' + this.name + ' balance: ' + this.balance);
          if (this.balance >= amt){
            this.balance -= amt;
          }else{
            console.log("Can't withdraw");
            return false;
          }
          console.log('\twithdraw $' + amt + ' balance: ' + this.balance);
          return true;
        },
        deposit: function( amt ){
          console.log('account ' + this.name + ' balance: ' + this.balance);
          if (amt > 0){
            this.balance += amt;
          }
          console.log('\tdeposit $' + amt + ' balance: ' + this.balance);
          return this.balance;
        }
      });
    },
    transfer: function( payer, payee, amt ){
      for (var i=0; i < bank.accounts.length; i++){ // get account objects from account name
        var account = bank.accounts[i];
        if (account.name === payer){
          payer = account;
        }
        if (account.name === payee){
          payee = account;
        }
      }
      if (typeof payer === 'object' && typeof payee === 'object' && payer.withdraw(amt)){
        payee.deposit(amt);
      }else{
        console.log('accounts invalid or amount over payer balance');
        return false;
      }
      return true;
    }
};

bank.addAccount('tom', 2);
bank.addAccount('bob', 25);
bank.addAccount('hank', 100);

bank.totalSum();
var hank = bank.accounts[2];
hank.withdraw(3);
var tom = bank.accounts[0];
tom.deposit(15);
bank.totalSum();

bank.transfer('bob', 'tom', 22);
bank.totalSum();