import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  count=105
  title = 'Employee';
  name = 'Aravind';
  getCount(counter:number): void{
    this.count=counter;
    }
    ngOnInit(): void{
      this.getFromChild(this.count);
    }
    getFromChild(event: number): void {
      this.count=event;
    }
}