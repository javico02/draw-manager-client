import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { DrawListConfig, UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) { }

  // Fields
  isAuthenticated: boolean;
  today: number = Date.now();
  drawListConfig: DrawListConfig = {
    type: 'all',
    filters: {}
  };

  // Methods
  ngOnInit() {
    this.userService.isAuthenticated.subscribe(
      (authenticated) => {
        this.isAuthenticated = authenticated;
      }
    );
  }
}
