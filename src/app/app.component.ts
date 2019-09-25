import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp:EmployeeService){}
  title = 'secondapp';
  emp_id
  emp_name
  emp_dept
  myEmp={
    id:0,
    name:'',
    dept:''
  }
  addEmployee(){
    this.myEmp.id=this.emp_id;
    this.myEmp.name=this.emp_name;
    this.myEmp.dept=this.emp_dept;
    this.emp.setEmployee(this.myEmp);
  }
}
