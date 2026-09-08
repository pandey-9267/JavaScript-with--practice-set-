class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  getbalance() {
    return this.balance;
  }
}
const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getbalance());
