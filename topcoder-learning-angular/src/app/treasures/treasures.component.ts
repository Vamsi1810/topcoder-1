import { Component, OnInit } from '@angular/core';
import { Treasure } from '../mock-treasures'
@Component({
  selector: 'app-treasures',
  templateUrl: './treasures.component.html',
  styleUrls: ['./treasures.component.css']
})
export class TreasuresComponent implements OnInit {
  treasure: Treasure = {
    id: 1,
    name: 'Windstorm Gold Staff',
    location: 'Tree behind home',
  };
  constructor() { }
   
  ngOnInit(): void {
  }
   
}
