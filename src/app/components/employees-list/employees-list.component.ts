import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { EmployeeService } from 'src/app/services/employee/employee.service';


@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})


export class EmployeesListComponent implements OnInit {
  employees : Employee[]


  constructor(
    private employeeService : EmployeeService,
    private router: Router
  ) { }
  ngOnInit(): void {
    console.log(this.getEmployees());
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.findAllEmployees().subscribe(
      employeeData => {this.employees = employeeData}
    );
  }

  updateEmployee(id: number){
    this.router.navigate(['updateemployee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      employeeData => {
      console.log(employeeData);
      this.getEmployees();
    })
  }


  liquidacionEmployee(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['liquidacionemployee', id]);
  }

  vermas(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['vermas', id]);
  }

}
