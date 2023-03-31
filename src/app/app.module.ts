import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{ FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
  EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
