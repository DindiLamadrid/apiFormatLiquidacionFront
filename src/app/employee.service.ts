import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private backendURL: string = "http://localhost:8087/employee/getAllEmployees";
  private createbackendURL: string = "http://localhost:8087/employee/createEmployee";

  constructor(private httpClient: HttpClient) {
   }

   //Methods
  findAllEmployees(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.backendURL}`);
  }

  getEmployeeById(id: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.backendURL}/${id}`);
  }


  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.createbackendURL}`, employee);
  }

  //PUT
  updateEmployee(id: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.backendURL}/${id}`, employee);
  }

  //DELETE
  deleteEmployee(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.backendURL}/${id}`);
  }
}
