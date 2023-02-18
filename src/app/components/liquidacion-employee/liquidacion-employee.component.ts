import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Error } from 'src/app/model/error_handler/error';
import { Httperrorresponse } from 'src/app/model/error_handler/httperrorresponse';
import { Liquidacion } from 'src/app/model/liquidacion/liquidacion';
import { Salary } from 'src/app/model/salary/salary';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LiquidacionService } from 'src/app/services/liquidacion/liquidacion.service';

@Component({
  selector: 'app-liquidacion-employee',
  templateUrl: './liquidacion-employee.component.html',
  styleUrls: ['./liquidacion-employee.component.css']
})
export class LiquidacionEmployeeComponent {
  employee: Employee = new Employee();
  listamotivos:string[]=["Retiro Injustificado","Retiro Justificado","Retiro Voluntario"];
  errorMessage: Httperrorresponse= new Httperrorresponse();
  id: number;
  seleccionado = null

  constructor(
    private employeeService: EmployeeService,
    private liquidacionService: LiquidacionService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    let liquidacion = new Liquidacion(this.employee.id, new Date, '');
    console.log(this.seleccionado)
    this.liquidacionService.createLiquidacion(liquidacion).subscribe(

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
