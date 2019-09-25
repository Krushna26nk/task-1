import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss']
})
export class TasktableComponent implements OnInit {

  constructor() { }

  data = {
    "sample": [{
      "ID": "#320",
      "Assignee": "Mr.Rankov",
      "TaskDetails": "Support Of theme",
      "PaymentMethod":"credit",
      "Paymentstatus":"active",
      "Amount":"$3250",
      "Trackingnumber":"#14454dfdfdf"
    },
    {
      "ID": "#320",
      "Assignee": "Mr.Rankov",
      "TaskDetails": "Support Of theme",
      "PaymentMethod":"credit",
      "Paymentstatus":"active",
      "Amount":"$3250",
      "Trackingnumber":"#14454dfdfdf"
    },
    {
      "ID": "#320",
      "Assignee": "Mr.Rankov",
      "TaskDetails": "Support Of theme",
      "PaymentMethod":"credit",
      "Paymentstatus":"active",
      "Amount":"$3250",
      "Trackingnumber":"#14454dfdfdf"
    },
    {
      "ID": "#320",
      "Assignee": "Mr.Rankov",
      "TaskDetails": "Support Of theme",
      "PaymentMethod":"credit",
      "Paymentstatus":"active",
      "Amount":"$3250",
      "Trackingnumber":"#14454dfdfdf"
    }]
  }

  ngOnInit() {
  }

}
