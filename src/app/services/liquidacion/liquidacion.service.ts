import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liquidacion } from 'src/app/model/liquidacion/liquidacion';

@Injectable({
  providedIn: 'root'
})
export class LiquidacionService {
  private createLiqbackendURL = "http://localhost:8087/liquidacion/createLiquidacion";
  private getLiquidacionByEmp = "http://localhost:8087/liquidacion/getLiquidacionByEmployee";



  constructor(private httpClient: HttpClient) {
   }


  createLiquidacion(liquidacion: Liquidacion): Observable<Object>{
    return this.httpClient.post(`${this.createLiqbackendURL}`, liquidacion);
  }

  getHistoryLiquidacionByEmployee(id: number): Observable<Liquidacion[]>{
    return this.httpClient.get<Liquidacion[]>(`${this.getLiquidacionByEmp}/${id}`);
  }
}
