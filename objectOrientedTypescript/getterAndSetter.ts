//getter - setter

class BankAccount2 {
  public readonly userId: number;
  public userName: string;
  protected balance: number;

  constructor(userId: number, userName: string, balance: number) {
    this.userId = userId;
    this.userName = userName;
    this.balance = balance;
  }

  //setter
  set addBalance(balance: number) {
    this.balance += balance;
  }

  //set balance function
  //   addBalance(balance: number) {
  //     this.balance = this.balance + balance;
  //   }

  //getter

  get getBalance() {
    return this.balance;
  }

  //get balance function
  //   getBalance() {
  //     return this.balance;
  //   }
}

const userAccount2 = new BankAccount2(1, "User", 1000);

userAccount.addBalance(100);

userAccount2.addBalance = 20;

console.log(userAccount2.getBalance);
