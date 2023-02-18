import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Error } from 'src/app/error';
import { Httperrorresponse } from 'src/app/httperrorresponse';
import { Employee } from 'src/app/model/employee/employee';
import { Salary } from 'src/app/model/salary/salary';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  salary: Salary = new Salary(0, '');
  errorMessage: Httperrorresponse= new Httperrorresponse();


  constructor(
    private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    const err = new Error('','');
    this.errorMessage = new Httperrorresponse();
    this.errorMessage.error = err;
    this.employee.salary = this.salary
    console.log(this.employee);
  }

  onSubmitForm(){
    console.log(this.employee);
    this.commitEmployee();
  }

  commitEmployee(){
    console.log('amp', this.employee.salary.value)


    this.employeeService.createEmployee(this.employee).subscribe(
      userData =>{
        console.log(userData);
        //Llamamos al método de redirección para volver a la lista de usuarios
        this.redirectUserList();
      },
      error => this.errorMessage = (error));
  }

  redirectUserList(){
    this.router.navigate(['/employeelist']);
  }

}
