import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Data } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { faCalendarAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';

import { DrawsService, Draw, UserService, Prize, PrizesService } from '../../core';

@Component({
  selector: 'app-draw-details',
  templateUrl: './draw-details.component.html',
  styleUrls: ['./draw-details.component.css']
})
export class DrawDetailsComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private drawsService: DrawsService,
    private prizesService: PrizesService,
  ) {
    this.calendar = faCalendarAlt;
  }

  // Fields
  draw: Draw;
  isDeleting = false;
  isSubmitting = false;
  dataSubs$$: Subscription;
  reloadDrawSubs$$: Subscription;
  prizes$: Observable<Prize[]>;
  canModify$: Observable<boolean>;

  // Icons
  calendar: IconDefinition;

  ngOnInit() {
    // Retreiving the prefetched draw & your prizes
    this.dataSubs$$ = this.route
      .data
      .subscribe((data: { draw: Draw }) => {
        // Getting draw
        this.draw = data.draw;

        this.getAllPrizes();
      });

    // Load if user is authenticathed
    this.canModify$ = this.userService
      .isAuthenticated
      .pipe(take(1));
  }

  ngOnDestroy() {
    // Unsubscribing
    this.dataSubs$$.unsubscribe();
    if (!!this.reloadDrawSubs$$) {
      this.reloadDrawSubs$$.unsubscribe();
    }
  }

  getAllPrizes() {
    // Loading prizes
    this.prizes$ = this.prizesService
      .getAll(this.draw.id);
  }

  executeDraw() {

  }

  deleteDraw() {
    this.drawsService
      .delete(this.draw.id)
      .subscribe(_ => {
        this.router.navigateByUrl('/');
      });
  }

  closeDraw() {
    this.drawsService
      .close(this.draw.id)
      .subscribe(draw => {
        this.draw = draw;
      });
  }

  onDrawReload() {
    this.reloadDrawSubs$$ = this.drawsService
      .get(this.draw.id)
      .subscribe(draw => {
        this.draw = draw;
      });
  }
}
