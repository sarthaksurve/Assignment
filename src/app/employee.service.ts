import { Injectable } from '@angular/core';
import { Login } from './interface_employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


arr:Array<Login>=[];


  constructor() {}

  addNewUser(obj:Login){
    console.log("Adding New Employee Function Called form Services")
    this.arr.push(obj)
  }

 
}
