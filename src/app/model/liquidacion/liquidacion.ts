export class Liquidacion {
  idEmployee: number;
  fechaFin: Date;
  motivo: string;


  constructor(idEmployee: number, fechaFin: Date, motivo: string){
      this.idEmployee = idEmployee;
      this.fechaFin = fechaFin;
      this.motivo = motivo;
  }
}
