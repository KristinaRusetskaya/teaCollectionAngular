import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public showPopup: boolean = false;
  private observable: Observable<boolean>;


  constructor() {
    this.observable = new Observable((observer) => {
      const timeout = setTimeout(() => {
        observer.next(this.showPopup = true);
      }, 10000)
      return {
        unsubscribe: () => {
          clearTimeout(timeout);
        }
      }
    })
  }

  ngOnInit() {
    this.observable.subscribe()
  }
}
