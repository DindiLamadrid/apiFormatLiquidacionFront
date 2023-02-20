import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
import { Salary } from 'src/app/model/salary/salary';
import { HttpClient } from '@angular/common/http';
import { EmployeeService } from 'src/app/services/employee/employee.service';


@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.css']
})
export class CreateSalaryComponent {

  employee: Employee = new Employee();
  salary : Salary = new Salary(0, '');
  errorMessage: Httperrorresponse= new Httperrorresponse();
  id: number;
  oldSalary: string;



  constructor(private employeeService : EmployeeService,
    private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {
    this.salary = new Salary(0,'');
    this.employee.salary = this.salary;


    const err = new Error({ status: '', message: '' });
    this.errorMessage = new Httperrorresponse();
    this.errorMessage.error = err;
    console.log(this.employee);

    //Recogemos el ID que nos llega en la url desde el formulario
    this.id = this.activatedRoute.snapshot.params['id'];
    //Utilizamos el método de UserService para obtener usuario
    this.employeeService.getEmployeeById(this.id).subscribe(
      emp => {
        this.employee = emp;
        this.oldSalary = this.employee.salary.value;
        console.log(emp)
      },
      error => console.log(error));

  }

  onSubmitForm(){
    console.log(this.employee);
    this.commitSalary();
  }

  commitSalary(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      employee =>{
        console.log(employee);
        this.redirectEmployeeList(this.id);
      },
      error => this.errorMessage = (error));
  }

  redirectEmployeeList(id: number){
    this.router.navigate(['/vermas', id]);
  }
}
