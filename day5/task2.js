let input = 123456789;
let num = null;
while (input > 0) {
  let lastDigit = 0;
  lastDigit = input % 10;
  input = Math.floor(input / 10);
  num = num * 10 + lastDigit;
}
console.log(num);
