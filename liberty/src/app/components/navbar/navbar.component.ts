import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('#button button').on('click', function() {
      if ($(this).hasClass('active')) {
                return false;
      } else {
      $('#button button').removeClass('active');
      $(this).addClass('active');
      }
    });
  }

}
