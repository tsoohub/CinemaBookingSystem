import { Injectable,EventEmitter } from '@angular/core';

/* Molomjamts 02/05/2018
  It is used to pass data between 2 components. 
  used to pass ticket detail from ticket order component to confirmation component.
  This code is taken from MWA lecture.
  */
@Injectable()
export class ConfirmationServiceService {
  pushedData = new EventEmitter<any>();
  pushData(data:any){
    this.pushedData.emit(data);
  }
  constructor() { }

}
