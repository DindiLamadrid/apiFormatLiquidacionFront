export class Error {
  status: string;
  message : string;


  constructor(status:string, message:string){
    this.status = status,
    this.message = message  }
}
