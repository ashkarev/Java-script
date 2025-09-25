let num = 10;
//

while (num <= 20) {
    let fact = 1;
    let copy = num;
  while (copy >= 1) {
    
    fact = fact * copy;
    copy--;
  }

  console.log(fact);
  num++;
}
