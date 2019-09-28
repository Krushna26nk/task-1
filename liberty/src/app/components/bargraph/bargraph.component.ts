import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-bargraph',
  templateUrl: './bargraph.component.html',
  styleUrls: ['./bargraph.component.scss']
})
export class BargraphComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const ctx = document.getElementById('myChart');
    const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat','Sun'],
        datasets: [{
            label: '# of Votes',
            data: [8, 12, 3, 5, 2, 3, 8],
            backgroundColor: [
                '#464de4',
                '#464de4',
                '#464de4',
                '#464de4',
                '#464de4',
                '#464de4',
                '#464de4'
            ],
            borderColor: [
                ],
            borderWidth: 0.5,
            barThikness: '2px'
        }]
    },
    options: {
      responsive: true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
  }

}
