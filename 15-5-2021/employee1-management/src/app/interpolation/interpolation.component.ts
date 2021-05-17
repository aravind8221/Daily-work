import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Interpolation-Examples';
  num: number = 1;
  car: any ={
    carModel: "Maruthi",
    carPrice: 350000,

  }

}
