import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managetickets',
  templateUrl: './managetickets.component.html',
  styleUrls: ['./managetickets.component.scss']
})
export class ManageticketsComponent implements OnInit {

  constructor() { }

  data = {
    "sample":[{
      "name":"James",
      "imageUrl": "src/assets/images/download.jpeg",
      "id": "#231DG",
      "title": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majorityIpsum available .",
    },
    {
      "name":"Stella",
      "imageUrl": "src/assets/images/image.jpg",
      "id": "#45RF",
      "title": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majorityIpsum available.",
    },
    {
      "name":"John Doe",
      "imageUrl": "src/assets/images/images.jpeg",
      "id": "#234ERF",
      "title": "Contrary to popular belief, Lorem Ipsum is not simply random text.",
      "description": "There are many variations of passages of Lorem Ipsum available, but the majorityIpsum available.",
    }
  ]
  };

  ngOnInit() {
  }

}
