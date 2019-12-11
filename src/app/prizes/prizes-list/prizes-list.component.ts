import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';

import { PrizesService, Prize, PrizeSelectionStepsService, PrizeSelectionStep } from '../../core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../../../environments/environment';

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
  animationTime: number;
  useAnimationTime: boolean;
  lottieConfig1: Object;
  lottieConfig2: Object;

  // Methods
  ngOnInit() {
    this.animationIndex = 1;
    this.animationTime = environment.animation_time;
    this.useAnimationTime = environment.animation_time > 0;

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

    // Si se usa animacion por tiempo (Configuracion)
    if (this.useAnimationTime) {
      setTimeout(() => {
        this.animationIndex = 2;
      },
        this.animationTime);
    }
  }

  showAnimation(animationNumber: number) {
    if (animationNumber === 2) {
      return this.useAnimationTime
        ? this.animationIndex === 1
        : !this.lastWinner.entrantCode;
    }

    if (animationNumber === 3) {
      return this.useAnimationTime
        ? this.animationIndex === 2
        : !!this.lastWinner.entrantCode;
    }

    return false;
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }
}
