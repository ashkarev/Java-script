const accounts = [
  {
    acno: 1000,
    ac_type: "saving",
    balance: 45000,
    transaction: [
      { to: 1001, amount: 5000, msg: "ebill", mode: "gpay" },
      { to: 1002, amount: 2000, msg: "emi", mode: "neft" },
      { to: 1003, amount: 1000, msg: "recharge", mode: "phonePe" },
    ],
  },
  {
    acno: 1001,
    ac_type: "current",
    balance: 30000,
    transaction: [
      { to: 1000, amount: 4000, msg: "rent", mode: "upi" },
      { to: 1004, amount: 3500, msg: "shopping", mode: "net banking" },
    ],
  },
  {
    acno: 1002,
    ac_type: "saving",
    balance: 55000,
    transaction: [
      { to: 1003, amount: 5000, msg: "loan", mode: "rtgs" },
      { to: 1005, amount: 1500, msg: "grocery", mode: "upi" },
    ],
  },
  {
    acno: 1003,
    ac_type: "saving",
    balance: 20000,
    transaction: [
      { to: 1002, amount: 2500, msg: "internet bill", mode: "neft" },
      { to: 1004, amount: 3200, msg: "electricity", mode: "gpay" },
    ],
  },
  {
    acno: 1004,
    ac_type: "current",
    balance: 60000,
    transaction: [
      { to: 1005, amount: 7000, msg: "car loan", mode: "phonePe" },
      { to: 1001, amount: 2200, msg: "fuel", mode: "upi" },
    ],
  },
];

// total number of accounts
console.log(accounts.length)

// print account number whose ac_type is savings
AccType=accounts.find((element)=>element.ac_type=='saving')
console.log(AccType)

// print the balance of account number 1000
accBalance=accounts.find((element)=>element.acno==1000)
console.log(accBalance.balance)

// print all phonePay transaction
  let transactionName=accounts.map((element)=>element.transaction)
  let flatened=transactionName.flat(Infinity)
  onlyPhone=flatened.filter((element)=>element.mode=='phonePe')
  console.log(onlyPhone)
// print all transactions > 3000
let transactiionAmount=accounts.map((element)=>element.transaction)
let flatAmount=transactiionAmount.flat(Infinity)
amountStr=flatAmount.filter((element)=>element.amount>3000)
console.log(amountStr)

console.log("------------------------------------------");
// print credit transaction of account 1002(CREDITED TO)
let transCredit=accounts.map((element)=>element.transaction)
let flatCredit=transCredit.flat(Infinity)
let newCredit=flatCredit.filter((element)=>element.to==1002)
console.log(newCredit)


console.log('-----------------------------')
// print total credited amount to 1002
newCrd=newCredit.reduce((acc,rec)=>acc+rec.amount,0)
console.log(newCrd)

console.log('--------------------------------------------')

// print debit transaction of 1002

let newDebit=accounts.find((element)=>element.acno==1002)
let debitTranc=newDebit.transaction
console.log(newDebit)
// let total=newDebit.reduce((acc,curr)=>acc+curr.)



console.log('--------------------------------')
// transaction history of 1002
let history=[...newCredit,...debitTranc]
console.log(history)

// current balance of 1002 (balace +credit amount)
let current1002=accounts.find((element)=>element.acno==1002)
console.log(current1002)
console.log(current1002.balance+newCrd)





// Account with highest balance

// let high=accounts.reduce((acc,curr)=>acc.balance>curr.balance?acc:curr)
// console.log(high)

