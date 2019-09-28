import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-areagraph',
  templateUrl: './areagraph.component.html',
  styleUrls: ['./areagraph.component.scss']
})
export class AreagraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart1');
    const myChart = new Chart(ctx, {
      data: {
          datasets: [
              {fill: 'origin'},   // 0: fill to 'origin'
              {fill: '-1'},       // 1: fill to dataset 0
              {fill: 1},          // 2: fill to dataset 1
              {fill: false},      // 3: no fill
              {fill: '-2'}        // 4: fill to dataset 2
          ]
      },
      options: {
          plugins: {
              filler: {
                  propagate: true
              }
          }
      }
  });
  }

}
