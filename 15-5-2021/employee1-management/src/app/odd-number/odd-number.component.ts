import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd-number',
  templateUrl: './odd-number.component.html',
  styleUrls: ['./odd-number.component.css']
})
export class OddNumberComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  @Input('odd') name: string;

}
