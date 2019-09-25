import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workingprofessionals',
  templateUrl: './workingprofessionals.component.html',
  styleUrls: ['./workingprofessionals.component.scss']
})
export class WorkingprofessionalsComponent implements OnInit {

  constructor() { }

  data = {
    "sample": [{
      "head": "New Users",
      "count": 65650,
      "iconname": "user-friends"
    },
    {
      "head": "New FeedBacks",
      "count": 32604,
      "iconname": "check-circle"
    },
    {
      "head": "Employees",
      "count": 17583,
      "iconname": "trophy"
    },
    {
      "head": "Total Sales",
      "count": 61119,
      "iconname": "crosshairs"
    }]
  }

  ngOnInit() {
  }

}
