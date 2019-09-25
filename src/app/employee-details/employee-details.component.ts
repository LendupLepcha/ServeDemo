import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  employeeDetail=[
    {id:1,name:'abc',dept:'CSE'},
    {id:2,name:'xyz',dept:'ME'},
    {id:3,name:'def',dept:'CE'}
  ]
}
