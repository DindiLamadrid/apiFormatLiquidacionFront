import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from 'src/app/components/employees-list/employees-list.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { LiquidacionEmployeeComponent } from './components/liquidacion-employee/liquidacion-employee.component';

const routes: Routes = [
  {path: 'employeeslist', component: EmployeesListComponent},
  {path: 'createemployee', component: CreateEmployeeComponent},
  {path: 'updateemployee/:id', component: UpdateEmployeeComponent},
  {path: 'liquidacionemployee/:id', component: LiquidacionEmployeeComponent},
  //Por defecto, redirigimos a la lista de usuarios
  {path: '**', redirectTo: 'employeeslist', pathMatch: 'full'}

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
