export class Liquidacion {
  idEmployee: number;
  fechaFin: Date;
  motivo: string;
  aux_transporte: string;
  auxilio: string;
  bono: string;
  cesantias: string;
  dias_laborados: string;
  fecha_fin: string;
  fecha_inicio: string;
  intereses_cesantias: string;
  prima_servicios: string;
  salario: string;
  salario_base: string;
  total_liquidacion: string;
  vacaciones: string;




  constructor(idEmployee: number, fechaFin: Date, motivo: string){
      this.idEmployee = idEmployee;
      this.fechaFin = fechaFin;
      this.motivo = motivo;
  }
}
