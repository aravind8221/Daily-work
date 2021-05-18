import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit{
  employees: Employee[];
  
  constructor(private employeeService:EmployeeService) {}
    ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe(data => {
          this.employees=data;
      })
    }
  


}