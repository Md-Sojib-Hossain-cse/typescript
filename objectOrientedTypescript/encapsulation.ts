//encapsulation

class BankAccount {
  public readonly userId: number;
  public userName: string;
  protected balance: number;

  constructor(userId: number, userName: string, balance: number) {
    this.userId = userId;
    this.userName = userName;
    this.balance = balance;
  }

  addBalance(balance: number) {
    this.balance = this.balance + balance;
  }
}

class StudentBankAccount extends BankAccount {
  private test() {
    this.balance;
  }
}

const userAccount = new BankAccount(1, "User", 1000);

userAccount.addBalance(100);
