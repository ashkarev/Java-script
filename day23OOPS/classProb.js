class Bank {
  // property
  accountDetails = {
    1000: {
      accno: 1000,
      userName: "userOne",
      password: "password1",
      balance: 5000,
    },
    1001: {
      accno: 1001,
      userName: "userTwo",
      password: "password2",
      balance: 7000,
    },
    1002: {
      accno: 1002,
      userName: "userThree",
      password: "password3",
      balance: 8000,
    },
    1003: {
      accno: 1003,
      userName: "userFour",
      password: "password4",
      balance: 6000,
    },
    1004: {
      accno: 1004,
      userName: "userFive",
      password: "password5",
      balance: 9000,
    },
  };

  //   methods

  // authenticate account (acccno, username & password)
  checkAccNo(accno) {
    if (accno in this.accountDetails) {
      return true;
    } else {
      return false;
    }
  }
  validate(accno, userName, pwdd) {
    if (this.checkAccNo(accno)) {
      let accCheck = this.accountDetails[accno];
      if (accCheck.userName == userName && accCheck.password == pwdd) {
        return true;
      } else {
        return false;
      }
    } else {
      console.log("Invalid Account");
    }
  }
  balanceEnquiry(accno, user, pwd) {
    if (this.validate(accno, user, pwd)) {
      let balanceDisplay = this.accountDetails[accno];
      console.log(balanceDisplay.balance);
    } else {
      return false;
    }
  }
}

// balance enquiry (accno)

let b1 = new Bank();
let result = b1.checkAccNo(1001);

result ? console.log("valid Account") : console.log("Not Valid");

let result2 = b1.validate(1001, "userTwo", "password2");
console.log(result2);
let result3 = b1.balanceEnquiry(1002, "userThree", "password3");
