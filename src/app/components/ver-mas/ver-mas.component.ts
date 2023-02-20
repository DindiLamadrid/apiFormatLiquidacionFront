import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
import { Salary } from 'src/app/model/salary/salary';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-ver-mas',
  templateUrl: './ver-mas.component.html',
  styleUrls: ['./ver-mas.component.css']
})
export class VerMasComponent {
  employee: Employee = new Employee();
  salary: Salary = new Salary(0,'','');
  id: number;
  errorMessage: Httperrorresponse= new Httperrorresponse();


  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.salary = new Salary(0,'','');
    this.employee.salary = this.salary;

    const err = new Error({ status: '', message: '' });
    this.errorMessage = new Httperrorresponse();
    this.errorMessage.error = err;
    console.log(this.employee);


     this.id = this.activatedRoute.snapshot.params['id'];
     this.employeeService.getEmployeeById(this.id).subscribe(
       emp => {
         this.employee = emp;
         console.log(emp)

       },
       error => console.log(error));
  }

    onSubmitForm(){
      this.salary.salary = this.employee.salary.salary
      this.employee.salary = this.salary
      console.log('ptm', this.employee)
      this.employeeService.updateEmployee(this.id, this.employee).subscribe(
        empData =>{
          console.log(empData);
        },
        error => this.errorMessage = (error));
    }

    editarsalario(id: number){
      this.router.navigate(['createsalary', id]);
    }


    verhistorialsalarios(id: number){
      this.router.navigate(['verhistorialsalarios', id]);
    }

    verhistorialliquidacion(id: number){
      this.router.navigate(['verhistorialliquidacion', id]);
    }


}
