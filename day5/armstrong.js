let input = 153;
let copyOfInput = input;
let sum = 0;
while (input > 0) {
  let lastDigit = input % 10;
  input = Math.floor(input / 10);
  sum = sum + lastDigit * lastDigit * lastDigit;
}
if (copyOfInput == sum) {
  console.log(`yes it is ${sum}`);
} else {
  console.log(` noooo${sum}`);
}
