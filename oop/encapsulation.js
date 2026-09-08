// it a public

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

// it a private  with use of "#"

class BankAcc {
  #balance;
  constructor(balance) {
    this.#balance = balance;
  }
  deposite(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
    }
  }
  getbalance() {
    return this.#balance;
  }
}

const acc = new BankAcc(1000);

acc.deposite(5000);
acc.withdraw(2000);

console.log(acc.getbalance());
