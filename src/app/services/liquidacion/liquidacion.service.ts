import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Liquidacion } from 'src/app/model/liquidacion/liquidacion';

@Injectable({
  providedIn: 'root'
})
export class LiquidacionService {
  private createLiqbackendURL = "http://localhost:8087/liquidacion/createLiquidacion";


  constructor(private httpClient: HttpClient) {
   }


  createLiquidacion(liquidacion: Liquidacion): Observable<Object>{
    return this.httpClient.post(`${this.createLiqbackendURL}`, liquidacion);
  }
}
