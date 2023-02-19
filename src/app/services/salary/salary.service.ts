import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Salary } from 'src/app/model/salary/salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private createbackendURL: string = "http://localhost:8087/salary/createSalary";

  constructor(private httpClient: HttpClient) {
  }

  createSalary(salary: Salary): Observable<Object>{
    return this.httpClient.post(`${this.createbackendURL}`, salary);
  }
}
