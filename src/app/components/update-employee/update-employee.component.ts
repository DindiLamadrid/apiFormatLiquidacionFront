import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
import { Salary } from 'src/app/model/salary/salary';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  salary: Salary = new Salary(0,'');
  id: number;
  errorMessage: Httperrorresponse= new Httperrorresponse();


  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salary = new Salary(0,'');
    this.employee.salary = this.salary;

    const err = new Error('','');
    this.errorMessage = new Httperrorresponse();
    this.errorMessage.error = err;
    console.log(this.employee);


     //Recogemos el ID que nos llega en la url desde el formulario
     this.id = this.activatedRoute.snapshot.params['id'];
     //Utilizamos el método de UserService para obtener usuario
     this.employeeService.getEmployeeById(this.id).subscribe(
       emp => {
         this.employee = emp;
         console.log(emp)

       },
       error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.salary.value = this.employee.salary.value
    this.employee.salary = this.salary
    console.log('ptm', this.employee)
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      empData =>{
        console.log(empData);
        this.redirectEmployeeList();
      },
      error => this.errorMessage = (error));
  }

  //Redirección a lista de usuarios
  redirectEmployeeList(){
    this.router.navigate(['/employeelist']);
  }



}
