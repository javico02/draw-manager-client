import { Component, OnInit } from '@angular/core';

import { DrawListConfig, UserService } from '../core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService) { }

  // Fields
  isAuthenticated: boolean;
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
