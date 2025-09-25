let num = 121;
let copy = num;
let result = 0;

for (let i = 1; num > 0; i++) {
  let lastDigit = num % 10;
  num = Math.floor(num / 10);
  result = result * 10 + lastDigit;
}
  if (copy == result) {
    console.log(copy,"the value is palindrome");
  } else {
    console.log(copy,"not");
  }
