//  # # # #
//  # * * #
//  # # # #
//  # * * #
for (let row = 1; row <= 4; row++) {
  line = "";
  for (col = 1; col <= 4; col++) {
    if (row == 1 || row == 4 || col == 1 || col == 4) {
      line = line + " #";
    } else {
      line = line + " *";
    }
  }
  console.log(line);
}
