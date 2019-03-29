import {Injectable} from '@angular/core';

@Injectable() // means other services can inject into this class
export class LogService {
  toLog(message: string){
    console.log(message);
  }
}
