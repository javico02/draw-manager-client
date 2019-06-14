import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Prize, PrizeSelectionStep, PrizeSelectionStepType } from '../../core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'prize-list-item',
  templateUrl: './prize-list-item.component.html',
  styleUrls: ['./prize-list-item.component.css']
})
export class PrizeListItemComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  // Properties
  @Input() prize: Prize;
  @Input() drawInfo: { drawName: string, prizesQty: number, entriesQty: number, isClosed: boolean };
  @Output() deletePrize = new EventEmitter<boolean>();
  @Output() selectWinner = new EventEmitter<boolean>();

  // Methods
  ngOnInit() {
  }

  getWinnerSelectionStep(): PrizeSelectionStep {
    const winner = this.prize
      .selectionSteps
      .find(st => {
        return st.prizeSelectionStepType === PrizeSelectionStepType.Winner;
      });

    return winner;
  }

  execute(content: any) {
    if (!!this.prize.delivered) {
      this.modalService.open(content, { backdropClass: 'green-backdrop' });
    } else {
      this.select();
    }
  }

  delete() {
    this.deletePrize.emit(true);
  }

  select() {
    this.selectWinner.emit(true);
  }

}
