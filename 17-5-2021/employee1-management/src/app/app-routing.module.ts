import { AddEmployeeComponent } from './employee/add-employee/add-employee.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';


const routes: Routes=[
  {path: '', component: EmployeeComponent},
  {path: 'add-employee', component: AddEmployeeComponent},
  {path: 'employee/:id', component: EmployeeComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
