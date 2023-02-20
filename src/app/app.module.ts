import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { AppRoutingModule } from './app-routing.module';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { LiquidacionEmployeeComponent } from './components/liquidacion-employee/liquidacion-employee.component';
import { CreateSalaryComponent } from './components/create-salary/create-salary.component';
import { VerMasComponent } from './components/ver-mas/ver-mas.component';
import { VerhistorialsalariosComponent } from './components/verhistorialsalarios/verhistorialsalarios.component';
import { LiquidacionListComponent } from './components/liquidacion-list/liquidacion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesListComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    LiquidacionEmployeeComponent,
    CreateSalaryComponent,
    VerMasComponent,
    VerhistorialsalariosComponent,
    LiquidacionListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
