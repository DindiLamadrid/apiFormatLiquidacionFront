import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Historysalary } from 'src/app/model/historysalary/historysalary';
import { Salary } from 'src/app/model/salary/salary';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { HistorysalaryService } from 'src/app/services/historysalary/historysalary.service';

@Component({
  selector: 'app-verhistorialsalarios',
  templateUrl: './verhistorialsalarios.component.html',
  styleUrls: ['./verhistorialsalarios.component.css']
})
export class VerhistorialsalariosComponent {
  historySalary : Historysalary[]
  id : number;
  employee: Employee = new Employee();
  salary : Salary = new Salary(0, '', '');
ngModel: any;


  constructor(
    private historySalaryService : HistorysalaryService, private employeeService : EmployeeService,
    private activatedRoute: ActivatedRoute, private router: Router
  ) { }
  ngOnInit(): void {


     this.id = this.activatedRoute.snapshot.params['id'];
     this.employeeService.getEmployeeById(this.id).subscribe(
       emp => {
         this.employee = emp;
         this.id = emp.id
         console.log(emp)

       },
       error => console.log(error));

       console.log(this.getHistorySalaryByEmp());
       this.getHistorySalaryByEmp();
  }

  private getHistorySalaryByEmp(){
    console.log('help', this.id)
    this.historySalaryService.getHistorySalaryByEmployee(this.id).subscribe(
      employeeData => {this.historySalary = employeeData; console.log(employeeData)}
    );
  }

  vermas(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['vermas', id]);
  }
}
