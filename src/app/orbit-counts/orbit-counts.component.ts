import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

  countRockets(type:string):number{
    let counter = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type.indexOf(type) >= 0) {
        counter++;
      }
    }
    return counter;
  }

  @Input() satellites: Satellite[];

  constructor() { }

  ngOnInit() {
  }

}
