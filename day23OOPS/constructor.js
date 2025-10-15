class person {
  constructor() {
    this.name = "ASH";
    this.age = 21;
    this.height = "175cm";
  }

  displayDetails() {
    console.log(
      `My Name is ${this.name},height is ${this.height},age is ${this.age}`
    );
  }
}
let obj = new person();
obj.displayDetails();
