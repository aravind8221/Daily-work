import { Component } from '@angular/core';
import { EMPLOYEES } from '../employee.mock';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  employees=EMPLOYEES;

}