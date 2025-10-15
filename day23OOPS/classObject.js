class Employee{

    constructor(empID,empName,EmpSalary,EmpDes){
    this.empID=empID
    this.EmpDes=EmpDes
    this.empName=empName
    this.EmpSalary=EmpSalary
    }
    displayDetails(){
        console.log('name of emplloyee',this.empName,'part-time of employee',this.EmpDes,'id of employee',this.empID)
    }
}
let emp1=new Employee(1,"ashkar",'30000','developer')
let emp2=new Employee(2,'nehab','35000','testwr')
let emp3=new Employee(3,"sidharth",'40000','designer')
emp1.displayDetails()
emp2.displayDetails()
emp3.displayDetails()