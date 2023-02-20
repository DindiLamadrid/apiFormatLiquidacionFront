import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
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
    const err = new Error({ status: '', message: '' });
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
        
        this.redirectUserList();
      },
      error => this.errorMessage = (error));
  }

  redirectUserList(){
    this.router.navigate(['/employeelist']);
  }

}
