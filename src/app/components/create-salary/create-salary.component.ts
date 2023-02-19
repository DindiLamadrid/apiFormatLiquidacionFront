import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
import { Salary } from 'src/app/model/salary/salary';
import { SalaryService } from 'src/app/services/salary/salary.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.css']
})
export class CreateSalaryComponent {

  salary: Salary = new Salary(0, '');
  errorMessage: Httperrorresponse= new Httperrorresponse();

  searchTerm = '';
  countries: Employee[] = [];
  allCountries: Employee[] = [];


  constructor(private salaryService : SalaryService,
    private router: Router, private http: HttpClient) { }


  ngOnInit(): void {
    const err = new Error('','');
    this.errorMessage = new Httperrorresponse();
    this.errorMessage.error = err;
    console.log(this.salary);

    this.http.get<Employee[]>('./assets/data/countries.json')
      .subscribe((data: Employee[]) => {
        this.countries = data;
      });
  }

  onSubmitForm(){
    console.log(this.salary);
    this.commitSalary();
  }

  commitSalary(){
    this.salaryService.createSalary(this.salary).subscribe(
      salaryData =>{
        console.log(salaryData);
        this.redirectEmployeeList();
      },
      error => this.errorMessage = (error));
  }

  redirectEmployeeList(){
    this.router.navigate(['/employeelist']);
  }
}
