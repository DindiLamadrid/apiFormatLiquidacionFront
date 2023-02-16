import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private getAllUrl: string = "http://localhost:8087/employee/getAllEmployees";
  private createbackendURL: string = "http://localhost:8087/employee/createEmployee";
  private editEmpUrl = "http://localhost:8087/employee/updateEmployee";
  private backendUrl = "http://localhost:8087/employee";

  constructor(private httpClient: HttpClient) {
   }

   //Methods
  findAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.getAllUrl}`);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.backendUrl}/${id}`);
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
    return this.httpClient.delete(`${this.backendUrl}/${id}`);
  }
}
