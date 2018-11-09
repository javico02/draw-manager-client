import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { PrizesService, Prize, PrizeSelectionStepsService, PrizeSelectionStep } from '../../core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'prizes-list',
  templateUrl: './prizes-list.component.html',
  styleUrls: ['./prizes-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PrizesListComponent implements OnInit {

  constructor(
    private modalService: NgbModal,
    private prizesService: PrizesService,
    private prizeSelectionSteps: PrizeSelectionStepsService
  ) {

    this.lottieConfig1 = {
      path: 'assets/confetti.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

    this.lottieConfig2 = {
      path: 'assets/gift.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };

  }

  // Properties
  @Input() drawId: number;
  @Input() drawInfo: { drawName: string, prizesQty: number, entriesQty: number, isClosed: boolean };
  @Output() drawReload = new EventEmitter<boolean>();

  // Html
  @ViewChild('contentAnim') modal: ElementRef;

  // Fields
  errors: {};
  sortingPrize: Prize;
  lastWinner: PrizeSelectionStep;
  prizes$: Observable<Prize[]>;
  anim: any;
  animationIndex: number;
  lottieConfig1: Object;
  lottieConfig2: Object;

  // Methods
  ngOnInit() {
    this.animationIndex = 1;

    this.getAllPrizes();
  }

  getAllPrizes() {
    // Loading prizes
    this.prizes$ = this.prizesService
      .getAll(this.drawId);
  }

  onSelectWinner(prize: Prize) {
    this.errors = {};
    this.sortingPrize = prize;
    this.lastWinner = {} as PrizeSelectionStep;
    this.showModal();

    this.prizeSelectionSteps
      .selectWinner(prize.id)
      .subscribe(pst => {
        // Winner
        this.lastWinner = pst;

        // Getting all prizes
        this.getAllPrizes();

        // Lauch event for draw info reload
        this.drawReload.emit(true);
      },
        errors => {
          this.errors = errors;
        });
  }

  onDeletePrize(prize: Prize) {
    this.errors = {};

    // Deleting draw
    this.prizesService
      .delete(this.drawId, prize.id)
      .subscribe(_ => {
        // Getting all prizes
        this.getAllPrizes();

        // Lauch event for draw info reload
        this.drawReload.emit(true);
      },
        errors => {
          this.errors = errors;
        });
  }

  showModal() {
    this.animationIndex = 1;
    const ms = this.drawInfo.prizesQty === 1
      ? 6000
      : 2000;

    // Opening modal
    this.modalService
      .open(this.modal, { centered: true, backdropClass: 'green-backdrop' })
      .result
      .then(_ => {
        this.sortingPrize = {} as Prize;
      },
        _ => {
          this.sortingPrize = {} as Prize;
        })
      .catch(_ => {
        this.sortingPrize = {} as Prize;
      });

    setTimeout(() => {
      this.animationIndex = 2;
    },
      ms);
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }
}
