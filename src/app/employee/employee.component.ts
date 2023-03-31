import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Login } from '../interface_employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

  EmpInterFaceArray:Array<Login>=[];
  empArr:any={ Name:"", pass:""}
  tempIndex:number=-1;

  constructor(private EmployeeServiceObject :EmployeeService){}
  ngOnInit(): void{
      this.EmpInterFaceArray=this.EmployeeServiceObject.addNewUser();
  }




save(){
    let obj:Login={name:this.empArr.EmpName,  password:this.empArr.pass}

    

    this.empArr={ EmpName:"", EmpAdd:"", EmpEmail:"", EmpPhno:""}
    this.EmpInterFaceArray=this.EmployeeServiceObject.addNewUser();
    this.tempIndex=-1

}



}
