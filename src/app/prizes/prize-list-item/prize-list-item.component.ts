import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faAward, faCheck, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Prize, PrizeSelectionStep, PrizeSelectionStepType } from '../../core';

@Component({
  selector: 'prize-list-item',
  templateUrl: './prize-list-item.component.html',
  styleUrls: ['./prize-list-item.component.css']
})
export class PrizeListItemComponent implements OnInit {

  constructor() {
    this.award = faAward;
    this.check = faCheck;
    this.trash = faTrash;
  }

  // Properties
  @Input() prize: Prize;
  @Input() drawInfo: { entriesQty: number, isClosed: boolean };
  @Output() deletePrize = new EventEmitter<boolean>();
  @Output() selectWinner = new EventEmitter<boolean>();

  // Icons
  award: IconDefinition;
  check: IconDefinition;
  trash: IconDefinition;

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

  execute() {
    this.selectWinner.emit(true);
  }

  delete() {
    this.deletePrize.emit(true);
  }

}
