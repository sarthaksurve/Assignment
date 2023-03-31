import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'First Angular Project';
  no:number=-21;
  arr:Array<number>=[1,34,5];
  flag:boolean=false;

  Stud:Array<any>=[{name:'Sarthak', RollNo:1, email:'sarthaksurve02=1@gmail.com',grade:'A' },
                    {name:'Rohit', RollNo:2, email:'rohit@gmail.com=1@gmail.com',grade:'B'},
                    {name:'Rahul', RollNo:3, email:'Rahul=1@gmail.com',grade:'C'},
                    {name:'Pankaj', RollNo:4, email:'Pankaj@gmail.com=1@gmail.com',grade:'Fail'},
                    {name:'Abhishek', RollNo:5, email:'Abhishek@gmail.com=1@gmail.com',grade:'A'}]


  

}
