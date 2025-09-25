let counter = 2;
for (row = 1; row <= 4; row++) {
  let line = "";
  for (col = 1; col <= 4; col++) {
    if (counter % 2 != 0) {
      line = line + counter + " ";
    }

    counter++;
  }
  console.log(line);
}
