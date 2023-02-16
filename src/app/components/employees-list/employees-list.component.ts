import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';


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
    this.getEmployees();
  }

  private getEmployees(){
    //Utilizamos el servicio inyectado para encontrar los usuarios
    this.employeeService.findAllEmployees().subscribe(
      //Arrow function, funcion anónima similar a expersiones Lambda
      employeeData => {this.employees = employeeData}
    );
  }

  updateEmployee(id: number){
    //Lo envía a través de app-routing.module.ts
    this.router.navigate(['updateemployee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe(
      employeeData => {
      console.log(employeeData);
      //Volvemos a recuperar los Users tras el borrado
      this.getEmployees();
    })
  }


}
