import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onSubmitForm(){
    console.log(this.employee);
    this.commitEmployee();
  }

  commitEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(
      userData =>{
        console.log(userData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectUserList();
      },
      error => console.log(error));
  }

  redirectUserList(){
    this.router.navigate(['/employeelist']);
  }

}
