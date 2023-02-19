import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Historysalary } from 'src/app/model/historysalary/historysalary';

@Injectable({
  providedIn: 'root'
})
export class HistorysalaryService {

  private getHistorySalary = "http://localhost:8087/historysalary/getAllSalariesById";

  constructor(private httpClient: HttpClient) {
  }

  getHistorySalaryByEmployee(id: number): Observable<Historysalary[]>{
    return this.httpClient.get<Historysalary[]>(`${this.getHistorySalary}/${id}`);
  }
}
