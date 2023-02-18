import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Employee } from 'src/app/model/employee/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private getAllUrl: string = "http://localhost:8087/employee/getAllEmployees";
  private createbackendURL: string = "http://localhost:8087/employee/createEmployee";
  private editEmpUrl = "http://localhost:8087/employee/updateEmployee";
  private getEmployee = "http://localhost:8087/employee/getEmployeeById";
  private deleteEmp = "http://localhost:8087/employee/deleteEmployee";
  private createLiqbackendURL = "http://localhost:8087/liquidacion/createLiquidacion";


  constructor(private httpClient: HttpClient) {
   }

   //Methods
  findAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.getAllUrl}`);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.getEmployee}/${id}`);
  }


  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.createbackendURL}`, employee);
  }

  //PUT
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.editEmpUrl}`, employee);
  }

  //DELETE
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteEmp}/${id}`);
  }


  createLiquidacion(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.createLiqbackendURL}`, employee);
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
