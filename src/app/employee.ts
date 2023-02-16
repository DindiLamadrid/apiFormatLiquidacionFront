import { Salary } from "./salary";

export class Employee {
  id: number;
  document: string;
  name: string;
  job: string;
  salary: Salary;
  startDate: Date;

  Employee(id:number, salary:Salary) {
  }
}
