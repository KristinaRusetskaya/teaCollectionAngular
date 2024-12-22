import {Component, OnInit} from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'teaProject';
  constructor() {
  }
  ngOnInit() {
    $(document).ready(function () {
      $('.card__image').magnificPopup({
        type: 'image'
      });
      $('.single-item').slick();
      $(function () {
        $("#accordion").accordion();
      });
    })
  }
}

