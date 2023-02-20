export class Salary {
  id: number;
  salary: string;
  fechaModificacion: string

  constructor(id:number, salary:string, fechaModificacion: string){
    this.id = id,
    this.salary = salary;
    this.fechaModificacion = fechaModificacion;

  }
}


