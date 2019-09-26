import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasktable',
  templateUrl: './tasktable.component.html',
  styleUrls: ['./tasktable.component.scss']
})
export class TasktableComponent implements OnInit {

  constructor() { }

  btnClass;

  data = {
    "sample": [{
      "ID": "#320",
      "Assignee": "Mr.Rankov",
      "TaskDetails": "Support Of theme",
      "PaymentMethod":"Credit Card",
      "Paymentstatus":"Approved",
      "Amount":"$ 32,50",
      "Trackingnumber":"#HDFUDF14454"
    },
    {
      "ID": "#321",
      "Assignee": "Josh D",
      "TaskDetails": "Verify Your Email Address",
      "PaymentMethod":"Internet Banking",
      "Paymentstatus":"Pending",
      "Amount":"$ 32,50",
      "Trackingnumber":"#ABFGC14454d"
    },
    {
      "ID": "#322",
      "Assignee": "Phillepe T",
      "TaskDetails": "Item Support msg send",
      "PaymentMethod":"Credit Card",
      "Paymentstatus":"Approved",
      "Amount":"$ 32,50",
      "Trackingnumber":"#EFRD14454"
    },
    {
      "ID": "#323",
      "Assignee": "Luke Pixel",
      "TaskDetails": "New Submission on website",
      "PaymentMethod":"Cash on Delivery",
      "Paymentstatus":"Rejected",
      "Amount":"$ 32,50",
      "Trackingnumber":"#RDEFR14454"
    }]
  }

  ngOnInit() {
  }

}
