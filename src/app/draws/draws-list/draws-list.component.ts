import { Component, Input, ViewEncapsulation } from '@angular/core';

import { DrawsService, DrawListConfig, Draw } from '../../core';

@Component({
  selector: 'draws-list',
  providers: [DrawsService],
  templateUrl: './draws-list.component.html',
  styleUrls: ['./draws-list.component.css'],
  // encapsulation: ViewEncapsulation.Native
})
export class DrawsListComponent {

  constructor(
    private drawsService: DrawsService
  ) { }

  // Properties
  @Input() limit: number;
  @Input()
  set config(drawListConfig: DrawListConfig) {
    if (!!drawListConfig) {
      this.currentPage = 1;
      this.drawListConfig = drawListConfig;
      this.getDraws();
    }
  }

  // Fields
  draws: Draw[];
  loading = false;
  currentPage = 1;
  drawListConfig: DrawListConfig;
  totalPages: Array<number> = [1];

  // Methods
  getDraws() {
    this.draws = [];
    this.loading = true;

    // Create limit and offset filter (if necessary)
    if (!!this.limit) {
      this.drawListConfig.filters.limit = this.limit;
      this.drawListConfig.filters.offset = (this.limit * (this.currentPage - 1));
    }

    // Subscribing to query
    this.drawsService
      .query(this.drawListConfig)
      .subscribe(data => {
        this.loading = false;
        this.draws = data.draws;

        // Used from http://www.jstips.co/en/create-range-0...n-easily-using-one-line/
        this.totalPages = (this.draws.length > 0)
          ? Array.from(new Array(Math.ceil(data.drawsCount / this.limit)), (val, index) => index + 1)
          : [1];
      });
  }

  setPageTo(pageNumber) {
    this.currentPage = pageNumber;
    this.getDraws();
  }
}
