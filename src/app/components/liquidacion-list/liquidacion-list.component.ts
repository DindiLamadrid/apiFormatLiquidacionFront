import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee/employee';
import { Liquidacion } from 'src/app/model/liquidacion/liquidacion';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { LiquidacionService } from 'src/app/services/liquidacion/liquidacion.service';

@Component({
  selector: 'app-liquidacion-list',
  templateUrl: './liquidacion-list.component.html',
  styleUrls: ['./liquidacion-list.component.css']
})
export class LiquidacionListComponent {
  liquidacion : Liquidacion[]
  employee: Employee = new Employee();
  id : number;


  constructor(
    private liquidacionService : LiquidacionService, private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute, private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      emp => {
        this.employee = emp;
        this.id = emp.id
        console.log(emp)

      },
      error => console.log(error));

      console.log(this.getHistorySalaryByEmp());
      this.getHistorySalaryByEmp();
 }

 private getHistorySalaryByEmp(){
  console.log('help', this.id)
  this.liquidacionService.getHistoryLiquidacionByEmployee(this.id).subscribe(
    liquidacionData => {this.liquidacion = liquidacionData; console.log(liquidacionData)}
  );
}

vermas(id: number){
  //Lo envía a través de app-routing.module.ts
  this.router.navigate(['vermas', id]);
}

}
