let num = 12345;
let sum = 0;
while (num > 0) {
  let lastDigit = 0;
  lastDigit = num % 10;
  num = Math.floor(num / 10);
  sum = sum + lastDigit;
}
console.log(sum);
