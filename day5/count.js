let input = 12345678;
let count = 0;
while (input > 0) {
 
  input = Math.floor(input/10);
  count++
 
}
console.log(count);
