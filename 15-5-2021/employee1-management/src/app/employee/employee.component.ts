
import { Employee } from './../model/employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  implements OnInit{
  employees: Employee[];
  
  constructor(private employeeService:EmployeeService, private router: Router) {}
    ngOnInit(): void {
      this.employeeService.getAllEmployees().subscribe(data => {
          this.employees=data;
      })
    }
    updateEmployee(employee: Employee): void{
      localStorage.removeItem('id');
      localStorage.setItem('id', employee.id.toString());
      this.router.navigate(['update-employee']);
      
    }
    deleteEmployee(employee: Employee): void{
      this.employeeService.deleteEmployee(employee.id).subscribe();
      this.employees = this.employees.filter(e => e !== employee);
    }


}