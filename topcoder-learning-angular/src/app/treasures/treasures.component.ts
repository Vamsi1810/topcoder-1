import { Component, OnInit } from '@angular/core';
import { TREASURES } from '../mock-treasures';
import { Treasure } from '../mock-treasures'
@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.css']
})
export class TreasuresComponent implements OnInit {
  treasures=TREASURES;
  ans :Treasure
  constructor() { }
   
  ngOnInit(): void {
  }
   func(id:number){
      for(let i=0;i<10;i++){
         if(this.treasures[i].id === id){
           this.ans= this.treasures[i];
         }
      }
   }
}
