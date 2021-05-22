import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  num: number= 0;
  flag: any;

  @Output() evenNumberEvent = new EventEmitter<{num:number}>();
  @Output() oddNumberEvent = new EventEmitter<{num:number}>();
  
  onStart(){
    this.flag = setInterval(()=>{
      this.num=this.num+1;
      if(this.num%2 == 0){
        this.evenNumberEvent.emit({
          num: this.num
        })
      }
      else{
        this.oddNumberEvent.emit({
          num: this.num
        })
      }

    },
    1000);
  }
   onStop(){
     clearInterval(this.flag);
   }