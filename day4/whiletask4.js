let num = 1;
while (num <= 100) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`FIZZ - BUZZ- ${num}`);
  } else if (num % 5 == 0) {
    console.log(`BUZZ -   ${num}`);
  } else if (num % 3 == 0) {
    console.log(`FIZZ  - ${num}`);
  }
  num++
}
