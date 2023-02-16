import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  id: number;
  constructor(
    private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
     //Recogemos el ID que nos llega en la url desde el formulario
     this.id = this.activatedRoute.snapshot.params['id'];
     //Utilizamos el método de UserService para obtener usuario
     this.employeeService.getEmployeeById(this.id).subscribe(
       emp => {
         this.employee = emp;
       },
       error => console.log(error));
  }

  //Metodo referenciado por el forumulario HTML
  onSubmitForm(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe(
      empData =>{
        console.log(empData);
        this.redirectEmployeeList();
      },
      error => console.log(error));
  }

  //Redirección a lista de usuarios
  redirectEmployeeList(){
    this.router.navigate(['/employeelist']);
  }

}
